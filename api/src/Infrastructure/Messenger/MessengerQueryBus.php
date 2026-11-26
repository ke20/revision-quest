<?php

declare(strict_types=1);

namespace App\Infrastructure\Messenger;

use App\Application\Bus\Output;
use App\Application\Bus\QueryBus;
use App\Application\Bus\QueryInput;
use Symfony\Component\Messenger\HandleTrait;
use Symfony\Component\Messenger\MessageBusInterface;

final class MessengerQueryBus implements QueryBus
{
    use HandleTrait;

    public function __construct(MessageBusInterface $queryBus)
    {
        $this->messageBus = $queryBus;
    }

    public function ask(QueryInput $input): Output
    {
        $output = $this->handle($input);
        if (!$output instanceof Output) {
            throw new \LogicException(\sprintf('The handler of %s must return an %s.', $input::class, Output::class));
        }

        /* @phpstan-ignore return.type (the handler of a QueryInput<T> returns a T: Messenger cannot type it) */
        return $output;
    }
}
