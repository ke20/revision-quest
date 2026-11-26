<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RecordLogin;

use App\Application\Bus\CommandInput;
use App\Domain\Shared\Email;

/**
 * Un lien de connexion valable vient d'être utilisé.
 *
 * @implements CommandInput<RecordLoginOutput>
 */
final readonly class RecordLoginInput implements CommandInput
{
    public function __construct(
        public Email $email,
    ) {
    }
}
