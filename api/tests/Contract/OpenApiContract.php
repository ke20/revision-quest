<?php

declare(strict_types=1);

namespace App\Tests\Contract;

use Opis\JsonSchema\Errors\ErrorFormatter;
use Opis\JsonSchema\Errors\ValidationError;
use Opis\JsonSchema\Uri;
use Opis\JsonSchema\Validator;
use PHPUnit\Framework\Assert;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Yaml\Yaml;

/**
 * Le contrat oas/ (OpenAPI 3.1), lu directement dans ses fichiers YAML. Une réponse de l'API doit avoir un statut
 * prévu par le contrat pour cette opération, le bon Content-Type, et un corps valide contre son schéma (JSON Schema
 * 2020-12, ce que sont les schémas d'OpenAPI 3.1).
 */
final class OpenApiContract
{
    private const string PREFIX = '/api';

    private static ?self $instance = null;

    private readonly Validator $validator;

    /** @var array<string, array<mixed>> fichiers YAML lus, en tableaux */
    private array $files = [];

    private function __construct(
        private readonly string $root,
    ) {
        $this->validator = new Validator();
        $this->validator->setMaxErrors(5);
        $this->validator->resolver()?->registerProtocol('file', static fn (Uri $uri): mixed => Yaml::parseFile((string) $uri->path(), Yaml::PARSE_OBJECT_FOR_MAP));
    }

    public static function get(): self
    {
        return self::$instance ??= new self((string) realpath(__DIR__.'/../../../oas/openapi.yaml'));
    }

    public function assertResponse(string $method, string $path, Response $response): void
    {
        $operation = $this->operation($method, $path);
        $status = (string) $response->getStatusCode();
        $responses = $this->child($operation, 'responses');
        Assert::assertArrayHasKey($status, $responses[2], \sprintf('%s %s: status %s is not in the contract.', $method, $path, $status));
        $expected = $this->follow($this->child($responses, $status));

        $body = (string) $response->getContent();
        if (!isset($expected[2]['content'])) {
            Assert::assertSame('', $body, \sprintf('%s %s %s: the contract has no body.', $method, $path, $status));

            return;
        }

        $contentType = explode(';', (string) $response->headers->get('Content-Type'))[0];
        $contents = $this->child($expected, 'content');
        Assert::assertArrayHasKey($contentType, $contents[2], \sprintf('%s %s %s: Content-Type "%s" is not in the contract.', $method, $path, $status, $contentType));
        [$file, $pointer] = $this->child($this->child($contents, $contentType), 'schema');

        $result = $this->validator->validate(json_decode($body, false, flags: \JSON_THROW_ON_ERROR), (object) ['$ref' => 'file://'.$file.'#'.$pointer]);
        $error = $result->error();
        if ($error instanceof ValidationError) {
            Assert::fail(\sprintf(
                "%s %s %s: the body does not match the contract.\n%s\n%s",
                $method,
                $path,
                $status,
                json_encode(new ErrorFormatter()->format($error), \JSON_PRETTY_PRINT | \JSON_UNESCAPED_UNICODE | \JSON_UNESCAPED_SLASHES),
                $body,
            ));
        }
    }

    /**
     * @return array{string, string, array<mixed>}
     */
    private function operation(string $method, string $path): array
    {
        Assert::assertStringStartsWith(self::PREFIX, $path);
        $path = substr(parse_url($path, \PHP_URL_PATH) ?: '', \strlen(self::PREFIX));
        $paths = $this->child([$this->root, '', $this->file($this->root)], 'paths');
        foreach (array_keys($paths[2]) as $template) {
            $pattern = '#^'.preg_replace('/\\\{[^}]+\\\}/', '[^/]+', preg_quote((string) $template, '#')).'$#';
            if (1 === preg_match($pattern, $path)) {
                $item = $this->follow($this->child($paths, (string) $template));
                Assert::assertArrayHasKey(strtolower($method), $item[2], \sprintf('%s %s is not in the contract.', $method, $template));

                return $this->child($item, strtolower($method));
            }
        }

        Assert::fail(\sprintf('No path of the contract matches %s.', $path));
    }

    /**
     * Un nœud : [fichier, pointeur JSON, valeur].
     *
     * @param array{string, string, array<mixed>} $node
     * @return array{string, string, array<mixed>}
     */
    private function child(array $node, string $key): array
    {
        $value = $node[2][$key] ?? null;
        Assert::assertIsArray($value, \sprintf('Missing "%s" in %s#%s.', $key, $node[0], $node[1]));

        return [$node[0], $node[1].'/'.str_replace(['~', '/'], ['~0', '~1'], $key), $value];
    }

    /**
     * Suit un $ref (relatif au fichier du nœud) jusqu'au nœud visé.
     *
     * @param array{string, string, array<mixed>} $node
     * @return array{string, string, array<mixed>}
     */
    private function follow(array $node): array
    {
        while (\is_string($ref = $node[2]['$ref'] ?? null)) {
            [$relative, $pointer] = explode('#', $ref, 2) + [1 => ''];
            $file = '' === $relative ? $node[0] : (string) realpath(\dirname($node[0]).'/'.$relative);
            $value = $this->file($file);
            foreach ('' === $pointer ? [] : explode('/', ltrim($pointer, '/')) as $part) {
                $value = $value[str_replace(['~1', '~0'], ['/', '~'], $part)] ?? null;
                Assert::assertIsArray($value, \sprintf('Broken $ref "%s" in %s.', $ref, $node[0]));
            }
            $node = [$file, $pointer, $value];
        }

        return $node;
    }

    /**
     * @return array<mixed>
     */
    private function file(string $file): array
    {
        if (!isset($this->files[$file])) {
            Assert::assertFileExists($file, 'The contract oas/ is not readable (in Docker: mounted on /oas, see compose.yaml).');
            $data = Yaml::parseFile($file);
            Assert::assertIsArray($data);
            $this->files[$file] = $data;
        }

        return $this->files[$file];
    }
}
