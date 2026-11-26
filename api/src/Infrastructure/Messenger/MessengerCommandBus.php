<?php

declare(strict_types=1);

namespace App\Infrastructure\Messenger;

use App\Application\Bus\CommandBus;
use App\Application\Bus\CommandInput;
use App\Application\Bus\Output;
use Symfony\Component\Messenger\HandleTrait;
use Symfony\Component\Messenger\MessageBusInterface;

final class MessengerCommandBus implements CommandBus
{
    use HandleTrait;

    public function __construct(MessageBusInterface $commandBus)
    {
        $this->messageBus = $commandBus;
    }

    public function dispatch(CommandInput $input): Output
    {
        $output = $this->handle($input);
        if (!$output instanceof Output) {
            throw new \LogicException(\sprintf('The handler of %s must return an %s.', $input::class, Output::class));
        }

        /* @phpstan-ignore return.type (the handler of a CommandInput<T> returns a T: Messenger cannot type it) */
        return $output;
    }
}
