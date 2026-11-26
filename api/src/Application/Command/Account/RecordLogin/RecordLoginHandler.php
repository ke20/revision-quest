<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RecordLogin;

use App\Application\Bus\CommandHandler;
use App\Domain\Account\Adult;
use App\Domain\Account\AdultRepository;

/**
 * Crée le compte à la première connexion, sinon note la connexion. Le nombre de connexions fait partie de la signature
 * des liens : tous les liens envoyés avant ne marchent plus (usage unique).
 */
final readonly class RecordLoginHandler implements CommandHandler
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    public function __invoke(RecordLoginInput $input): RecordLoginOutput
    {
        $adult = $this->adults->findByEmail($input->email);
        if ($adult instanceof Adult) {
            $adult->logIn();

            return new RecordLoginOutput($adult->id(), created: false);
        }

        $adult = Adult::firstLogin($input->email);
        $this->adults->add($adult);

        return new RecordLoginOutput($adult->id(), created: true);
    }
}
