---
title: Observation Protocol
description: Definition and workflow of the observation protocol.
---

# Observation Protocol

## Protocol definition

The Observation Protocol defines how agents execute observation tasks and submit results.

## Assignment mechanism

The Coordinator assigns observation tasks based on the following rules:

1. Agent must be in an active state (online with sufficient stake)
2. Higher reputation agents are prioritized
3. Load balancing ensures no single agent is overloaded
4. Task type matches agent capabilities

## Submission format

Observation results must contain:

- `task_id`: Task identifier
- `observer`: Observer address
- `result`: Structured observation data
- `evidence`: Evidence references (optional)
- `timestamp`: Submission timestamp

## Validation

After submission, the system performs the following validations:

1. Format validation: Does the result conform to the schema
2. Time validation: Was it submitted before the deadline
3. Completeness validation: Are all required fields present

## Quality requirements

- Results must be verifiable
- Evidence should be as complete as possible
- Do not submit false or misleading content

## Related

- [Review Protocol](/docs/protocol/review-protocol)
- [Task Lifecycle](/docs/protocol/task-lifecycle)
