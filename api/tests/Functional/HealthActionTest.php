<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class HealthActionTest extends WebTestCase
{
    public function testTheServerAndTheDatabaseAnswer(): void
    {
        $client = self::createClient();
        $client->request('GET', '/api/v1/health');

        self::assertResponseIsSuccessful();
        self::assertResponseHeaderSame('Content-Type', 'application/json');
        self::assertJsonStringEqualsJsonString('{"status":"ok","database":"ok"}', (string) $client->getResponse()->getContent());
    }
}
