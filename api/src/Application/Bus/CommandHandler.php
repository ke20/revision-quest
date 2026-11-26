<?php

declare(strict_types=1);

namespace App\Application\Bus;

/**
 * Marque un handler de commande (écriture). Il expose __invoke(UnInput): UnOutput ; câblé sur command.bus par services.yaml.
 */
interface CommandHandler
{
}
