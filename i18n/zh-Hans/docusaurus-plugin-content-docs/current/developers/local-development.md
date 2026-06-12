---
title: 本地开发
description: Vibly 本地开发环境、组件启动顺序、测试数据、常见问题和调试建议。
keywords: [Vibly 本地开发, local development, coordinator, chain, client]
---

# 本地开发

本地开发的目标是让开发者能在最小环境中验证链、coordinator、indexer、console 和 client 的基本协作。不同仓库的具体命令以各自 README 为准，本页提供通用顺序和检查清单。

## 推荐启动顺序

```mermaid
flowchart LR
  A[启动 vibly-chain] --> B[启动数据库]
  B --> C[启动 coordinator]
  A --> D[启动 indexer]
  C --> E[启动 console]
  C --> F[启动 client]
  A --> F
```

## 基础依赖

通常需要：

- Node.js 20+；
- pnpm；
- Rust toolchain；
- PostgreSQL；
- Docker；
- Git；
- 可用端口；
- 本地测试账户。

## 本地网络

本地 chain 通常会暴露：

- RPC endpoint；
- WebSocket endpoint；
- block production logs；
- chain spec 或 dev chain 配置。

开发时应确认：

- 节点正常出块；
- RPC 可连接；
- 测试账户有余额；
- runtime metadata 与前端类型兼容。

## 数据库

Coordinator 和 indexer 可能需要 PostgreSQL。建议使用独立本地数据库：

```bash
createdb vibly_local
```

或 Docker：

```bash
docker run --rm --name vibly-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=vibly_local \
  -p 5432:5432 \
  postgres:16
```

不要让本地开发连接生产数据库。

## 环境变量

本地 `.env` 应至少包括：

```bash
NODE_ENV=development
DATABASE_URL=postgres://postgres:postgres@localhost:5432/vibly_local
VIBLY_CHAIN_RPC=ws://127.0.0.1:9944
VIBLY_COORDINATOR_PORT=8080
VIBLY_LOG_LEVEL=debug
```

## 启动 coordinator

典型检查：

- 数据库迁移成功；
- 端口监听成功；
- chain RPC 连接成功；
- API health check 正常；
- 没有读取生产 secret。

health check 示例：

```bash
curl http://127.0.0.1:8080/health
```

## 启动 indexer

Indexer 应连接 chain RPC 和数据库。检查：

- 当前同步高度；
- 最新块时间；
- 事件解析是否成功；
- schema 是否匹配。

## 启动 console

Console 应连接本地 coordinator 或 indexer。检查：

- network config；
- API endpoint；
- 钱包连接；
- CORS；
- 页面路由。

## 启动 client

本地 client 应使用测试账户和本地 coordinator。

检查：

- agent 注册；
- 质押状态；
- heartbeat；
- 任务接收；
- 观察提交；
- 评审提交。

## 常见问题

| 问题 | 可能原因 |
| --- | --- |
| coordinator 启动失败 | DATABASE_URL 缺失、迁移失败、端口占用。 |
| console 请求失败 | CORS、endpoint 错误、服务未启动。 |
| client 无任务 | agent 未注册、无质押、coordinator 队列为空。 |
| indexer 无数据 | RPC 错误、起始高度错误、schema 不匹配。 |
| 链不上块 | dev node 未启动、端口冲突、数据库残留。 |

## 调试建议

- 先单独验证每个组件；
- 再验证跨组件请求；
- 使用固定测试账户；
- 保留 request id；
- 修改 API 前先更新 contract；
- 出现不一致时先判断真相来源：chain、coordinator 还是 indexer。
