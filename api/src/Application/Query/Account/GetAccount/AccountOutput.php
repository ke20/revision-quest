<?php

declare(strict_types=1);

namespace App\Application\Query\Account\GetAccount;

use App\Application\Bus\Output;
use App\Domain\Account\Adult;

final readonly class AccountOutput implements Output
{
    public function __construct(
        public string $id,
        public string $email,
        public \DateTimeImmutable $createdAt,
        public ?\DateTimeImmutable $privacyAcceptedAt,
    ) {
    }

    public static function of(Adult $adult): self
    {
        return new self($adult->id()->value, $adult->email()->value, $adult->createdAt(), $adult->privacyAcceptedAt());
    }
}
