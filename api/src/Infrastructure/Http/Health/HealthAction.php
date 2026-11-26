<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Health;

use App\Application\Bus\QueryBus;
use App\Application\Query\Health\HealthInput;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

/**
 * GET /api/v1/health : le serveur et la base répondent-ils ? (sonde de disponibilité, sans donnée).
 */
#[AsController]
final readonly class HealthAction
{
    public function __construct(
        private QueryBus $queryBus,
    ) {
    }

    #[Route('/health', name: 'health', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        $output = $this->queryBus->ask(new HealthInput());

        return new JsonResponse(
            ['status' => $output->isHealthy() ? 'ok' : 'degraded', 'database' => $output->database ? 'ok' : 'down'],
            $output->isHealthy() ? 200 : 503,
            ['Cache-Control' => 'no-store'],
        );
    }
}
