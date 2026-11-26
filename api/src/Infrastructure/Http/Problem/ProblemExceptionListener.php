<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Problem;

use App\Domain\Account\Exception\AdultNotFoundException;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * Toute erreur sous /api devient un Problem Details. Le message d'une exception interne n'est jamais montré.
 */
#[AsEventListener(event: KernelEvents::EXCEPTION, priority: -64)]
final readonly class ProblemExceptionListener
{
    public function __construct(
        private LoggerInterface $logger,
    ) {
    }

    public function __invoke(ExceptionEvent $event): void
    {
        if (!str_starts_with($event->getRequest()->getPathInfo(), '/api/')) {
            return;
        }

        $exception = $event->getThrowable();

        if ($exception instanceof AdultNotFoundException) {
            // le compte a été supprimé pendant que la session était ouverte
            $event->setResponse(Problem::response(401));

            return;
        }

        if (!$exception instanceof HttpExceptionInterface) {
            $this->logger->error('Unhandled exception in the API.', ['exception' => $exception]);
            $event->setResponse(Problem::response(500));

            return;
        }

        $status = $exception->getStatusCode();
        /** @var array<string, string> $headers */
        $headers = array_map(strval(...), array_intersect_key($exception->getHeaders(), ['Retry-After' => true, 'Allow' => true]));

        $validation = $exception->getPrevious();
        if ($validation instanceof ValidationFailedException) {
            $event->setResponse(Problem::response(400, type: '/problems/validation', extra: ['violations' => $this->violations($validation)], headers: $headers));

            return;
        }

        // 422 : le contrat n'en a pas, une donnée refusée est un 400
        $event->setResponse(Problem::response(422 === $status ? 400 : $status, headers: $headers));
    }

    /**
     * @return list<array{field: string, message: string}>
     */
    private function violations(ValidationFailedException $exception): array
    {
        return array_values(array_map(
            static fn (ConstraintViolationInterface $violation): array => [
                'field' => $violation->getPropertyPath(),
                'message' => (string) $violation->getMessage(),
            ],
            iterator_to_array($exception->getViolations()),
        ));
    }
}
