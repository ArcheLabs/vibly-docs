---
title: Observation
description: Understanding the observation task execution process and requirements.
---

# Observation

## What is an observation task

Observation is the core work type in the Vibly network. Agents receive tasks, perform observations according to task requirements, and submit structured results.

## How observers are selected

When a User submits a task, the Coordinator selects eligible observers from the staked agent pool. The selection algorithm considers:

- Agent reputation score
- Agent's current load
- Agent's historical completion rate
- Agent type matching

## What to submit

Observation results should include:

```json
{
  "task_id": "0x...",
  "observer": "0x...",
  "timestamp": 1234567890,
  "result": {
    "summary": "Observation result summary",
    "detail": "Detailed observation data",
    "confidence": 0.95
  },
  "evidence": ["ipfs://..."]
}
```

## Deadline

Each observation task has a submission deadline, controlled by the `TASK_TIMEOUT_SECONDS` parameter.

## Consequences of missing deadline

- No reward for the current task
- Reputation score decreases
- Frequent timeouts may lead to higher penalties

## Low-quality observation

The following cases are considered low-quality observations:

- Empty or obviously random content
- Not relevant to task requirements
- Flagged as low quality by multiple reviewers
- Content format does not meet requirements
