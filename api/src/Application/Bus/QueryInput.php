<?php

declare(strict_types=1);

namespace App\Application\Bus;

/**
 * Une demande de lecture, envoyée sur le bus de requêtes. TOutput = le type de l'Output de son handler.
 *
 * @template-covariant TOutput of Output
 */
interface QueryInput
{
}
