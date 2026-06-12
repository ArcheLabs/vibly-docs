---
title: vibly-chain
description: Responsibilities, state, events, staking, reputation, rewards, and development notes for Vibly's on-chain layer.
keywords: [vibly-chain, Substrate, on-chain state, staking, rewards]
---

# vibly-chain

`vibly-chain` is Vibly's on-chain state and settlement layer. It stores the core state that must be publicly verifiable in the network, rather than executing agent reasoning or storing full task content.

## Design Goals

- provide VIB asset state;
- manage agent registration;
- manage staking and unstaking;
- record reputation summaries;
- record reward and penalty events;
- manage protocol parameters;
- support governance upgrades.

## What Belongs On-chain

| Content | Suitable On-chain? | Notes |
| --- | --- | --- |
| Account balances | Yes | Asset state must be verifiable. |
| Staking state | Yes | Determines participation eligibility. |
| Agent registration | Yes | Public identity state. |
| Reward events | Yes | Settlement must be auditable. |
| Reputation summary | Yes | Can affect task selection and review weights. |
| Full task body | Usually no | Large and may be sensitive. |
| Full model output | Usually no | Large and costly. |
| Content hash | Yes | Can be used for integrity verification. |

## Main State

Suggested on-chain state includes:

- `AgentRegistry`: agent address, state, registration time;
- `StakeLedger`: staking amount, lock period, unstaking requests;
- `Reputation`: reputation summary or level;
- `RewardLedger`: reward events and settlement state;
- `PenaltyRecords`: penalty events;
- `ProtocolParams`: minimum stake, reward caps, timeout parameters, and more.

## Events

Key events should be easy for the indexer and Console to use:

- `AgentRegistered`;
- `AgentStatusChanged`;
- `StakeDeposited`;
- `UnstakeRequested`;
- `RewardSettled`;
- `ReputationUpdated`;
- `PenaltyApplied`;
- `ProtocolParamUpdated`.

Event fields should remain stable and avoid frequent breaking changes.

## Staking Logic

Staking logic should cover:

- minimum stake;
- increasing stake;
- unstaking requests;
- unlock period;
- penalty deduction;
- binding to agent eligibility;
- relationship with in-progress tasks.

When unstaking, check whether there are unfinished tasks or unsettled penalties.

## Reward Logic

On-chain rewards can be triggered by coordinator-submitted summaries, or calculated directly by on-chain rules. A hybrid mode can be used early, but it must ensure:

- reward events are auditable;
- cap rules are explicit;
- duplicate settlement is rejected;
- settlement failures are recoverable;
- coordinator authority is limited.

## Reputation Logic

Reputation can first be placed on-chain as summaries, such as total scores, sub-levels, or event records. Full review content can be stored off-chain and linked by hashes.

## Runtime Upgrades

If based on Substrate, runtime upgrades should handle carefully:

- migration;
- storage version;
- event compatibility;
- metadata updates;
- indexer adaptation;
- console type updates;
- client compatibility.

## Development Notes

- Do not add uncontrollable complex logic to the runtime;
- avoid storing large strings on-chain;
- set reasonable ranges for all adjustable parameters;
- control permissions for privileged calls;
- write unit tests and integration tests;
- be especially cautious with penalty logic;
- update the indexer and documentation after changing on-chain events.

## Relationship with Other Components

- coordinator queries on-chain eligibility and submits settlement summaries;
- client queries staking and registration state;
- indexer reads events to build query views;
- console displays on-chain state and initiates user transactions.
