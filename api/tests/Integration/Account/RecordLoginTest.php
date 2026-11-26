<?php

declare(strict_types=1);

namespace App\Tests\Integration\Account;

use App\Application\Bus\CommandBus;
use App\Application\Command\Account\RecordLogin\RecordLoginInput;
use App\Domain\Account\Adult;
use App\Domain\Account\AdultRepository;
use App\Domain\Shared\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * Le cas d'usage par le vrai bus de commandes (transaction), avec Doctrine et PostgreSQL. Chaque test est annulé à la
 * fin (dama/doctrine-test-bundle).
 */
final class RecordLoginTest extends KernelTestCase
{
    public function testTheFirstLoginCreatesTheAccount(): void
    {
        $output = $this->commandBus()->dispatch(new RecordLoginInput(Email::fromString('parent@example.org')));

        self::assertTrue($output->created);
        $adult = $this->reload('parent@example.org');
        self::assertTrue($adult->id()->equals($output->adultId));
        self::assertSame(1, $adult->loginCount());
    }

    public function testALaterLoginIsCountedOnTheSameAccount(): void
    {
        $first = $this->commandBus()->dispatch(new RecordLoginInput(Email::fromString('parent@example.org')));

        $second = $this->commandBus()->dispatch(new RecordLoginInput(Email::fromString(' PARENT@example.org')));

        self::assertFalse($second->created);
        self::assertTrue($second->adultId->equals($first->adultId));
        self::assertSame(2, $this->reload('parent@example.org')->loginCount());
    }

    private function commandBus(): CommandBus
    {
        $bus = self::getContainer()->get(CommandBus::class);
        self::assertInstanceOf(CommandBus::class, $bus);

        return $bus;
    }

    /**
     * Relit le compte en base, pas dans la mémoire de Doctrine.
     */
    private function reload(string $email): Adult
    {
        $entityManager = self::getContainer()->get(EntityManagerInterface::class);
        self::assertInstanceOf(EntityManagerInterface::class, $entityManager);
        $entityManager->clear();

        $adults = self::getContainer()->get(AdultRepository::class);
        self::assertInstanceOf(AdultRepository::class, $adults);

        return $adults->findByEmail(Email::fromString($email)) ?? self::fail('No account for '.$email);
    }
}
