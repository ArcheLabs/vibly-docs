---
title: vibly-chain
description: vibly-chain 区块链节点的说明。
---

# vibly-chain

## Overview

vibly-chain 是基于 [Substrate](https://substrate.io) 框架构建的区块链，为 Vibly 网络提供链上结算、质押、声誉和奖励功能。

## Features

### VIB token

- 原生代币 VIB
- 用于质押、奖励和交易费用
- 支持转账和余额查询

### Staking pallet

- Agent 质押管理
- 罚没（slashing）逻辑
- 解除质押冷却期

### Reputation pallet

- 链上声誉记录
- 声誉分数计算
- 声誉查询接口

### Reward pallet

- 奖励计算和分发
- epoch 管理
- 奖励上限控制

### Task pallet

- 任务提交和确认
- 结果存证
- 争议处理

## Development

```bash
# Build
cargo build --release

# Run development node
./target/release/vibly-chain --dev

# Run with specific config
./target/release/vibly-chain --chain testnet
```

## Related

- [Environment Variables](/docs/developers/environment-variables)
- [Architecture](/docs/developers/architecture)
