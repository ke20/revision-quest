<?php

declare(strict_types=1);

namespace App\Domain\Account;

use App\Domain\Shared\Email;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Clock\Clock;

/**
 * Le compte d'un adulte (parent ou enseignant). Seule donnée personnelle : l'e-mail. Créé à la première connexion par
 * le lien e-mail, sans mot de passe.
 */
#[ORM\Entity]
#[ORM\Table(name: 'adult')]
class Adult
{
    #[ORM\Id]
    #[ORM\Column(type: 'adult_id')]
    private AdultId $id;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column]
    private \DateTimeImmutable $lastLoginAt;

    /** Nombre de connexions : signe les liens de connexion, qui ne servent donc qu'une fois. */
    #[ORM\Column]
    private int $loginCount = 1;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $privacyAcceptedAt = null;

    /** Date de l'e-mail d'avertissement avant suppression (2 ans sans connexion) ; remis à null à chaque connexion. */
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $deletionWarnedAt = null;

    private function __construct(
        #[ORM\Column(type: 'email', length: Email::MAX_LENGTH, unique: true)]
        private Email $email,
    ) {
        $this->id = AdultId::generate();
        $this->createdAt = Clock::get()->now();
        $this->lastLoginAt = $this->createdAt;
    }

    /**
     * Premier passage par le lien de connexion : le compte naît connecté.
     */
    public static function firstLogin(Email $email): self
    {
        return new self($email);
    }

    public function logIn(): void
    {
        $this->lastLoginAt = Clock::get()->now();
        ++$this->loginCount;
        $this->deletionWarnedAt = null;
    }

    /**
     * La politique de confidentialité, acceptée une fois (la première date est gardée).
     */
    public function acceptPrivacy(): void
    {
        $this->privacyAcceptedAt ??= Clock::get()->now();
    }

    public function id(): AdultId
    {
        return $this->id;
    }

    public function email(): Email
    {
        return $this->email;
    }

    public function createdAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function lastLoginAt(): \DateTimeImmutable
    {
        return $this->lastLoginAt;
    }

    public function loginCount(): int
    {
        return $this->loginCount;
    }

    public function privacyAcceptedAt(): ?\DateTimeImmutable
    {
        return $this->privacyAcceptedAt;
    }

    public function deletionWarnedAt(): ?\DateTimeImmutable
    {
        return $this->deletionWarnedAt;
    }
}
