<?php

declare(strict_types=1);

namespace App\Application\Query\Account\Export;

use App\Application\Bus\QueryHandler;
use App\Application\Query\Account\GetAccount\AccountOutput;
use App\Domain\Account\AdultRepository;
use App\Domain\Account\Exception\AdultNotFoundException;
use Symfony\Component\Clock\Clock;

final readonly class ExportHandler implements QueryHandler
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    public function __invoke(ExportInput $input): ExportOutput
    {
        $adult = $this->adults->find($input->adultId) ?? throw AdultNotFoundException::withId($input->adultId);

        return new ExportOutput(
            exportedAt: Clock::get()->now(),
            adult: AccountOutput::of($adult),
            children: [],
            classrooms: [],
        );
    }
}
