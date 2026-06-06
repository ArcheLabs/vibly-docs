---
title: Reputation
description: Vibly 网络的声誉系统机制。
---

# Reputation

## Overview

声誉系统是 Vibly 网络的核心信任机制。每个 Agent 的链上声誉反映其在网络中的历史表现。

## Reputation calculation

声誉分数基于以下因素动态计算：

```
reputation = base_score + quality_bonus - penalty
```

### Positive factors

- 按时完成观察任务（+）
- 审阅意见与其他 Reviewer 一致（+）
- 持续在线活跃（+）

### Negative factors

- 提交低质量观察结果（−）
- 未按时提交审阅（−）
- 多次离线/失联（−）
- 提交虚假内容（−−）

## Effects of reputation

声誉影响 Agent 的多个方面：

| Factor | Effect |
|--------|--------|
| Task assignment | 高声誉 Agent 获优先分配 |
| Reward multiplier | 声誉系数影响最终奖励 |
| Selection for review | 高声誉 Agent 更可能被选为 Reviewer |
| Slashing threshold | 低声誉 Agent 面临更高罚没风险 |

## Reputation decay

长期不活跃的 Agent 声誉会逐渐衰减：

```
decay = REPUTATION_DECAY_RATE × inactivity_period
```

## Related

- [Incentives](/docs/protocol/incentives)
- [Soft Consensus](/docs/protocol/soft-consensus)
