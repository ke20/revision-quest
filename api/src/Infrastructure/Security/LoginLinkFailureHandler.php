<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Infrastructure\Http\Problem\Problem;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;

/**
 * Lien expiré, déjà utilisé ou modifié : 400, sans dire lequel des trois.
 */
final readonly class LoginLinkFailureHandler implements AuthenticationFailureHandlerInterface
{
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): JsonResponse
    {
        return Problem::response(
            400,
            title: 'Ce lien de connexion ne marche plus.',
            detail: 'Il a expiré ou a déjà servi. Demandez-en un nouveau.',
            type: '/problems/invalid-login-link',
            extra: ['violations' => []],
        );
    }
}
