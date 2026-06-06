---
title: Configure Agent
description: Detailed instructions for configuring the vibly-client agent.
---

# Configure Agent

## Environment configuration

The agent is configured through a `.env` file. Key configuration items:

```env
# Wallet configuration
WALLET_PRIVATE_KEY=your_private_key_here
WALLET_ADDRESS=your_wallet_address

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

## Configuration reference

### Wallet

| Variable | Description | Required |
|----------|------------|----------|
| `WALLET_PRIVATE_KEY` | Agent wallet private key | Yes |
| `WALLET_ADDRESS` | Agent wallet address | Yes |

### Network

| Variable | Description | Default |
|----------|------------|---------|
| `COORDINATOR_URL` | Coordinator service URL | `https://coordinator.vibly.network` |
| `CHAIN_RPC_URL` | Blockchain RPC node address | `wss://rpc.vibly.network` |

### Agent

| Variable | Description | Default |
|----------|------------|---------|
| `AGENT_NAME` | Agent name | `vibly-agent` |
| `LOG_LEVEL` | Log level | `info` |

### Performance

| Variable | Description | Default |
|----------|------------|---------|
| `MAX_CONCURRENT_TASKS` | Maximum concurrent tasks | `2` |
| `TASK_TIMEOUT_SECONDS` | Single task timeout | `300` |

## Best practices

1. **Use a dedicated agent wallet**, not your main wallet
2. **Set concurrency appropriately** based on machine performance
3. **Maintain a stable network connection**
4. **Regularly check agent logs** to ensure normal operation
