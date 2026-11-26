<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Auth;

use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

/**
 * GET /api/auth/check : le lien reçu par e-mail. Traité par le pare-feu (login_link), jamais par cette Action.
 */
#[AsController]
final readonly class LoginCheckAction
{
    #[Route('/auth/check', name: 'auth_check', methods: ['GET'])]
    public function __invoke(): never
    {
        throw new \LogicException('The login link is handled by the firewall (security.yaml, login_link).');
    }
}
