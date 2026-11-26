<?php

declare(strict_types=1);

namespace App\Infrastructure\Http;

use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Contre le CSRF : une requête qui modifie des données (POST, PUT, PATCH, DELETE) sous /api doit venir du site lui-même
 * (en-tête Origin = même schéma, même hôte, même port). Les navigateurs l'envoient toujours sur ces méthodes.
 */
#[AsEventListener(event: KernelEvents::REQUEST, priority: 64)]
final readonly class OriginCheckListener
{
    public function __invoke(RequestEvent $event): void
    {
        $request = $event->getRequest();
        if (!$event->isMainRequest() || $request->isMethodSafe() || !str_starts_with($request->getPathInfo(), '/api/')) {
            return;
        }

        if ($request->headers->get('Origin') !== $request->getSchemeAndHttpHost()) {
            throw new AccessDeniedHttpException('Origin header missing or foreign.');
        }
    }
}
