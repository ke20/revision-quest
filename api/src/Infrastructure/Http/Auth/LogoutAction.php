<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Auth;

use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

/**
 * POST /api/auth/logout : traité par le pare-feu (logout) et App\Infrastructure\Security\LogoutListener.
 */
#[AsController]
final readonly class LogoutAction
{
    #[Route('/auth/logout', name: 'auth_logout', methods: ['POST'])]
    public function __invoke(): never
    {
        throw new \LogicException('The logout is handled by the firewall (security.yaml, logout).');
    }
}
