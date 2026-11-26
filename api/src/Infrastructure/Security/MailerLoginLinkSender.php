<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Application\Port\LoginLinkSender;
use App\Domain\Shared\Email as EmailAddress;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Security\Http\LoginLink\LoginLinkHandlerInterface;

/**
 * Le lien est construit sur le nom d'hôte de la requête, limité par framework.trusted_hosts.
 */
final readonly class MailerLoginLinkSender implements LoginLinkSender
{
    public function __construct(
        private AdultUserProvider $users,
        private LoginLinkHandlerInterface $loginLinks,
        private MailerInterface $mailer,
    ) {
    }

    public function send(EmailAddress $email): void
    {
        $link = $this->loginLinks->createLoginLink($this->users->loadUserByIdentifier($email->value));

        $this->mailer->send(new Email()
            ->to($email->value)
            ->subject('Votre lien de connexion à Révision Quest')
            ->text(<<<TEXT
                Bonjour,

                Voici votre lien pour vous connecter à Révision Quest :

                {$link->getUrl()}

                Il est valable 10 minutes et ne sert qu'une fois.
                Si vous n'avez rien demandé, ignorez ce message : personne ne peut se connecter sans ce lien.
                TEXT));
    }
}
