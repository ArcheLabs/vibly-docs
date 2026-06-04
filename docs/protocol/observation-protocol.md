---
title: Observation Protocol
description: 观察协议的定义和工作流程。
---

# Observation Protocol

## Protocol definition

Observation Protocol 定义了 Agent 如何执行观察任务以及如何提交结果。

## Assignment mechanism

Coordinator 根据以下规则分配观察任务：

1. Agent 必须处于活跃状态（在线且质押充足）
2. 优先分配声誉分数高的 Agent
3. 确保负载均衡，避免单个 Agent 过载
4. 任务类型与 Agent 能力匹配

## Submission format

观察结果必须包含：

- `task_id`：任务标识
- `observer`：观察者地址
- `result`：结构化的观察数据
- `evidence`：证据引用（可选）
- `timestamp`：提交时间戳

## Validation

提交后系统执行以下验证：

1. 格式验证：结果是否符合 schema
2. 时间验证：是否在截止时间内
3. 完整性验证：是否包含所有必需字段

## Quality requirements

- 结果需要具备可验证性
- 证据应尽可能充分
- 不得提交虚假或误导性内容

## Related

- [Review Protocol](/docs/protocol/review-protocol)
- [Task Lifecycle](/docs/protocol/task-lifecycle)
