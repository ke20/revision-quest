<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Me;

use Symfony\Component\Validator\Constraints as Assert;

final readonly class AcceptPrivacyPayload
{
    public function __construct(
        #[Assert\IsTrue(message: 'Il faut accepter la politique de confidentialité.')]
        public bool $privacyAccepted,
    ) {
    }
}
