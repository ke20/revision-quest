<?php

declare(strict_types=1);

namespace App\Tests\Unit\Domain;

use App\Domain\Shared\Email;
use PHPUnit\Framework\Attributes\TestWith;
use PHPUnit\Framework\TestCase;

final class EmailTest extends TestCase
{
    public function testTwoWritingsOfTheSameAddressAreEqual(): void
    {
        $email = Email::fromString('  Parent@Example.ORG ');

        self::assertSame('parent@example.org', $email->value);
        self::assertTrue($email->equals(Email::fromString('parent@example.org')));
    }

    #[TestWith([''])]
    #[TestWith(['parent'])]
    #[TestWith(['parent@@example.org'])]
    #[TestWith(['pa rent@example.org'])]
    public function testNotAnAddress(string $value): void
    {
        $this->expectException(\InvalidArgumentException::class);
        Email::fromString($value);
    }

    public function testTooLong(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        Email::fromString(str_repeat('a', 250).'@example.org');
    }
}
