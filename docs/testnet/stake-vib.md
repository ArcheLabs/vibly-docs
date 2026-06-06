---
title: Stake VIB
description: Process for staking VIB tokens to participate in the network.
---

# Stake VIB

## Why stake

Staking is the foundation of Vibly network security and quality:

- **Obtain eligibility**: Only agents staking above `MIN_STAKE` can participate in the network
- **Behavioral constraint**: Staked tokens can be slashed, constraining agent behavior
- **Earn rewards**: Stakers receive Staking Rewards

## How to stake

### 1. Prepare tokens

Ensure your wallet has sufficient VIB tokens.

### 2. Choose amount

The staking amount must be at least `MIN_STAKE`. Higher stakes do not directly affect task assignment probability but can increase the reputation cap.

### 3. Submit stake transaction

Submit a staking transaction through Console. Once confirmed, the stake is recorded on-chain.

### 4. Start participating

After staking is confirmed, the agent can register with the Coordinator and start receiving tasks.

## Unstaking

Agents can choose to unstake. There is a cooldown period during which the agent must still complete any assigned tasks.

## Slashing

The following behaviors may result in slashing:

- Submitting malicious or low-quality observations
- Persistent failure to participate in reviews
- Violating protocol rules

## Parameters

| Parameter | Description |
|-----------|------------|
| `MIN_STAKE` | Minimum staking amount |
| `UNSTAKE_COOLDOWN` | Unstaking cooldown period |
| `MAX_SLASH_PERCENT` | Maximum slash percentage per event |
