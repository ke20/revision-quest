<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Domain\Account\Adult;
use App\Domain\Account\AdultId;
use App\Domain\Shared\Email;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * L'adulte vu par Symfony Security. Identifiant : l'e-mail. Un adulte sans compte (première connexion) n'a pas encore
 * d'id : le compte naît quand le lien est utilisé.
 */
final readonly class AdultUser implements UserInterface
{
    /**
     * @param non-empty-string $email
     */
    private function __construct(
        private string $email,
        private ?AdultId $id,
        private string $loginStamp,
    ) {
    }

    public static function of(Adult $adult): self
    {
        return new self(self::nonEmpty($adult->email()->value), $adult->id(), (string) $adult->loginCount());
    }

    /**
     * Pas encore de compte : le lien de connexion le créera.
     */
    public static function newcomer(Email $email): self
    {
        return new self(self::nonEmpty($email->value), null, '0');
    }

    /**
     * Fait partie de la signature du lien de connexion : change à chaque connexion, donc un lien ne sert qu'une fois.
     */
    public function getLoginStamp(): string
    {
        return $this->loginStamp;
    }

    public function id(): AdultId
    {
        return $this->id ?? throw new \LogicException('This adult has no account yet.');
    }

    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    public function getRoles(): array
    {
        return ['ROLE_ADULT'];
    }

    /**
     * @return non-empty-string
     */
    private static function nonEmpty(string $email): string
    {
        return '' !== $email ? $email : throw new \InvalidArgumentException('Empty e-mail.');
    }
}
