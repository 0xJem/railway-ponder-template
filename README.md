# railway-ponder-template

This is a template for Railway that helps you get started with deploying the [Ponder](https://ponder.sh/) blockchain indexer.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template/ma-2Wo?referralCode=gzL_8s)

## Features

- PostgreSQL server
- Ponder indexer
  - Railway is pre-configured to run it
  - Environment variables pre-populated with the database and common RPCs
  - Applies the `--schema` parameter to enable zero-downtime deployments
  - Exposes GraphQL at the `/graphql` endpoint
  - Exposes the Ponder SQL API at the `/sql/` endpoint
  - Sample indexing of the Chainlink ETH-USD price feed

## Next Steps

- Add ABIs under `/abis`
- Add contract definitions under `/ponder.config.ts`
- Define the schema in `/ponder.schema.ts`
- Read the [Ponder docs](https://ponder.sh/docs/getting-started/new-project)

## Commands

- Run development server: `pnpm run dev`
- Lint: `pnpm run lint`
