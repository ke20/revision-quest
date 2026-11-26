<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RecordLogin;

use App\Application\Bus\Output;
use App\Domain\Account\AdultId;

final readonly class RecordLoginOutput implements Output
{
    public function __construct(
        public AdultId $adultId,
        public bool $created,
    ) {
    }
}
