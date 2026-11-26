<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use App\Application\Bus\CommandBus;
use App\Application\Command\Account\DeleteAccount\DeleteAccountInput;
use App\Infrastructure\Security\AdultUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * DELETE /api/me : supprime le compte et ferme la session.
 */
#[AsController]
#[IsGranted('ROLE_ADULT')]
final readonly class DeleteMeAction
{
    public function __construct(
        private CommandBus $commandBus,
        private TokenStorageInterface $tokenStorage,
    ) {
    }

    #[Route('/me', name: 'me_delete', methods: ['DELETE'])]
    public function __invoke(Request $request, #[CurrentUser] AdultUser $user): JsonResponse
    {
        $output = $this->commandBus->dispatch(new DeleteAccountInput($user->id()));

        $this->tokenStorage->setToken(null);
        $request->getSession()->invalidate();

        $response = new JsonResponse(
            ['deletedChildren' => $output->deletedChildren, 'keptChildren' => $output->keptChildren],
            headers: ['Cache-Control' => 'no-store'],
        );
        $response->headers->clearCookie('rq_session', secure: true, sameSite: 'lax');

        return $response;
    }
}
