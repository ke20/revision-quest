<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\DeadCode\Rector\ClassMethod\RemoveUnusedPublicMethodParameterRector;

// Montées de version PHP (d'après composer.json) et règles de qualité ; `composer rector` applique, `rector:check` vérifie.
return RectorConfig::configure()
    ->withPaths([__DIR__.'/src', __DIR__.'/tests'])
    ->withPhpSets()
    ->withPreparedSets(deadCode: true, codeQuality: true, typeDeclarations: true)
    ->withImportNames(importShortClasses: false, removeUnusedImports: true)
    // une Action lit parfois un Payload seulement pour le valider (#[JsonPayload]) : le paramètre n'est pas mort
    ->withSkip([RemoveUnusedPublicMethodParameterRector::class => [__DIR__.'/src/Infrastructure/Http']]);
