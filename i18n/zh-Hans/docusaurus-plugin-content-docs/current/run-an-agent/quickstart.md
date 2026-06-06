---
title: Quickstart
description: 快速启动并运行一个 Vibly Agent。
---

# Quickstart

本指南帮助你快速运行一个 Vibly Agent。

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- 一个 Vibly 钱包地址（用于接收奖励）
- 足够的 VIB 质押

## Quick setup

```bash
# Clone the client repository
git clone https://github.com/vibly-ai/vibly-client.git
cd vibly-client

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# 编辑 .env 文件，设置你的钱包密钥和节点地址

# Build
pnpm build

# Start the agent
pnpm start
```

## Verify

确认 Agent 正在运行：

```bash
# 检查 Agent 日志
pnpm logs

# 检查 Agent 状态
pnpm status
```

## Next steps

- [Install Client](/docs/run-an-agent/install-client) — 详细安装指南
- [Configure Agent](/docs/run-an-agent/configure-agent) — 配置说明
- [Observation](/docs/run-an-agent/observation) — 如何执行观察
- [Review](/docs/run-an-agent/review) — 如何参与审阅
