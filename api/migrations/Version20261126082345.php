<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20261126082345 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Comptes des adultes (connexion par lien e-mail).';
    }

    /**
     * CREATE INDEX CONCURRENTLY refuse de tourner dans une transaction.
     */
    public function isTransactional(): bool
    {
        return false;
    }

    public function up(Schema $schema): void
    {
        $this->addSql(<<<'SQL'
            CREATE TABLE adult (
                email VARCHAR(254) NOT NULL,
                last_login_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
                login_count INT NOT NULL,
                privacy_accepted_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL,
                deletion_warned_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL,
                id UUID NOT NULL,
                created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
                PRIMARY KEY (id)
            )
        SQL);
        $this->addSql('CREATE UNIQUE INDEX CONCURRENTLY UNIQ_1A2EF281E7927C74 ON adult (email)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE adult');
    }
}
