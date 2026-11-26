<?php

declare(strict_types=1);

namespace App\Application\Command\Account\AcceptPrivacy;

use App\Application\Bus\CommandHandler;
use App\Domain\Account\AdultRepository;
use App\Domain\Account\Exception\AdultNotFoundException;

final readonly class AcceptPrivacyHandler implements CommandHandler
{
    public function __construct(
        private AdultRepository $adults,
    ) {
    }

    public function __invoke(AcceptPrivacyInput $input): AcceptPrivacyOutput
    {
        $adult = $this->adults->find($input->adultId) ?? throw AdultNotFoundException::withId($input->adultId);
        $adult->acceptPrivacy();

        return new AcceptPrivacyOutput($adult->id());
    }
}
