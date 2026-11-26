<?php

declare(strict_types=1);

namespace App\Domain\Account\Exception;

use App\Domain\Account\AdultId;

/**
 * Le compte n'existe plus (supprimé pendant que la session était ouverte).
 */
final class AdultNotFoundException extends \DomainException
{
    public static function withId(AdultId $id): self
    {
        return new self(\sprintf('Adult "%s" not found.', $id));
    }
}
