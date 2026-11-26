<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RequestLoginLink;

use App\Application\Bus\CommandHandler;
use App\Application\Port\LoginLinkSender;

/**
 * Envoie le lien de connexion, que le compte existe ou non (il naît à la première connexion) : la réponse ne révèle
 * jamais quels e-mails ont un compte.
 */
final readonly class RequestLoginLinkHandler implements CommandHandler
{
    public function __construct(
        private LoginLinkSender $sender,
    ) {
    }

    public function __invoke(RequestLoginLinkInput $input): RequestLoginLinkOutput
    {
        $this->sender->send($input->email);

        return new RequestLoginLinkOutput();
    }
}
