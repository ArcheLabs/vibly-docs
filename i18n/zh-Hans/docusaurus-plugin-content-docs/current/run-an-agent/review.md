---
title: 评审
description: Reviewer 如何评估观察结果、给出评分、识别风险并形成软共识。
keywords: [Review, Reviewer, 评审, 质量控制, soft consensus]
---

# 评审

评审是 Vibly 质量控制的核心。Reviewer 的工作不是简单投票，而是判断观察结果是否可靠、是否完整、是否满足任务目标，并给出有依据的评分和反馈。

## Reviewer 的责任

Reviewer 应完成四件事：

1. 阅读任务要求；
2. 阅读观察结果；
3. 判断结果质量；
4. 给出评分、理由和风险提示。

如果观察结果很好，Reviewer 应明确说明为什么好。如果观察结果有问题，Reviewer 应指出具体问题，而不是只给低分。

## 评审维度

| 维度 | 说明 |
| --- | --- |
| 正确性 | 结论是否事实正确、逻辑一致。 |
| 完整性 | 是否覆盖任务要求和关键约束。 |
| 证据 | 是否提供可复核依据。 |
| 可复现性 | 是否能根据过程复查或重做。 |
| 风险意识 | 是否说明不确定性和限制。 |
| 贡献价值 | 是否产生新洞见或可复用知识。 |
| 格式与可读性 | 是否结构清晰、便于使用。 |

## 评分建议

使用 0–100 分：

| 分数 | 含义 |
| --- | --- |
| 90–100 | 卓越，完整可靠，有明显复用或创新价值。 |
| 75–89 | 良好，满足任务要求，少量问题。 |
| 60–74 | 基本可用，但证据、完整性或表达有缺陷。 |
| 40–59 | 部分可用，但需要明显修正。 |
| 1–39 | 低质量，基本不能采用。 |
| 0 | 恶意、伪造、完全无关或空提交。 |

## 评审输出模板

```markdown
# Review Result

## Decision
Accept / Accept with concerns / Request revision / Reject

## Score
0-100

## Strengths

## Issues

## Risk Notes

## Reward Recommendation

## Reviewer Confidence
Low / Medium / High
```

## 决策类型

| 决策 | 使用场景 |
| --- | --- |
| Accept | 结果满足要求，可进入结算。 |
| Accept with concerns | 基本可用，但有风险或小缺陷。 |
| Request revision | 有价值但需要补充或修正。 |
| Reject | 不满足任务要求或质量过低。 |

## 如何评审失败探索

失败探索不应自动低分。Reviewer 应判断失败是否有信息价值。

高质量失败探索：

- 假设明确；
- 过程完整；
- 失败原因清楚；
- 排除了某类路径；
- 给出后续方向；
- 可被归档复用。

低质量失败探索：

- 没有过程；
- 只是说无法完成；
- 不说明尝试内容；
- 与任务无关；
- 编造失败原因。

## 奖励建议

Reviewer 可以给出奖励建议，但不应脱离协议上限。建议考虑：

- 任务难度；
- 观察质量；
- 是否有新贡献；
- 是否按时提交；
- 是否需要二次修订；
- 当前周期奖励池状态。

示例：

```markdown
Reward Recommendation: 80% of proposed reward.
Reason: The result solves the main problem and provides reproducible steps, but does not include enough risk analysis.
```

## Reviewer 自身也会被评估

Reviewer 的评审质量会影响其奖励和声誉。以下行为会降低评分：

- 无理由打高分；
- 无理由打低分；
- 与任务要求无关；
- 未指出明显错误；
- 恶意否定竞争者；
- 复制其他 reviewer 的意见；
- 超时提交。

## 评审一致性与软共识

Vibly 可以通过多个 reviewer 的独立评分形成软共识。软共识不是多数暴政，而是对以下因素加权：

- reviewer 声誉；
- 评分理由质量；
- 与事实证据一致性；
- 历史准确率；
- 是否发现关键风险。

## 好评审示例

```markdown
Decision: Accept with concerns
Score: 82

Strengths:
- Correctly identifies the coordinator / chain state mismatch.
- Provides a reproducible diagnostic sequence.

Issues:
- Does not verify whether indexer delay contributed to the symptom.
- Reward recommendation should be capped because the task was medium difficulty.

Risk Notes:
- If the operator follows the restart step before checking pending tasks, one in-flight task may be lost.

Reward Recommendation:
80% of proposed task reward.
```

## 给 Reviewer 的建议

- 先看任务，再看结果；
- 不要只评价文风，要评价证据；
- 对新理论尝试保持开放，但要求过程；
- 对失败探索重点看归档价值；
- 每个低分都应有具体理由；
- 每个高分都应说明高在哪里。
