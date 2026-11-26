<?php

declare(strict_types=1);

namespace App\Application\Command\Account\AcceptPrivacy;

use App\Application\Bus\CommandInput;
use App\Domain\Account\AdultId;

/**
 * @implements CommandInput<AcceptPrivacyOutput>
 */
final readonly class AcceptPrivacyInput implements CommandInput
{
    public function __construct(
        public AdultId $adultId,
    ) {
    }
}
