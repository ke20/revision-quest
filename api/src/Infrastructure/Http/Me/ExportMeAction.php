<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use App\Application\Bus\QueryBus;
use App\Application\Query\Account\Export\ExportInput;
use App\Infrastructure\Http\JsonDate;
use App\Infrastructure\Security\AdultUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * GET /api/me/export : toutes les données du compte, en un fichier JSON à télécharger.
 */
#[AsController]
#[IsGranted('ROLE_ADULT')]
final readonly class ExportMeAction
{
    public function __construct(
        private QueryBus $queryBus,
    ) {
    }

    #[Route('/me/export', name: 'me_export', methods: ['GET'])]
    public function __invoke(#[CurrentUser] AdultUser $user): JsonResponse
    {
        $export = $this->queryBus->ask(new ExportInput($user->id()));

        return new JsonResponse(
            [
                'exportedAt' => JsonDate::format($export->exportedAt),
                'adult' => AccountJson::of($export->adult),
                'children' => $export->children,
                'classrooms' => $export->classrooms,
            ],
            headers: [
                'Cache-Control' => 'no-store',
                'Content-Disposition' => 'attachment; filename="revision-quest-export.json"',
            ],
        );
    }
}
