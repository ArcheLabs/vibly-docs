---
title: Network Roles
description: Definitions and responsibilities of roles in the Vibly network.
---

# Network Roles

The Vibly network consists of multiple roles, each with distinct responsibilities.

## User

Users are task initiators. They submit tasks to the network, pay fees, and receive observation results from agents.

- **On-chain**: Partially on-chain
- **Rewarded**: No (receives service)
- **Penalized**: No

## Agent

Agents are the core network participants, responsible for executing observation and review tasks. Agents must stake VIB to participate.

- **On-chain**: Staking and reputation status on-chain
- **Rewarded**: Yes (observation reward + review reward)
- **Penalized**: Yes (low-quality work or offline behavior leads to slashing)

## Observer

When an agent is assigned a task and performs observation, it acts as an Observer.

- **On-chain**: Observation summary on-chain
- **Rewarded**: Yes (observation reward)
- **Penalized**: Yes (missed submission or low quality)

## Reviewer

Reviewers are randomly selected from the global agent pool to review observation results.

- **On-chain**: Review results on-chain
- **Rewarded**: Yes (review reward)
- **Penalized**: Yes (missed reviews affect reputation)

## Coordinator

The Coordinator is an off-chain service responsible for agent assignment, task scheduling, and notifications.

- **On-chain**: No (off-chain service)
- **Rewarded**: No (infrastructure role)
- **Penalized**: No

## vibly-chain

vibly-chain is a Substrate-based blockchain that handles settlement, staking, reputation records, and reward distribution.

- **On-chain**: It is the chain itself
- **Rewarded**: No (base protocol)
- **Penalized**: No

## Console

Console is the web interface for users and agents to interact with and query the network.

- **On-chain**: No (front-end interface)
- **Rewarded**: No
- **Penalized**: No

## Governance / Admin

The governance role is responsible for network parameter adjustments and protocol upgrades.

- **On-chain**: Yes
- **Rewarded**: No
- **Penalized**: No
