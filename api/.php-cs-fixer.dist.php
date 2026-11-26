<?php

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude(['var', 'vendor'])
    ->notPath(['config/bundles.php', 'config/reference.php']);

return (new PhpCsFixer\Config())
    ->setRiskyAllowed(true)
    ->setRules([
        '@Symfony' => true,
        '@Symfony:risky' => true,
        'declare_strict_types' => true,
        'native_function_invocation' => ['include' => ['@compiler_optimized'], 'scope' => 'namespaced'],
        'phpdoc_to_comment' => false,
        // pas de ligne vide entre les annotations d'un même docblock (@template, @param, @return…)
        'phpdoc_separation' => false,
        // annotations collées : pas d'alignement en colonnes (« @param  X » avec deux espaces)
        'phpdoc_align' => ['align' => 'left'],
    ])
    ->setFinder($finder);
