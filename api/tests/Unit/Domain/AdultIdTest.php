<?php

declare(strict_types=1);

namespace App\Tests\Unit\Domain;

use App\Domain\Account\AdultId;
use PHPUnit\Framework\TestCase;

final class AdultIdTest extends TestCase
{
    public function testAUuid(): void
    {
        $id = AdultId::fromString('019AC1D2-7E3F-7A10-8B2C-3D4E5F607182');

        self::assertSame('019ac1d2-7e3f-7a10-8b2c-3d4e5f607182', $id->value);
        self::assertTrue($id->equals(AdultId::fromString('019ac1d2-7e3f-7a10-8b2c-3d4e5f607182')));
    }

    public function testNotAUuid(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        AdultId::fromString('42');
    }
}
