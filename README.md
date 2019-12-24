# great_idea

An app for keeping track of great ideas!

### Setting up the project

1. [Install required dependencies, but skip Lucky CLI](https://luckyframework.org/guides/getting-started/installing#install-required-dependencies)
1. Install [Docker](https://docs.docker.com/install/)
1. Start up docker compose `docker-compose up -d`
1. Create env file `echo 'DATABASE_URL="postgres://postgres:@localhost:5434/postgres"' > .env`
1. Install project dependencies `shards install`
1. Create lucky command `./script/create_lucky.sh`
1. Migrate database `bin/lucky db.migrate`
1. Create seeds `bin/lucky db.create_seeds`
1. Import Hasura metadata `bin/lucky hasura.import`
1. Start server `bin/lucky dev`
  - Lucky Server: `localhost:5000`
  - Hasura Console: `localhost:8081`
  - Postgres: `localhost:5434`

### Learning Lucky

This is a project written using [Lucky](https://luckyframework.org). Enjoy!

Lucky uses the [Crystal](https://crystal-lang.org) programming language. You can learn about Lucky from the [Lucky Guides](https://luckyframework.org/guides/getting-started/why-lucky).
