<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;

// Montées de version PHP (d'après composer.json) et règles de qualité ; `composer rector` applique, `rector:check` vérifie.
return RectorConfig::configure()
    ->withPaths([__DIR__.'/src', __DIR__.'/tests'])
    ->withPhpSets()
    ->withPreparedSets(deadCode: true, codeQuality: true, typeDeclarations: true)
    ->withImportNames(importShortClasses: false, removeUnusedImports: true);
