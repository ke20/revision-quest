<?php

declare(strict_types=1);

namespace App\Infrastructure\Security;

use App\Application\Bus\CommandBus;
use App\Application\Command\Account\RecordLogin\RecordLoginInput;
use App\Domain\Shared\Email;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;

/**
 * Lien de connexion accepté : crée le compte (première fois) ou note la connexion, ce qui rend le lien inutilisable.
 */
#[AsEventListener]
final readonly class RecordLoginListener
{
    public function __construct(
        private CommandBus $commandBus,
    ) {
    }

    public function __invoke(LoginSuccessEvent $event): void
    {
        $this->commandBus->dispatch(new RecordLoginInput(Email::fromString($event->getUser()->getUserIdentifier())));
    }
}
