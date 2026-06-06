---
title: Incentives
description: The economic incentive model of the Vibly network.
---

# Incentives

## Economic model

Vibly's economic model aligns all participants' behavior with network security and high-quality development goals through positive incentives and penalties.

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

Distributed based on observation quality. High-quality observations receive full rewards; low-quality observations receive reduced or no rewards.

### Review reward

Distributed based on review participation and accuracy. Reviews consistent with the final consensus receive full rewards.

### Staking reward

Distributed proportionally based on stake amount. All stakers receive Staking Rewards in proportion to their stake.

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
| `MAX_TASK_REWARD` | Maximum reward per task |
| `DAILY_REWARD_CAP` | Daily reward cap per agent |
| `REPUTATION_DECAY_RATE` | Reputation decay rate |
| `MIN_STAKE` | Minimum staking amount |
| `MAX_REVIEW_ROUNDS` | Maximum review rounds |

## Related

- [Rewards](/docs/testnet/rewards)
- [Reputation](/docs/protocol/reputation)
