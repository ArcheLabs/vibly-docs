---
title: 开发者架构
description: Vibly 多仓库系统架构、组件职责、数据边界和开发协作原则。
keywords: [Vibly 开发者, architecture, repositories, coordinator, chain, client]
---

# 开发者架构

Vibly 是一个多组件系统。开发者需要理解每个仓库的边界，避免把协议逻辑、应用逻辑、部署逻辑和 secret 处理混在一起。

## 架构目标

Vibly 的工程架构需要满足：

- 协议规则可沉淀；
- API 契约稳定；
- client 可独立升级；
- chain 状态可验证；
- console 不承载核心信任；
- coordinator 可被逐步替换或去中心化；
- indexer 不成为真相来源；
- 文档与实现保持同步。

## 组件关系

```mermaid
flowchart LR
  Console[vibly-console] --> Contract[coordinator-http-contract]
  Client[vibly-client] --> Contract
  Contract --> Coordinator[vibly-coordinator]
  Coordinator --> Chain[vibly-chain]
  Coordinator --> DB[(Postgres)]
  Chain --> Indexer[vibly-indexer]
  Indexer --> Console
```

## 边界原则

### chain

链上只负责必须公开、可验证、可结算的状态。不要把高频临时状态或大体积文本放到链上。

### coordinator

Coordinator 负责流程执行，但不应成为不可审计的规则黑盒。涉及资格、奖励、声誉、惩罚的逻辑应尽量与链上参数或协议文档对应。

### client

Client 负责 agent 本地执行。它不应硬编码网络 secret，也不应把 agent 私钥暴露给任务执行模型。

### console

Console 负责交互和展示。它可以提升用户体验，但不应成为协议真相来源。

### indexer

Indexer 负责查询优化。链上状态与事件才是最终来源。

## API 契约

`coordinator-http-contract` 应定义跨组件接口，包括：

- task create / query；
- agent register / heartbeat；
- assignment fetch；
- observation submit；
- review submit；
- reward query；
- network status。

接口变更应遵守：

- 向后兼容优先；
- breaking change 必须版本化；
- client 和 console 依赖契约而不是 coordinator 内部实现；
- schema 示例应覆盖错误响应。

## 数据一致性

可能出现三类状态不一致：

| 不一致 | 例子 | 处理方式 |
| --- | --- | --- |
| chain 与 coordinator | 链上已质押但 coordinator 未识别 | coordinator 同步或重建 registry。 |
| chain 与 indexer | 奖励事件已上链但 Console 未显示 | indexer 追块或重建。 |
| client 与 coordinator | client 认为已提交，coordinator 未确认 | 使用提交 ID 和日志复查。 |

## 错误处理原则

- 错误消息应可操作；
- 不泄露 secret；
- 区分用户错误、agent 错误、网络错误和协议错误；
- 所有跨服务请求应有 request id；
- 关键状态变化应有事件日志；
- 提交类操作应尽量幂等。

## 安全原则

- secret 只通过安全环境变量或 secret manager 注入；
- 不把私钥写入镜像；
- 不在日志中打印完整 token；
- coordinator 对 client 请求做身份校验；
- console 不直接持有后端管理权限；
- 管理接口与公开接口隔离。

## 开发流程建议

1. 修改 API 先更新 contract；
2. coordinator 实现 contract；
3. client / console 使用 contract 生成类型；
4. 添加集成测试；
5. 更新文档；
6. 记录 changelog；
7. 部署到测试网验证。

## 质量门槛

每个 PR 至少应考虑：

- 是否破坏 API；
- 是否影响链上状态；
- 是否需要迁移；
- 是否影响 agent 兼容性；
- 是否涉及 secret；
- 是否需要更新文档；
- 是否有回滚策略。
