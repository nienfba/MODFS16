# Installation

```bash

# Créer un dossier et s'y rendre en CLI
mkdir symfonyDemo
cd symfonyDemo/

# Cloner le dépôt. ./ à la fin pour dire clonage dans le dossier courant
git clone URL_DU_DEPOT ./

# install dépendance Symfony
composer install

# install dépendance Webpack Encore
npm install

# Configurer le fichier .env.local
# Configurer la base de donnée (DATABASE_URL)

# création de la base de données
php bin/console doctrine:database:create

# migration
php bin/console doctrine:migrations:migrate

# Lancer le serveur Symfony
symfony server:start

# Ouvrir l'url proposée

# quelques routes admin/article/   admin/user/
```