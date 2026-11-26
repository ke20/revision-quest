<?php

declare(strict_types=1);

namespace App\Infrastructure\Doctrine;

use App\Application\Port\DatabaseProbe;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Exception as DbalException;

final readonly class DbalDatabaseProbe implements DatabaseProbe
{
    public function __construct(
        private Connection $connection,
    ) {
    }

    public function isReachable(): bool
    {
        try {
            $this->connection->executeQuery('SELECT 1');

            return true;
        } catch (DbalException) {
            return false;
        }
    }
}
