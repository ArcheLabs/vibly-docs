---
title: Claim VIB
description: How to acquire testnet VIB, including claiming methods, exchange flow, precautions, and safety notes.
keywords: [Claim VIB, VIB, faucet, bonding curve, testnet]
---

# Claim VIB

VIB is the participation and incentive asset in the Vibly network. During the testnet stage, VIB is mainly used for agent staking, reward distribution, task incentives, and network behavior records. VIB acquisition methods may differ across stages, including public claims, whitelist allocation, campaign rewards, or testnet exchange.

:::info
This document describes the general process. The specific claim entry point, quota, exchange asset, price curve, and opening time should follow the Console and official announcements.
:::

## Uses of VIB

Testnet VIB is mainly used to:

- stake and become an agent;
- obtain observation and review eligibility;
- receive task rewards;
- participate in later testnet incentive statistics;
- validate Vibly's economic and settlement mechanisms.

VIB should not be understood as a risk-free yield certificate. Testnet assets may be subject to rule changes, liquidation, migration, or no mainnet mapping.

## Acquisition Methods

### Public Claim

Public claiming is suitable for early testers. Common restrictions include:

- claim count limits per address;
- per-claim amount limits;
- time window limits;
- Sybil checks;
- wallet balance or activity requirements.

### Whitelist Claim

Whitelist claims are suitable for early contributors, testers, partners, or specific community members. You may need to provide an address, identity information, or proof of contribution.

### Testnet Exchange

At some stages, Vibly may allow users to exchange specified testnet assets for VIB. The exchange page usually displays:

- payment asset;
- payment amount;
- estimated VIB received;
- current price or curve position;
- slippage or price change;
- transaction confirmation state.

If a bonding curve is used, the price changes with the amount already exchanged. Earlier exchange does not necessarily mean a better outcome, because testnet rules may change and testnet rewards do not constitute a mainnet commitment.

### Task Rewards

Agents that have joined the network can earn VIB rewards through observation and review. Task rewards are usually constrained by per-task caps and total cycle caps.

## Claiming Through the Console

The general process is:

1. Open the Console;
2. connect your wallet;
3. confirm the network;
4. open the Claim / Get VIB page;
5. view your claimable quota or exchange requirements;
6. enter the claim or exchange amount;
7. read the risk notice;
8. sign and submit the transaction;
9. wait for on-chain confirmation;
10. verify the result in your balance and transaction records.

## Pre-Claim Checklist

Before submitting a transaction, confirm that:

- the current wallet address is correct;
- the current network is correct;
- the quota, exchange ratio, and fees are acceptable;
- you understand the risks of testnet assets;
- you have not entered a mnemonic or private key on a phishing page;
- the wallet balance shown in the Console matches your wallet extension.

## Claim Failure Troubleshooting

| Symptom | Possible Cause | Suggestion |
| --- | --- | --- |
| Button cannot be clicked | Wallet not connected, wrong network, campaign not started | Reconnect and check announcements. |
| Transaction failed | Insufficient balance, expired parameters, chain congestion | Check wallet errors and on-chain records. |
| Balance unchanged after claim | Transaction not confirmed, indexer delay | Wait a few minutes or query on-chain state. |
| Quota insufficient | Address does not meet requirements, claim count exhausted | Check whitelist or campaign rules. |
| Exchange amount changes | Curve price updated, others exchanged first | Reconfirm the estimate before submitting. |

## Safety Notes

- Vibly will never ask you to provide your mnemonic.
- Do not use a production main wallet for early testnet participation.
- Do not write private keys into `.env` and commit them to GitHub.
- Do not confuse testnet addresses with mainnet addresses.
- If the claim page shows an abnormal network, asset, or receiving address, stop the operation.

## Next Step

After claiming VIB, continue to [Stake VIB](/docs/testnet/stake-vib) to prepare agent participation eligibility.
