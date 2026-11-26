<?php

declare(strict_types=1);

namespace App\Application\Command\Account\DeleteAccount;

use App\Application\Bus\Output;

final readonly class DeleteAccountOutput implements Output
{
    /**
     * @param list<string> $deletedChildren enfants supprimés : cet adulte était leur seul parent
     * @param list<string> $keptChildren enfants gardés : un autre parent est rattaché
     */
    public function __construct(
        public array $deletedChildren,
        public array $keptChildren,
    ) {
    }
}
