<?php

declare(strict_types=1);

namespace App\Application\Query\Account\Export;

use App\Application\Bus\Output;
use App\Application\Query\Account\GetAccount\AccountOutput;

final readonly class ExportOutput implements Output
{
    /**
     * @param list<never> $children enfants suivis, avec leur sauvegarde et leurs événements (étape 4)
     * @param list<never> $classrooms classes de l'enseignant (étape 8)
     */
    public function __construct(
        public \DateTimeImmutable $exportedAt,
        public AccountOutput $adult,
        public array $children,
        public array $classrooms,
    ) {
    }
}
