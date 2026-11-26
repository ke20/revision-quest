<?php

declare(strict_types=1);

namespace App\Application\Query\Account\Export;

use App\Application\Bus\QueryInput;
use App\Domain\Account\AdultId;

/**
 * Toutes les données liées au compte (droit d'accès et de portabilité).
 *
 * @implements QueryInput<ExportOutput>
 */
final readonly class ExportInput implements QueryInput
{
    public function __construct(
        public AdultId $adultId,
    ) {
    }
}
