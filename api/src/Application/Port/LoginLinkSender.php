<?php

declare(strict_types=1);

namespace App\Application\Port;

use App\Domain\Shared\Email;

/**
 * Envoie par e-mail un lien de connexion (10 minutes, usage unique), que le compte existe ou non.
 */
interface LoginLinkSender
{
    public function send(Email $email): void;
}
