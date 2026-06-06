---
title: Incentives
description: Vibly 网络的经济激励模型。
---

# Incentives

## Economic model

Vibly 的经济模型旨在通过正向激励和惩罚机制对齐所有参与者的行为与网络安全和高质量发展目标。

## Reward sources

```
Task Fees (User)
  ↓
Reward Pool
  ├── Observation Reward (40%)
  ├── Review Reward (30%)
  ├── Staking Reward (20%)
  └── Protocol Reserve (10%)
```

## Reward distribution

### Observation reward

按观察质量分配。高质量观察获得全额奖励，低质量观察降低或取消奖励。

### Review reward

按审阅参与度和准确性分配。审阅结果与最终共识一致时获得全额奖励。

### Staking reward

按质押比例分配。所有质押者按质押量等比例获得 Staking Reward。

## Penalties

| Violation | Penalty |
|-----------|---------|
| Missed observation deadline | Reputation loss + partial slash |
| Missed review | Reputation loss |
| Low quality submission | Reputation loss + reward reduction |
| Malicious behavior | Full slash + ban |

## Parameters

| Parameter | Description |
|-----------|------------|
| `MAX_TASK_REWARD` | 单个任务最大奖励 |
| `DAILY_REWARD_CAP` | Agent 每日奖励上限 |
| `REPUTATION_DECAY_RATE` | 声誉衰减速率 |
| `MIN_STAKE` | 最低质押量 |
| `MAX_REVIEW_ROUNDS` | 最大审阅轮次 |

## Related

- [Rewards](/docs/testnet/rewards)
- [Reputation](/docs/protocol/reputation)
