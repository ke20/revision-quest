<?php

declare(strict_types=1);

namespace App\Domain\Account;

use App\Domain\Shared\Email;

interface AdultRepository
{
    public function find(AdultId $id): ?Adult;

    public function findByEmail(Email $email): ?Adult;

    public function add(Adult $adult): void;

    public function remove(Adult $adult): void;
}
