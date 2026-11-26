<?php

declare(strict_types=1);

namespace App\Tests\Functional\Me;

use App\Tests\Functional\ApiTestCase;

final class MeTest extends ApiTestCase
{
    public function testWithoutASession(): void
    {
        foreach (['GET /api/me', 'GET /api/me/export', 'DELETE /api/me'] as $route) {
            [$method, $path] = explode(' ', $route);
            $this->call($method, $path);
            self::assertResponseStatusCodeSame(401, $route);
        }

        $this->call('PATCH', '/api/me', ['privacyAccepted' => true]);
        self::assertResponseStatusCodeSame(401);
    }

    public function testAcceptThePrivacyPolicy(): void
    {
        $this->logIn();

        $this->call('PATCH', '/api/me', ['privacyAccepted' => true]);
        self::assertResponseIsSuccessful();
        $acceptedAt = $this->json()['privacyAcceptedAt'];
        self::assertIsString($acceptedAt);

        // une seconde acceptation garde la première date
        $this->call('PATCH', '/api/me', ['privacyAccepted' => true]);
        self::assertSame($acceptedAt, $this->json()['privacyAcceptedAt']);
    }

    public function testThePrivacyPolicyCannotBeRefused(): void
    {
        $this->logIn();

        $this->call('PATCH', '/api/me', ['privacyAccepted' => false]);
        self::assertResponseStatusCodeSame(400);
        self::assertSame('privacyAccepted', $this->json()['violations'][0]['field']);
    }

    public function testExport(): void
    {
        $this->logIn();

        $this->call('GET', '/api/me/export');
        self::assertResponseIsSuccessful();
        self::assertResponseHeaderSame('Content-Disposition', 'attachment; filename="revision-quest-export.json"');
        self::assertSame('parent@example.org', $this->json()['adult']['email']);
    }

    public function testDeleteTheAccount(): void
    {
        $this->logIn();
        $this->call('GET', '/api/me');
        $id = $this->json()['id'];

        $this->call('DELETE', '/api/me');
        self::assertResponseIsSuccessful();
        self::assertSame(['deletedChildren' => [], 'keptChildren' => []], $this->json());

        $this->call('GET', '/api/me');
        self::assertResponseStatusCodeSame(401);

        // une nouvelle connexion crée un nouveau compte ; une seconde plus tard, sinon le lien demandé serait le même
        // que le premier (même adresse sans compte, même expiration), déjà utilisé
        sleep(1);
        $this->logIn();
        $this->call('GET', '/api/me');
        self::assertNotSame($id, $this->json()['id']);
    }
}
