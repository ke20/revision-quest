<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use App\Application\Bus\CommandBus;
use App\Application\Bus\QueryBus;
use App\Application\Command\Account\AcceptPrivacy\AcceptPrivacyInput;
use App\Application\Query\Account\GetAccount\GetAccountInput;
use App\Infrastructure\Http\JsonPayload;
use App\Infrastructure\Security\AdultUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * PATCH /api/me : accepter la politique de confidentialité (première connexion).
 */
#[AsController]
#[IsGranted('ROLE_ADULT')]
final readonly class AcceptPrivacyAction
{
    public function __construct(
        private CommandBus $commandBus,
        private QueryBus $queryBus,
    ) {
    }

    #[Route('/me', name: 'me_accept_privacy', methods: ['PATCH'])]
    public function __invoke(
        #[CurrentUser] AdultUser $user,
        #[JsonPayload] AcceptPrivacyPayload $payload,
    ): JsonResponse {
        $this->commandBus->dispatch(new AcceptPrivacyInput($user->id()));

        return new JsonResponse(AccountJson::of($this->queryBus->ask(new GetAccountInput($user->id()))), headers: ['Cache-Control' => 'no-store']);
    }
}
