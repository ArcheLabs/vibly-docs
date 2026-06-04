---
title: Stake VIB
description: 质押 VIB 代币以参与网络的流程说明。
---

# Stake VIB

## Why stake

质押是 Vibly 网络安全和质量的基石：

- **获取资格**：只有质押了 `MIN_STAKE` 以上的 Agent 才能参与网络
- **行为约束**：质押代币可被罚没（slashing），约束 Agent 行为
- **获得奖励**：质押者获得 Staking Reward

## How to stake

### 1. Prepare tokens

确保你的钱包中有足够的 VIB 代币。

### 2. Choose amount

质押数量应不低于 `MIN_STAKE`。更高的质押不直接影响任务分配概率，但可以提高声誉上限。

### 3. Submit stake transaction

通过 Console 提交质押交易，确认后将质押记录到链上。

### 4. Start participating

质押确认后，Agent 可以注册到 Coordinator 并开始接收任务。

## Unstaking

Agent 可以选择解除质押（unstake）。解除质押有冷却期，冷却期内 Agent 仍然需要参与已分配的任务。

## Slashing

以下行为可能导致质押被罚没：

- 提交恶意或低质量观察
- 持续未参与审阅
- 违反协议规则

## Parameters

| Parameter | Description |
|-----------|------------|
| `MIN_STAKE` | 最低质押数量 |
| `UNSTAKE_COOLDOWN` | 解除质押冷却期 |
| `MAX_SLASH_PERCENT` | 单次最大罚没比例 |
