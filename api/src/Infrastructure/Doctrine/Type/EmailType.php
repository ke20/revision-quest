<?php

declare(strict_types=1);

namespace App\Infrastructure\Doctrine\Type;

use App\Domain\Shared\Email;
use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\StringType;

/**
 * Email en colonne texte. Nom à utiliser dans les attributs du domaine : 'email'.
 */
final class EmailType extends StringType
{
    public const string NAME = 'email';

    public function convertToPHPValue(mixed $value, AbstractPlatform $platform): ?Email
    {
        return null === $value ? null : Email::fromString((string) $value);
    }

    public function convertToDatabaseValue(mixed $value, AbstractPlatform $platform): ?string
    {
        return $value instanceof Email ? $value->value : (null === $value ? null : (string) $value);
    }
}
