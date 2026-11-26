<?php

declare(strict_types=1);

namespace App\Application\Bus;

/**
 * Une demande d'écriture, envoyée sur le bus de commandes (dans une transaction). TOutput = le type de l'Output de son
 * handler (minimal : un id, une version).
 *
 * @template-covariant TOutput of Output
 */
interface CommandInput
{
}
