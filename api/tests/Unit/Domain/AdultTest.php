<?php

declare(strict_types=1);

namespace App\Tests\Unit\Domain;

use App\Domain\Account\Adult;
use App\Domain\Shared\Email;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Clock\Test\ClockSensitiveTrait;

final class AdultTest extends TestCase
{
    use ClockSensitiveTrait;

    public function testTheAccountIsBornLoggedIn(): void
    {
        self::mockTime('2026-11-26 10:00:00');

        $adult = Adult::firstLogin(Email::fromString('parent@example.org'));

        self::assertEquals(new \DateTimeImmutable('2026-11-26 10:00:00'), $adult->createdAt());
        self::assertEquals($adult->createdAt(), $adult->lastLoginAt());
        self::assertSame(1, $adult->loginCount());
        self::assertNull($adult->privacyAcceptedAt());
    }

    public function testEachLoginIsCounted(): void
    {
        self::mockTime('2026-11-26 10:00:00');
        $adult = Adult::firstLogin(Email::fromString('parent@example.org'));

        self::mockTime('2026-11-27 08:00:00');
        $adult->logIn();

        self::assertSame(2, $adult->loginCount());
        self::assertEquals(new \DateTimeImmutable('2026-11-27 08:00:00'), $adult->lastLoginAt());
        self::assertEquals(new \DateTimeImmutable('2026-11-26 10:00:00'), $adult->createdAt());
    }

    public function testThePrivacyPolicyKeepsItsFirstAcceptance(): void
    {
        $adult = Adult::firstLogin(Email::fromString('parent@example.org'));

        self::mockTime('2026-11-26 10:00:00');
        $adult->acceptPrivacy();
        self::mockTime('2026-11-28 10:00:00');
        $adult->acceptPrivacy();

        self::assertEquals(new \DateTimeImmutable('2026-11-26 10:00:00'), $adult->privacyAcceptedAt());
    }
}
