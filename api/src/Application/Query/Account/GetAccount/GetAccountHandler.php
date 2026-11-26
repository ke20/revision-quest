<?php

declare(strict_types=1);

namespace App\Application\Query\Account\GetAccount;

use App\Application\Bus\QueryHandler;
use App\Domain\Account\AdultRepository;
use App\Domain\Account\Exception\AdultNotFoundException;

final readonly class GetAccountHandler implements QueryHandler
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    public function __invoke(GetAccountInput $input): AccountOutput
    {
        $adult = $this->adults->find($input->adultId) ?? throw AdultNotFoundException::withId($input->adultId);

        return AccountOutput::of($adult);
    }
}
