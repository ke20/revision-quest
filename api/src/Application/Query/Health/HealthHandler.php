<?php

declare(strict_types=1);

namespace App\Application\Query\Health;

use App\Application\Bus\QueryHandler;
use App\Application\Port\DatabaseProbe;

final readonly class HealthHandler implements QueryHandler
{
    public function __construct(
        private DatabaseProbe $database,
    ) {
    }

    public function __invoke(HealthInput $input): HealthOutput
    {
        return new HealthOutput(database: $this->database->isReachable());
    }
}
