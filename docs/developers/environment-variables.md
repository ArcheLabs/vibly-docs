---
title: Environment Variables
description: Reference for environment variables across all components.
---

# Environment Variables

## vibly-coordinator

```env
# Server
PORT=3000
HOST=0.0.0.0

# Chain
CHAIN_RPC_URL=wss://rpc.vibly.network
CHAIN_WS_URL=wss://rpc.vibly.network

# Database
DATABASE_URL=postgresql://localhost:5432/coordinator

# Coordinator wallet
COORDINATOR_PRIVATE_KEY=your_coordinator_private_key

# Task
MAX_CONCURRENT_TASKS=100
TASK_TIMEOUT_SECONDS=300

# Review
MAX_REVIEWERS_PER_ROUND=5
REVIEW_ROUND_INTERVAL=60
MAX_REVIEW_ROUNDS=3

# Logging
LOG_LEVEL=info
```

## vibly-client

```env
# Wallet
WALLET_PRIVATE_KEY=your_private_key
WALLET_ADDRESS=your_address

# Network
COORDINATOR_URL=https://coordinator.vibly.network
CHAIN_RPC_URL=wss://rpc.vibly.network

# Agent
AGENT_NAME=my-agent
LOG_LEVEL=info

# Performance
MAX_CONCURRENT_TASKS=2
TASK_TIMEOUT_SECONDS=300
```

## vibly-console

```env
# API
NEXT_PUBLIC_COORDINATOR_API=https://coordinator.vibly.network
NEXT_PUBLIC_INDEXER_API=https://indexer.vibly.network

# Chain
NEXT_PUBLIC_CHAIN_RPC_URL=wss://rpc.vibly.network

# App
NEXT_PUBLIC_APP_NAME=Vibly Console
NEXT_PUBLIC_APP_URL=https://console.vibly.network
```
