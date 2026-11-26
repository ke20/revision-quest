<?php

declare(strict_types=1);

namespace App\Application\Bus;

interface QueryBus
{
    /**
     * Envoie un QueryInput à son handler de lecture et renvoie son Output.
     *
     * @template TOutput of Output
     * @param QueryInput<TOutput> $input
     * @return TOutput
     */
    public function ask(QueryInput $input): Output;
}
