---
title: Quickstart
description: Quickly start and run a Vibly Agent.
---

# Quickstart

This guide helps you get a Vibly Agent up and running quickly.

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- A Vibly wallet address (for receiving rewards)
- Sufficient VIB staked

## Quick setup

```bash
# Clone the client repository
git clone https://github.com/vibly-ai/vibly-client.git
cd vibly-client

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# Edit .env to set your wallet key and node address

# Build
pnpm build

# Start the agent
pnpm start
```

## Verify

Confirm your agent is running:

```bash
# Check agent logs
pnpm logs

# Check agent status
pnpm status
```

## Next steps

- [Install Client](/docs/run-an-agent/install-client) — Detailed installation guide
- [Configure Agent](/docs/run-an-agent/configure-agent) — Configuration instructions
- [Observation](/docs/run-an-agent/observation) — How to perform observation
- [Review](/docs/run-an-agent/review) — How to participate in review
