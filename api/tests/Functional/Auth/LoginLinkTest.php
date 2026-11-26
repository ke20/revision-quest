<?php

declare(strict_types=1);

namespace App\Tests\Functional\Auth;

use App\Tests\Contract\OpenApiContract;
use App\Tests\Functional\ApiTestCase;

final class LoginLinkTest extends ApiTestCase
{
    public function testTheLinkOpensASessionAndCreatesTheAccount(): void
    {
        $this->logIn('Parent@Example.org ');

        $this->call('GET', '/api/me');
        self::assertResponseIsSuccessful();
        self::assertSame('parent@example.org', $this->json()['email']);
        self::assertNull($this->json()['privacyAcceptedAt']);
    }

    public function testTheLinkWorksOnlyOnce(): void
    {
        $link = $this->requestLoginLink('parent@example.org');
        $this->client->request('GET', $link);
        self::assertResponseRedirects('/suivi');

        $this->client->getCookieJar()->clear();
        $this->client->request('GET', $link);
        OpenApiContract::get()->assertResponse('GET', '/api/auth/check', $this->client->getResponse());
        self::assertResponseStatusCodeSame(400);
        self::assertSame('/problems/invalid-login-link', $this->json()['type']);
    }

    public function testAnEarlierLinkStopsWorkingAfterALogin(): void
    {
        $this->logIn('parent@example.org');
        $first = $this->requestLoginLink('parent@example.org');
        $second = $this->requestLoginLink('parent@example.org');

        $this->client->request('GET', $second);
        self::assertResponseRedirects('/suivi');
        $this->client->request('GET', $first);
        self::assertResponseStatusCodeSame(400);
    }

    public function testAUsedLinkStaysUsedAfterTheAccountIsDeleted(): void
    {
        $link = $this->requestLoginLink('parent@example.org');
        $this->client->request('GET', $link);
        $this->call('DELETE', '/api/me');
        self::assertResponseIsSuccessful();

        $this->client->request('GET', $link);
        self::assertResponseStatusCodeSame(400);
    }

    public function testATamperedLinkIsRefused(): void
    {
        $link = $this->requestLoginLink('parent@example.org');

        $tampered = preg_replace('/([?&]user=)[^&]+/', '$1intrus%40example.org', $link);
        self::assertNotSame($link, $tampered);
        $this->client->request('GET', (string) $tampered);
        self::assertResponseStatusCodeSame(400);
    }

    public function testAnInvalidEmailIsAValidationProblem(): void
    {
        $this->call('POST', '/api/auth/link', ['email' => 'pas-un-email']);

        self::assertResponseStatusCodeSame(400);
        self::assertSame('email', $this->json()['violations'][0]['field']);
        self::assertEmailCount(0);
    }

    public function testAnUnexpectedFieldIsRefused(): void
    {
        $this->call('POST', '/api/auth/link', ['email' => 'parent@example.org', 'admin' => true]);

        self::assertResponseStatusCodeSame(400);
        self::assertSame('admin', $this->json()['violations'][0]['field']);
    }

    public function testOnlyJsonIsAccepted(): void
    {
        $this->call('POST', '/api/auth/link', 'email=parent@example.org', 'application/x-www-form-urlencoded');

        self::assertResponseStatusCodeSame(415);
    }

    public function testARequestFromAnotherSiteIsRefused(): void
    {
        $this->client->request('POST', '/api/auth/link', server: ['HTTP_ORIGIN' => 'https://evil.example', 'CONTENT_TYPE' => 'application/json'], content: '{"email":"parent@example.org"}');
        self::assertResponseStatusCodeSame(403);

        $this->client->request('POST', '/api/auth/link', server: ['CONTENT_TYPE' => 'application/json'], content: '{"email":"parent@example.org"}');
        self::assertResponseStatusCodeSame(403);
        self::assertEmailCount(0);
    }

    public function testAForeignHostNeverGetsALink(): void
    {
        $this->client->request('POST', 'http://evil.example/api/auth/link', server: ['HTTP_ORIGIN' => 'http://evil.example', 'CONTENT_TYPE' => 'application/json'], content: '{"email":"parent@example.org"}');

        self::assertResponseStatusCodeSame(400);
        self::assertEmailCount(0);
    }

    public function testTooManyRequestsForOneEmail(): void
    {
        for ($i = 0; $i < 3; ++$i) {
            $this->request('POST', '/api/auth/link', ['email' => 'parent@example.org']);
            self::assertResponseStatusCodeSame(202);
        }

        $this->call('POST', '/api/auth/link', ['email' => 'PARENT@example.org']);
        self::assertResponseStatusCodeSame(429);
        self::assertGreaterThan(0, (int) $this->client->getResponse()->headers->get('Retry-After'));
    }

    public function testLogout(): void
    {
        $this->logIn();

        $this->call('POST', '/api/auth/logout');
        self::assertResponseStatusCodeSame(204);

        $this->call('GET', '/api/me');
        self::assertResponseStatusCodeSame(401);
    }

    public function testLogoutWithoutASession(): void
    {
        $this->call('POST', '/api/auth/logout');

        self::assertResponseStatusCodeSame(401);
    }
}
