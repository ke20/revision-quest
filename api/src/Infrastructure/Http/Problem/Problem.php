<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Problem;

use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Une erreur au format Problem Details (RFC 9457, application/problem+json). Titres et détails en français, lisibles
 * par un adulte.
 */
final class Problem
{
    private const array TITLES = [
        400 => 'La requête est invalide.',
        401 => 'Il faut être connecté.',
        403 => 'Accès refusé.',
        404 => 'Introuvable.',
        405 => 'Méthode non autorisée.',
        406 => 'Format de réponse non disponible.',
        409 => 'Conflit avec l\'état actuel.',
        413 => 'Requête trop volumineuse.',
        415 => 'Le corps de la requête doit être du JSON.',
        422 => 'La requête est invalide.',
        429 => 'Trop de tentatives. Réessaie dans quelques minutes.',
        500 => 'Erreur du serveur.',
        503 => 'Service momentanément indisponible.',
    ];

    /**
     * @param array<string, mixed> $extra membres en plus (violations…)
     * @param array<string, string> $headers
     */
    public static function response(int $status, ?string $title = null, ?string $detail = null, string $type = 'about:blank', array $extra = [], array $headers = []): JsonResponse
    {
        $body = ['type' => $type, 'title' => $title ?? self::title($status), 'status' => $status];
        if (null !== $detail) {
            $body['detail'] = $detail;
        }

        return new JsonResponse(
            $body + $extra,
            $status,
            ['Content-Type' => 'application/problem+json', 'Cache-Control' => 'no-store'] + $headers,
        );
    }

    public static function title(int $status): string
    {
        return self::TITLES[$status] ?? ($status >= 500 ? self::TITLES[500] : self::TITLES[400]);
    }
}
