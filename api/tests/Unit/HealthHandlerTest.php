<?php

declare(strict_types=1);

namespace App\Tests\Unit;

use App\Application\Port\DatabaseProbe;
use App\Application\Query\Health\HealthHandler;
use App\Application\Query\Health\HealthInput;
use PHPUnit\Framework\TestCase;

final class HealthHandlerTest extends TestCase
{
    public function testHealthyWhenTheDatabaseAnswers(): void
    {
        $output = new HealthHandler($this->probe(true))(new HealthInput());

        self::assertTrue($output->isHealthy());
    }

    public function testDegradedWhenTheDatabaseIsDown(): void
    {
        $output = new HealthHandler($this->probe(false))(new HealthInput());

        self::assertFalse($output->database);
        self::assertFalse($output->isHealthy());
    }

    private function probe(bool $reachable): DatabaseProbe
    {
        return new readonly class($reachable) implements DatabaseProbe {
            public function __construct(private bool $reachable)
            {
            }

            public function isReachable(): bool
            {
                return $this->reachable;
            }
        };
    }
}
