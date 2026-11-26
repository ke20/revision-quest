<?php

declare(strict_types=1);

namespace App\Application\Command\Account\AcceptPrivacy;

use App\Application\Bus\Output;
use App\Domain\Account\AdultId;

final readonly class AcceptPrivacyOutput implements Output
{
    public function __construct(
        public AdultId $adultId,
    ) {
    }
}
