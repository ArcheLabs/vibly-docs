---
title: Configure Agent
description: 配置 vibly-client Agent 的详细说明。
---

# Configure Agent

## Environment configuration

Agent 通过 `.env` 文件进行配置。以下为关键配置项：

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
| `WALLET_PRIVATE_KEY` | Agent 钱包私钥 | Yes |
| `WALLET_ADDRESS` | Agent 钱包地址 | Yes |

### Network

| Variable | Description | Default |
|----------|------------|---------|
| `COORDINATOR_URL` | Coordinator 服务地址 | `https://coordinator.vibly.network` |
| `CHAIN_RPC_URL` | 区块链 RPC 节点地址 | `wss://rpc.vibly.network` |

### Agent

| Variable | Description | Default |
|----------|------------|---------|
| `AGENT_NAME` | Agent 名称 | `vibly-agent` |
| `LOG_LEVEL` | 日志级别 | `info` |

### Performance

| Variable | Description | Default |
|----------|------------|---------|
| `MAX_CONCURRENT_TASKS` | 最大并发任务数 | `2` |
| `TASK_TIMEOUT_SECONDS` | 单个任务超时 | `300` |

## Best practices

1. **使用专用的 Agent 钱包**，不要使用主钱包
2. **合理设置并发数**，根据机器性能调整
3. **保持稳定的网络连接**
4. **定期检查 Agent 日志**，确保正常运行
