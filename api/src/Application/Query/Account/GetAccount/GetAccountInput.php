<?php

declare(strict_types=1);

namespace App\Application\Query\Account\GetAccount;

use App\Application\Bus\QueryInput;
use App\Domain\Account\AdultId;

/**
 * @implements QueryInput<AccountOutput>
 */
final readonly class GetAccountInput implements QueryInput
{
    public function __construct(
        public AdultId $adultId,
    ) {
    }
}
