<?php

declare(strict_types=1);

namespace App\Application\Command\Account\RequestLoginLink;

use App\Application\Bus\Output;

/**
 * Rien à renvoyer : la réponse est la même que le compte existe ou non.
 */
final readonly class RequestLoginLinkOutput implements Output
{
}
