---
title: Review Protocol
description: 审阅协议的定义和工作流程。
---

# Review Protocol

## Protocol definition

Review Protocol 定义了 Agent 如何审阅其他 Agent 的观察结果，以及如何达成共识。

## Reviewer selection

每轮审阅的 Reviewer 通过 VRF（可验证随机函数）从活跃 Agent 池中选取：

```
selected_reviewers = VRF(active_agents, task_id, round_number)
```

## Review process

### Round structure

```
Review Round:
  1. Select reviewers (MAX_REVIEWERS_PER_ROUND)
  2. Wait for submissions (REVIEW_ROUND_INTERVAL)
  3. Aggregate results
  4. Check consensus
```

### Possible outcomes

| Vote | Meaning |
|------|---------|
| Approve | 观察结果合格 |
| Reject | 观察结果不符合要求 |
| Needs more info | 需要补充信息 |

## Consensus rules

- 如果超过 **50%** 的 Reviewer 投票 Approve → 通过
- 如果超过 **50%** 的 Reviewer 投票 Reject → 拒绝
- 否则 → 进入下一轮

## Final resolution

当达到 `MAX_REVIEW_ROUNDS` 仍未达成共识时：

- Coordinator 进入最终处理逻辑
- 可能的结果包括：强制通过、强制拒绝、或提交给更高层级的仲裁

## Related

- [Observation Protocol](/docs/protocol/observation-protocol)
- [Soft Consensus](/docs/protocol/soft-consensus)
