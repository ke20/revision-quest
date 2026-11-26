<?php

declare(strict_types=1);

namespace App\Domain\Account;

use Symfony\Component\Uid\Uuid;

/**
 * L'identifiant d'un adulte : un UUID, qu'on ne confond pas avec celui d'un enfant ou d'un appareil.
 */
final readonly class AdultId implements \Stringable
{
    private function __construct(
        public string $value,
    ) {
    }

    /**
     * UUID v7 : triés par date de création, ce qui garde les index de PostgreSQL compacts.
     */
    public static function generate(): self
    {
        return new self(Uuid::v7()->toRfc4122());
    }

    public static function fromString(string $value): self
    {
        if (!Uuid::isValid($value)) {
            throw new \InvalidArgumentException(\sprintf('"%s" is not a UUID.', $value));
        }

        return new self(Uuid::fromString($value)->toRfc4122());
    }

    public function equals(self $other): bool
    {
        return $this->value === $other->value;
    }

    public function __toString(): string
    {
        return $this->value;
    }
}
