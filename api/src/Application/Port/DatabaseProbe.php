<?php

declare(strict_types=1);

namespace App\Application\Port;

/**
 * Vérifie que la base de données répond (route de santé).
 */
interface DatabaseProbe
{
    public function isReachable(): bool;
}
