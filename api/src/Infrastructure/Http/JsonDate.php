<?php

declare(strict_types=1);

namespace App\Infrastructure\Http;

/**
 * Les dates de l'API : ISO 8601 en UTC, à la seconde (2026-11-26T18:30:00Z).
 */
final class JsonDate
{
    public static function format(\DateTimeImmutable $date): string
    {
        return $date->setTimezone(new \DateTimeZone('UTC'))->format('Y-m-d\TH:i:s\Z');
    }

    public static function formatOrNull(?\DateTimeImmutable $date): ?string
    {
        return $date instanceof \DateTimeImmutable ? self::format($date) : null;
    }
}
