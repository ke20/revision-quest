<?php

declare(strict_types=1);

namespace App\Domain\Shared;

/**
 * Une adresse e-mail, normalisée : sans espaces autour, en minuscules. Deux écritures de la même adresse donnent le
 * même Email. La validation fine du format est faite à l'entrée (Validator) ; ici, seulement l'invariant.
 */
final readonly class Email implements \Stringable
{
    public const int MAX_LENGTH = 254;

    private function __construct(
        public string $value,
    ) {
    }

    public static function fromString(string $value): self
    {
        $value = mb_strtolower(trim($value));
        if (mb_strlen($value) > self::MAX_LENGTH || 1 !== preg_match('/^[^@\s]+@[^@\s]+$/u', $value)) {
            throw new \InvalidArgumentException('Invalid e-mail address.');
        }

        return new self($value);
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
