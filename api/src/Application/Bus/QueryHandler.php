<?php

declare(strict_types=1);

namespace App\Application\Bus;

/**
 * Marque un handler de requête (lecture). Il expose __invoke(UnInput): UnOutput ; câblé sur query.bus par services.yaml.
 */
interface QueryHandler
{
}
