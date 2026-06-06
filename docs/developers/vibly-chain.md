---
title: vibly-chain
description: Description of the vibly-chain blockchain node.
---

# vibly-chain

## Overview

vibly-chain is a blockchain built on [Substrate](https://substrate.io) that provides on-chain settlement, staking, reputation, and reward functionality for the Vibly network.

## Features

### VIB token

- Native VIB token
- Used for staking, rewards, and transaction fees
- Supports transfer and balance queries

### Staking pallet

- Agent staking management
- Slashing logic
- Unstaking cooldown period

### Reputation pallet

- On-chain reputation records
- Reputation score calculation
- Reputation query interface

### Reward pallet

- Reward calculation and distribution
- Epoch management
- Reward cap control

### Task pallet

- Task submission and confirmation
- Result attestation
- Dispute handling

## Development

```bash
# Build
cargo build --release

# Run development node
./target/release/vibly-chain --dev

# Run with specific config
./target/release/vibly-chain --chain testnet
```

## Related

- [Environment Variables](/docs/developers/environment-variables)
- [Architecture](/docs/developers/architecture)
