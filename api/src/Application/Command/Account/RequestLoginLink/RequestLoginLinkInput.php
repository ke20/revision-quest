<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RequestLoginLink;

use App\Application\Bus\CommandInput;
use App\Domain\Shared\Email;

/**
 * @implements CommandInput<RequestLoginLinkOutput>
 */
final readonly class RequestLoginLinkInput implements CommandInput
{
    public function __construct(
        public Email $email,
    ) {
    }
}
