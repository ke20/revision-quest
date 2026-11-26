<?php

declare(strict_types=1);

namespace App\Application\Query\Health;

use App\Application\Bus\QueryInput;

/**
 * @implements QueryInput<HealthOutput>
 */
final readonly class HealthInput implements QueryInput
{
}
