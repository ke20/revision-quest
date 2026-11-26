<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use App\Application\Query\Account\GetAccount\AccountOutput;
use App\Infrastructure\Http\JsonDate;

/**
 * Le schéma Adult du contrat (oas/schemas/account.yaml).
 */
final class AccountJson
{
    /**
     * @return array{id: string, email: string, createdAt: string, privacyAcceptedAt: ?string}
     */
    public static function of(AccountOutput $account): array
    {
        return [
            'id' => $account->id,
            'email' => $account->email,
            'createdAt' => JsonDate::format($account->createdAt),
            'privacyAcceptedAt' => JsonDate::formatOrNull($account->privacyAcceptedAt),
        ];
    }
}
