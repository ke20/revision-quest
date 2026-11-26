<?php

declare(strict_types=1);

namespace App\Application\Command\Account\DeleteAccount;

use App\Application\Bus\CommandHandler;
use App\Domain\Account\AdultRepository;
use App\Domain\Account\Exception\AdultNotFoundException;

/**
 * Supprime le compte. Les enfants, les appareils et les classes arrivent à l'étape 4 : leur sort (gardés s'ils ont un
 * autre parent, supprimés sinon) s'ajoutera ici.
 */
final readonly class DeleteAccountHandler implements CommandHandler
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    public function __invoke(DeleteAccountInput $input): DeleteAccountOutput
    {
        $adult = $this->adults->find($input->adultId) ?? throw AdultNotFoundException::withId($input->adultId);
        $this->adults->remove($adult);

        return new DeleteAccountOutput(deletedChildren: [], keptChildren: []);
    }
}
