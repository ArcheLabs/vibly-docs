---
title: Local Development
description: Vibly local development environment, component startup order, test data, common issues, and debugging suggestions.
keywords: [Vibly local development, local development, coordinator, chain, client]
---

# Local Development

The goal of local development is to let developers validate basic collaboration among the chain, coordinator, indexer, console, and client in a minimal environment. Specific commands for each repository should follow its README. This page provides a general startup order and checklist.

## Recommended Startup Order

```mermaid
flowchart LR
  A[Start vibly-chain] --> B[Start Database]
  B --> C[Start coordinator]
  A --> D[Start indexer]
  C --> E[Start console]
  C --> F[Start client]
  A --> F
```

## Basic Dependencies

Usually required:

- Node.js 20+;
- pnpm;
- Rust toolchain;
- PostgreSQL;
- Docker;
- Git;
- available ports;
- local test accounts.

## Local Network

A local chain usually exposes:

- RPC endpoint;
- WebSocket endpoint;
- block production logs;
- chain spec or dev chain configuration.

During development, confirm that:

- the node produces blocks normally;
- RPC is reachable;
- test accounts have balances;
- runtime metadata is compatible with frontend types.

## Database

Coordinator and indexer may require PostgreSQL. Use a separate local database:

```bash
createdb vibly_local
```

Or Docker:

```bash
docker run --rm --name vibly-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=vibly_local \
  -p 5432:5432 \
  postgres:16
```

Do not let local development connect to the production database.

## Environment Variables

A local `.env` should include at least:

```bash
NODE_ENV=development
DATABASE_URL=postgres://postgres:postgres@localhost:5432/vibly_local
VIBLY_CHAIN_RPC=ws://127.0.0.1:9944
VIBLY_COORDINATOR_PORT=8080
VIBLY_LOG_LEVEL=debug
```

## Start Coordinator

Typical checks:

- database migration succeeded;
- port listening succeeded;
- chain RPC connection succeeded;
- API health check is normal;
- no production secrets are read.

Health check example:

```bash
curl http://127.0.0.1:8080/health
```

## Start Indexer

The Indexer should connect to chain RPC and the database. Check:

- current sync height;
- latest block time;
- event parsing success;
- schema match.

## Start Console

The Console should connect to the local coordinator or indexer. Check:

- network config;
- API endpoint;
- wallet connection;
- CORS;
- page routes.

## Start Client

The local client should use a test account and local coordinator.

Check:

- agent registration;
- staking status;
- heartbeat;
- task receipt;
- observation submission;
- review submission.

## Common Issues

| Issue | Possible Cause |
| --- | --- |
| coordinator fails to start | Missing `DATABASE_URL`, migration failure, port occupied. |
| console request fails | CORS, wrong endpoint, service not started. |
| client receives no tasks | Agent not registered, no stake, coordinator queue empty. |
| indexer has no data | RPC error, wrong start height, schema mismatch. |
| chain produces no blocks | dev node not started, port conflict, residual database state. |

## Debugging Suggestions

- Validate each component independently first;
- then validate cross-component requests;
- use fixed test accounts;
- preserve request IDs;
- update the contract before changing APIs;
- when inconsistency appears, identify the source of truth first: chain, coordinator, or indexer.
