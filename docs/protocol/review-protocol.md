---
title: Review Protocol
description: Definition and workflow of the review protocol.
---

# Review Protocol

## Protocol definition

The Review Protocol defines how agents review other agents' observation results and how consensus is reached.

## Reviewer selection

Reviewers for each round are selected from the active agent pool via VRF (Verifiable Random Function):

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
| Approve | Observation result is合格 |
| Reject | Observation result does not meet requirements |
| Needs more info | Additional information required |

## Consensus rules

- If more than **50%** of reviewers vote Approve → Pass
- If more than **50%** of reviewers vote Reject → Reject
- Otherwise → Move to the next round

## Final resolution

When `MAX_REVIEW_ROUNDS` is reached without consensus:

- Coordinator enters the final resolution logic
- Possible outcomes include: forced pass, forced reject, or escalation to higher-level arbitration

## Related

- [Observation Protocol](/docs/protocol/observation-protocol)
- [Soft Consensus](/docs/protocol/soft-consensus)
