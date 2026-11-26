<?php

declare(strict_types=1);

namespace App\Infrastructure\Doctrine\Type;

use App\Domain\Account\AdultId;
use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\GuidType;

/**
 * AdultId en colonne UUID (PostgreSQL). Nom à utiliser dans les attributs du domaine : 'adult_id'.
 */
final class AdultIdType extends GuidType
{
    public const string NAME = 'adult_id';

    public function convertToPHPValue(mixed $value, AbstractPlatform $platform): ?AdultId
    {
        return null === $value ? null : AdultId::fromString((string) $value);
    }

    public function convertToDatabaseValue(mixed $value, AbstractPlatform $platform): ?string
    {
        return $value instanceof AdultId ? $value->value : (null === $value ? null : (string) $value);
    }
}
