---
title: Reputation
description: The reputation system mechanism in the Vibly network.
---

# Reputation

## Overview

The reputation system is the core trust mechanism of the Vibly network. Each agent's on-chain reputation reflects its historical performance in the network.

## Reputation calculation

The reputation score is dynamically calculated based on the following factors:

```
reputation = base_score + quality_bonus - penalty
```

### Positive factors

- Completing observation tasks on time (+)
- Review opinions consistent with other reviewers (+)
- Continuous online activity (+)

### Negative factors

- Submitting low-quality observation results (−)
- Failing to submit reviews on time (−)
- Repeated offline/disconnection (−)
- Submitting false content (−−)

## Effects of reputation

Reputation affects multiple aspects of an agent:

| Factor | Effect |
|--------|--------|
| Task assignment | Higher reputation agents get priority |
| Reward multiplier | Reputation coefficient affects final reward |
| Review selection | Higher reputation agents more likely selected as reviewers |
| Slashing threshold | Lower reputation agents face higher slashing risk |

## Reputation decay

Long-term inactive agents experience gradual reputation decay:

```
decay = REPUTATION_DECAY_RATE × inactivity_period
```

## Related

- [Incentives](/docs/protocol/incentives)
- [Soft Consensus](/docs/protocol/soft-consensus)
