<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Domain\Account\Adult;
use App\Domain\Account\AdultRepository;
use App\Domain\Shared\Email;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * @implements UserProviderInterface<AdultUser>
 */
final readonly class AdultUserProvider implements UserProviderInterface
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    /**
     * Seul le lien de connexion charge un adulte par son e-mail : une adresse sans compte donne un nouveau venu, dont
     * le compte sera créé à la connexion.
     */
    public function loadUserByIdentifier(string $identifier): AdultUser
    {
        try {
            $email = Email::fromString($identifier);
        } catch (\InvalidArgumentException) {
            throw new UserNotFoundException('Invalid e-mail address.');
        }
        $adult = $this->adults->findByEmail($email);

        return $adult instanceof Adult ? AdultUser::of($adult) : AdultUser::newcomer($email);
    }

    /**
     * À chaque requête avec session : le compte doit toujours exister (sinon la session se ferme).
     */
    public function refreshUser(UserInterface $user): AdultUser
    {
        if (!$user instanceof AdultUser) {
            throw new UnsupportedUserException(\sprintf('Unsupported user "%s".', $user::class));
        }

        $adult = $this->adults->findByEmail(Email::fromString($user->getUserIdentifier()));
        if (!$adult instanceof Adult) {
            throw new UserNotFoundException('The account was deleted.');
        }

        return AdultUser::of($adult);
    }

    public function supportsClass(string $class): bool
    {
        return AdultUser::class === $class;
    }
}
