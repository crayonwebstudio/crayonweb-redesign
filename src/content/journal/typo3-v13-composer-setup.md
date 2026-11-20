---
title: "TYPO3 v13 Composer Setup Best Practices"
publishDate: 2026-06-20
description: "A Composer first TYPO3 v13 setup that stays reproducible, deployable, and easy to maintain."
tags: ["TYPO3", "Composer", "DevOps"]
readingTime: 8
---

Composer is the only serious way to install and maintain TYPO3 v13. A Composer based project is reproducible, version controlled, and deployable, while a legacy install drifts silently until something breaks. This guide covers the setup we use on every TYPO3 v13 project, and the mistakes we see most often.

## Start with the right skeleton

Use the official TYPO3 Composer skeleton as your starting point. It gives you the correct directory layout, with the web root separated from the project root, and vendor code kept out of version control. Do not commit the vendor directory. Do not commit generated files. Commit composer.json and composer.lock, and treat the lock file as sacred. Every developer and every deploy should install from the same lock file, so every environment runs the same code.

Your public directory should contain only the entry point, fileadmin, and generated assets. Everything else lives outside the web root. This is not cosmetic. It reduces the attack surface and it makes deployments predictable, because the web server can only serve what you explicitly allow.

## Keep configuration in code

Site configuration belongs in config/sites, committed to version control. Extension configuration that matters belongs in code too, through AdditionalConfiguration or environment specific settings. The database should hold content, not configuration. When configuration lives in the database, two environments drift apart and nobody can explain why staging behaves differently from production.

Use environment variables for secrets and per environment values: database credentials, mail settings, and cache backends. A .env file or your deployment platform can supply them. Never commit credentials, and never hardcode a production password into a PHP file that ships to every developer laptop.

## Extensions: fewer, pinned, reviewed

Every extension is a maintenance commitment. Before adding one, ask whether the core already covers the need. TYPO3 v13 core covers a surprising amount: news, forms, redirects, SEO, and content blocks all ship with the core or as official system extensions. A community extension should earn its place by doing something the core cannot do well.

Pin extension versions in composer.json with care. Caret ranges are fine for stable extensions, but for anything critical, pin to a known good version and upgrade deliberately. Run composer update on a branch, test it, and only then merge. Running composer update directly on production is how sites break on a Friday afternoon.

## Deployment: build, then ship

A good deployment builds artifacts once and ships the same artifacts everywhere. Run composer install with the production flags, dump an optimised autoloader, clear and warm caches, and run database migrations as a separate step. Keep the previous release on disk so a rollback is a symlink change, not a rebuild.

Database updates deserve the same discipline. Use the TYPO3 console or the install tool in a scripted way, and always back up before a migration. The upgrade wizards are safe when run in order, and dangerous when skipped. Log their output and keep it with the deploy record.

## Local development that matches production

Developers should run the same PHP version and the same extensions as production. Docker or a version manager makes this easy. The goal is simple: if it works locally, it works on staging, and if it works on staging, it works in production. Every difference between environments is a future bug.

Use a shared setup script that installs dependencies, sets up the database, and imports a sanitised database dump. A new developer should be productive in under an hour, not after a day of tribal knowledge. Document the setup in the repository readme, and keep that document current.

## Common mistakes

The most common mistake is mixing install methods, with some extensions installed by Composer and others dropped into typo3conf/ext by hand. Pick Composer for everything. Another is committing generated files, which creates merge conflicts and hides real changes. A third is ignoring the lock file, which lets environments drift until a bug appears in only one place.

Finally, do not skip the small disciplines: run composer validate, keep PHP and Composer themselves up to date, and review your dependencies for abandoned packages once a quarter. A TYPO3 v13 project set up this way is boring in the best sense: it builds the same way every time, deploys the same way every time, and lets the team spend its energy on the site, not on the setup.
