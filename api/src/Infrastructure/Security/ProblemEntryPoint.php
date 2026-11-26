<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Infrastructure\Http\Problem\Problem;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

/**
 * Pas de session valable : 401, jamais de redirection (l'API ne sert aucune page).
 */
final readonly class ProblemEntryPoint implements AuthenticationEntryPointInterface
{
    public function start(Request $request, ?AuthenticationException $authException = null): JsonResponse
    {
        return Problem::response(401);
    }
}
