# API Révision Quest : FrankenPHP (Caddy + PHP) sert le jeu (fichiers statiques) et Symfony sous /api.
# Versions épinglées ; une montée de version = une Pull Request.
FROM dunglas/frankenphp:1.13.5-php8.5-trixie AS base

WORKDIR /app

# Extensions PHP : PostgreSQL, intl (validation), opcache, zip (composer), apcu (cache)
RUN install-php-extensions pdo_pgsql intl opcache zip apcu

COPY --from=composer:2.9 /usr/bin/composer /usr/local/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

COPY frankenphp/Caddyfile /etc/caddy/Caddyfile

# ---------- développement : le code est monté depuis l'hôte (compose.yaml) ----------
FROM base AS dev
ENV APP_ENV=dev
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY frankenphp/conf.d/app.ini "$PHP_INI_DIR/conf.d/zz-app.ini"
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile", "--watch"]

# ---------- production (étape 9 : déploiement sur le VPS) ----------
FROM base AS prod
ENV APP_ENV=prod
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY frankenphp/conf.d/app.ini "$PHP_INI_DIR/conf.d/zz-app.ini"
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --no-interaction --prefer-dist
COPY . .
RUN composer dump-autoload --classmap-authoritative --no-dev && composer run-script --no-dev post-install-cmd
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
