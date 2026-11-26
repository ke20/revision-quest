<?php

declare(strict_types=1);

namespace App\Application\Bus;

interface CommandBus
{
    /**
     * Envoie un CommandInput à son handler (dans une transaction) et renvoie son Output.
     *
     * @template TOutput of Output
     * @param CommandInput<TOutput> $input
     * @return TOutput
     */
    public function dispatch(CommandInput $input): Output;
}
