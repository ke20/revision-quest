<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use App\Application\Bus\QueryBus;
use App\Application\Query\Account\GetAccount\GetAccountInput;
use App\Infrastructure\Security\AdultUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * GET /api/me : le compte connecté.
 */
#[AsController]
#[IsGranted('ROLE_ADULT')]
final readonly class GetMeAction
{
    public function __construct(
        private QueryBus $queryBus,
    ) {
    }

    #[Route('/me', name: 'me_get', methods: ['GET'])]
    public function __invoke(#[CurrentUser] AdultUser $user): JsonResponse
    {
        return new JsonResponse(AccountJson::of($this->queryBus->ask(new GetAccountInput($user->id()))), headers: ['Cache-Control' => 'no-store']);
    }
}
