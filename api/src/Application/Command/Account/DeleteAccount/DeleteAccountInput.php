<?php

declare(strict_types=1);

namespace App\Application\Command\Account\DeleteAccount;

use App\Application\Bus\CommandInput;
use App\Domain\Account\AdultId;

/**
 * @implements CommandInput<DeleteAccountOutput>
 */
final readonly class DeleteAccountInput implements CommandInput
{
    public function __construct(
        public AdultId $adultId,
    ) {
    }
}
