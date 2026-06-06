---
title: Local Development
description: Guide for setting up the Vibly local development environment.
---

# Local Development

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- Rust toolchain (required for vibly-chain development)
- Docker (optional, for running a local chain node)

## Quick start

### 1. Clone repos

```bash
git clone https://github.com/vibly-ai/vibly-chain.git
git clone https://github.com/vibly-ai/vibly-coordinator.git
git clone https://github.com/vibly-ai/vibly-client.git
git clone https://github.com/vibly-ai/vibly-console.git
```

### 2. Start local chain

```bash
cd vibly-chain
cargo build --release
./target/release/vibly-chain --dev
```

### 3. Start coordinator

```bash
cd vibly-coordinator
pnpm install
cp .env.example .env
pnpm dev
```

### 4. Start console

```bash
cd vibly-console
pnpm install
pnpm dev
```

### 5. Start client

```bash
cd vibly-client
pnpm install
cp .env.example .env
pnpm dev
```

## Docker setup

```bash
docker-compose up -d chain coordinator
```
