<?php

declare(strict_types=1);

namespace App\Infrastructure\Doctrine\Repository;

use App\Domain\Account\Adult;
use App\Domain\Account\AdultId;
use App\Domain\Account\AdultRepository;
use App\Domain\Shared\Email;
use Doctrine\ORM\EntityManagerInterface;

final readonly class DoctrineAdultRepository implements AdultRepository
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    public function find(AdultId $id): ?Adult
    {
        return $this->entityManager->find(Adult::class, $id->value);
    }

    public function findByEmail(Email $email): ?Adult
    {
        return $this->entityManager->getRepository(Adult::class)->findOneBy(['email' => $email->value]);
    }

    public function add(Adult $adult): void
    {
        $this->entityManager->persist($adult);
    }

    public function remove(Adult $adult): void
    {
        $this->entityManager->remove($adult);
    }
}
