<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Infrastructure\Http\Problem\Problem;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Event\LogoutEvent;

/**
 * POST /api/auth/logout : 204 (session fermée), ou 401 s'il n'y avait pas de session.
 */
#[AsEventListener]
final readonly class LogoutListener
{
    public function __invoke(LogoutEvent $event): void
    {
        $event->setResponse($event->getToken() instanceof TokenInterface ? new Response(status: 204) : Problem::response(401));
    }
}
