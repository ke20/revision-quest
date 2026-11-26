<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Auth;

use App\Application\Bus\CommandBus;
use App\Application\Command\Account\RequestLoginLink\RequestLoginLinkInput;
use App\Domain\Shared\Email;
use App\Infrastructure\Http\JsonPayload;
use Symfony\Component\DependencyInjection\Attribute\Target;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;
use Symfony\Component\RateLimiter\RateLimiterFactoryInterface;
use Symfony\Component\Routing\Attribute\Route;

/**
 * POST /api/auth/link : envoie un lien de connexion. Toujours 202, que le compte existe ou non.
 */
#[AsController]
final readonly class RequestLoginLinkAction
{
    public function __construct(
        private CommandBus $commandBus,
        #[Target('login_link_ip')]
        private RateLimiterFactoryInterface $ipLimiter,
        #[Target('login_link_email')]
        private RateLimiterFactoryInterface $emailLimiter,
    ) {
    }

    #[Route('/auth/link', name: 'auth_link', methods: ['POST'])]
    public function __invoke(
        Request $request,
        #[JsonPayload] LoginLinkPayload $payload,
    ): Response {
        // l'e-mail n'est jamais gardé en clair, même dans le cache des compteurs
        $email = Email::fromString($payload->email);
        $emailKey = hash('sha256', $email->value);
        foreach ([$this->ipLimiter->create($request->getClientIp()), $this->emailLimiter->create($emailKey)] as $limiter) {
            $limit = $limiter->consume();
            if (!$limit->isAccepted()) {
                throw new TooManyRequestsHttpException(max(1, $limit->getRetryAfter()->getTimestamp() - time()));
            }
        }

        $this->commandBus->dispatch(new RequestLoginLinkInput($email));

        return new Response(status: 202);
    }
}
