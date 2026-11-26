<?php

declare(strict_types=1);

namespace App\Application\Query\Health;

use App\Application\Bus\Output;

final readonly class HealthOutput implements Output
{
    public function __construct(
        public bool $database,
    ) {
    }

    public function isHealthy(): bool
    {
        return $this->database;
    }
}
