<?php

declare(strict_types=1);

namespace App\Infrastructure\Http;

use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;

/**
 * Le corps JSON d'une requête, lu dans un Payload : JSON seulement (sinon 415), champ inconnu refusé, erreurs de
 * validation en 400 (Problem Details avec `violations`, voir ProblemExceptionListener).
 */
#[\Attribute(\Attribute::TARGET_PARAMETER)]
final class JsonPayload extends MapRequestPayload
{
    public function __construct()
    {
        parent::__construct(
            acceptFormat: 'json',
            serializationContext: ['allow_extra_attributes' => false, 'collect_extra_attributes_errors' => true],
            validationFailedStatusCode: 400,
        );
    }
}
