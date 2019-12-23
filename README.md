# great_idea

An app for keeping track of great ideas!

### Setting up the project

1. [Install required dependencies](https://luckyframework.org/guides/getting-started/installing#install-required-dependencies)
1. Start up docker compose `docker-compose up -d`
1. Create database `lucky db.create`
1. Migrate database `lucky db.migrate`
1. Create required seeds `lucky db.create_required_seeds`
1. Create sample seeds `lucky db.create_sample_seeds`
1. Restart Hasura (should only need to do this once) `lucky hasura.docker_restart`
1. Start server `lucky dev`
  - Lucky Server: `localhost:5000`
  - Hasura Console: `localhost:8081`

### Learning Lucky

This is a project written using [Lucky](https://luckyframework.org). Enjoy!

Lucky uses the [Crystal](https://crystal-lang.org) programming language. You can learn about Lucky from the [Lucky Guides](https://luckyframework.org/guides/getting-started/why-lucky).
