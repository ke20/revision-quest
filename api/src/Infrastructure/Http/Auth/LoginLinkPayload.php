<?php

declare(strict_types=1);

namespace App\Infrastructure\Http\Auth;

use Symfony\Component\Validator\Constraints as Assert;

final readonly class LoginLinkPayload
{
    public function __construct(
        #[Assert\NotBlank]
        #[Assert\Email(mode: Assert\Email::VALIDATION_MODE_HTML5, normalizer: 'trim')]
        #[Assert\Length(max: 254)]
        public string $email,
    ) {
    }
}
