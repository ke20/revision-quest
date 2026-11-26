<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use App\Tests\Contract\OpenApiContract;
use Psr\Cache\CacheItemPoolInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Mime\Email;

abstract class ApiTestCase extends WebTestCase
{
    protected KernelBrowser $client;

    protected function setUp(): void
    {
        $this->client = self::createClient();
        // compteurs des limites de débit et liens déjà utilisés remis à zéro : un test ne bloque pas le suivant (deux
        // tests dans la même seconde demandent le même lien)
        foreach (['rate_limiter.cache', 'login_link.used_cache'] as $id) {
            $pool = self::getContainer()->get($id);
            self::assertInstanceOf(CacheItemPoolInterface::class, $pool);
            $pool->clear();
        }
    }

    /**
     * Une requête comme la ferait le jeu ou la page de suivi : JSON, depuis le site lui-même (en-tête Origin).
     *
     * @param array<mixed>|string|null $body
     */
    protected function request(string $method, string $path, array|string|null $body = null, string $contentType = 'application/json'): void
    {
        $this->client->request(
            $method,
            $path,
            server: ['HTTP_ORIGIN' => 'http://localhost', 'CONTENT_TYPE' => $contentType, 'HTTP_ACCEPT' => 'application/json'],
            content: \is_array($body) ? json_encode($body, \JSON_THROW_ON_ERROR) : $body,
        );
    }

    /**
     * Fait la requête et vérifie la réponse contre le contrat oas/.
     *
     * @param array<mixed>|string|null $body
     */
    protected function call(string $method, string $path, array|string|null $body = null, string $contentType = 'application/json'): void
    {
        $this->request($method, $path, $body, $contentType);
        OpenApiContract::get()->assertResponse($method, $path, $this->client->getResponse());
    }

    /**
     * @return array<mixed>
     */
    protected function json(): array
    {
        $data = json_decode((string) $this->client->getResponse()->getContent(), true, flags: \JSON_THROW_ON_ERROR);
        self::assertIsArray($data);

        return $data;
    }

    /**
     * Demande un lien et renvoie l'adresse reçue par e-mail.
     */
    protected function requestLoginLink(string $email): string
    {
        $this->call('POST', '/api/auth/link', ['email' => $email]);
        self::assertResponseStatusCodeSame(202);
        self::assertEmailCount(1);
        $message = self::getMailerMessage();
        self::assertInstanceOf(Email::class, $message);
        if (1 !== preg_match('#http://localhost/api/auth/check\?\S+#', (string) $message->getTextBody(), $match)) {
            self::fail('No login link in the e-mail.');
        }

        return $match[0];
    }

    protected function logIn(string $email = 'parent@example.org'): void
    {
        $link = $this->requestLoginLink($email);
        $this->client->request('GET', $link);
        self::assertResponseRedirects('/suivi');
    }
}
