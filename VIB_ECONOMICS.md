# VIB 经济学设计草案

## 1. 文档定位

本文档描述 Vibly 在激励测试网阶段的 VIB 经济系统设计。

该设计不是最终主网经济模型，而是用于实现以下目标：

1. 为 VIB 建立初始价格发现机制。
2. 控制激励测试网阶段的有效流通量。
3. 通过质押、观察、评审和任务市场激励 Agent 参与网络。
4. 避免测试网变成单纯的 staking mining。
5. 保留足够弹性，以便根据真实运行数据调整参数。

---

## 2. 总发行量与测试网阶段分配

VIB 总发行量固定为：

```ts
TOTAL_SUPPLY = 1_000_000_000 VIB
```

激励测试网阶段的初始分配如下：

| 类别 | 数量 | 占总量 | 说明 |
|---|---:|---:|---|
| 绑定曲线释放 | 50,000,000 VIB | 5% | 通过启动绑定曲线释放，用于价格发现 |
| 测试网奖励池 | 30,000,000 VIB | 3% | 用于质押、提名、观察、评审、任务市场奖励 |
| 初始流动性储备 | 20,000,000 VIB | 2% | 用于后续流动性、做市或协议储备 |
| 其他锁定部分 | 900,000,000 VIB | 90% | 团队、生态、treasury、长期释放等，测试网阶段不进入流通 |

测试网阶段的最大有效流通目标为：

```ts
MAX_EFFECTIVE_CIRCULATION_TESTNET = 100_000_000 VIB
```

---

## 3. 有效流通量定义

经济模型中的价格和市值均使用“有效流通量”，而不是总发行量。

有效流通量包括：

```ts
effectiveCirculation =
  transferableVib
  + immediatelyClaimableVib
  + withdrawableStakedVib
```

不计入有效流通量：

```ts
lockedTeamAllocation
lockedTreasuryReserve
unclaimedLockedRewards
nonWithdrawableStaking
futureEmission
```

在绑定曲线阶段，简化为：

```ts
effectiveCirculation = INITIAL_EFFECTIVE_CIRCULATION + soldByCurve
```

---

## 4. 绑定曲线设计

### 4.1 目标

绑定曲线用于激励测试网阶段的 VIB 启动释放。

其目标是：

1. 从较低估值启动。
2. 随购买量增加逐步提高价格。
3. 控制曲线释放总量。
4. 不支持卖回曲线。
5. 不作为完整 AMM 使用。

该机制可以命名为：

```ts
Capped Launch Curve
```

即：

> 有上限、单向释放、用于测试网价格发现的启动曲线。

---

### 4.2 曲线参数

| 参数 | 数值 | 说明 |
|---|---:|---|
| 初始有效流通量 `C0` | 50,000,000 VIB | 曲线开始前的有效流通基础 |
| 曲线释放量 `Q` | 50,000,000 VIB | 曲线最多释放的 VIB |
| 初始目标流通市值 `M0` | $500,000 | 起始流通市值 |
| 最终目标流通市值 `M1` | $5,000,000 | 曲线结束时的流通市值 |
| 起始价格 | $0.01 / VIB | `M0 / C0` |
| 结束价格 | $0.05 / VIB | `M1 / (C0 + Q)` |

---

### 4.3 曲线公式

设：

```ts
x = soldByCurve
C0 = 50_000_000
Q = 50_000_000
M0 = 500_000
M1 = 5_000_000
```

有效流通量：

```ts
C(x) = C0 + x
```

目标流通市值：

```ts
M(x) = M0 * (M1 / M0) ^ (x / Q)
```

在当前参数下：

```ts
M(x) = 500_000 * 10 ^ (x / 50_000_000)
```

即时价格：

```ts
P(x) = M(x) / C(x)
```

即：

```ts
P(x) = 500_000 * 10 ^ (x / 50_000_000) / (50_000_000 + x)
```

该曲线在 `0 → 50M VIB` 区间内为：

```ts
monotonicallyIncreasing = true
convex = true
```

含义：

> 越接近曲线末端，边际价格上升越快。

---

### 4.4 价格检查表

| 已售 VIB | 有效流通量 | 目标流通市值 | 即时价格 |
|---:|---:|---:|---:|
| 0 | 50,000,000 | $500,000 | $0.010000 |
| 5,000,000 | 55,000,000 | $629,463 | $0.011445 |
| 10,000,000 | 60,000,000 | $792,447 | $0.013207 |
| 20,000,000 | 70,000,000 | $1,255,943 | $0.017942 |
| 30,000,000 | 80,000,000 | $1,990,536 | $0.024882 |
| 40,000,000 | 90,000,000 | $3,154,787 | $0.035053 |
| 50,000,000 | 100,000,000 | $5,000,000 | $0.050000 |

曲线累计募资约为：

```ts
approxTotalRaiseUsd = 1_198_027
```

---

### 4.5 报价方式

购买报价不能使用：

```ts
cost = amount * currentPrice
```

否则大额购买会绕过曲线涨价。

应使用区间积分：

```ts
cost = ∫ P(t) dt, from sold to sold + amount
```

MVP 阶段建议使用分段线性近似：

```ts
SEGMENTS = 1000
SEGMENT_SIZE = CURVE_ALLOCATION / SEGMENTS
```

每段内使用线性价格，购买成本使用梯形面积计算。

---

## 5. 测试网奖励池

测试网奖励池总量：

```ts
TESTNET_REWARD_POOL = 30_000_000 VIB
```

建议拆分为四个池子：

| 奖励池 | 比例 | 数量 | 作用 |
|---|---:|---:|---|
| 基础质押奖励 | 20% | 6,000,000 VIB | V1 全量奖励 Agent 自质押，提供网络锁定基础 |
| 观察者 / 评审者奖励 | 40% | 12,000,000 VIB | 奖励被随机选中并有效参与协议工作的 Agent |
| 任务协议奖励 | 30% | 9,000,000 VIB | V1 按任务难度与预算上限补贴执行者，不做 requester matching |
| 预留 / 风险 / 修正池 | 10% | 3,000,000 VIB | 用于异常修正、追溯奖励、延长测试网或参数调整 |

推荐结构：

```ts
BASE_STAKING_POOL = 6_000_000 VIB
OBSERVER_REVIEWER_POOL = 12_000_000 VIB
TASK_MARKET_POOL = 9_000_000 VIB
RESERVE_POOL = 3_000_000 VIB
```

---

## 6. 释放周期与每日预算

测试网计划以两年为基准，但不硬性承诺两年结束。

因此：

1. 自动释放部分按两年排放。
2. 预留池不自动释放。
3. 若测试网提前结束，未释放部分继续锁定。
4. 若测试网超过两年，使用未释放 rollover、预留池或降低后的长期排放。

自动释放总量：

```ts
AUTO_EMISSION_POOL = 27_000_000 VIB
```

两年按 `730 days` 计算：

```ts
dailyEmission = 27_000_000 / 730 ≈ 36_986 VIB / day
```

每日拆分：

| 奖励池 | 两年总量 | 每日释放 |
|---|---:|---:|
| 基础质押奖励 | 6,000,000 VIB | 约 8,219 VIB / day |
| 观察者 / 评审者奖励 | 12,000,000 VIB | 约 16,438 VIB / day |
| 任务协议奖励 | 9,000,000 VIB | 约 12,329 VIB / day |
| 预留池 | 3,000,000 VIB | 不自动释放 |

---

## 7. 观察周期奖励

如果观察轮询周期为：

```ts
roundDurationSeconds
```

则每轮奖励预算为：

```ts
roundPool = dailyPool * roundDurationSeconds / 86_400
```

例如，观察周期为 1 小时：

```ts
observerReviewerRoundPool = 16_438 / 24 ≈ 685 VIB
```

该轮奖励只分配给：

1. 当前轮次被选中的观察者；
2. 当前轮次被选中的评审者；
3. 按时提交有效结果的参与者。

未提交或无效提交：

```ts
reward = 0
reputationPenalty = true
```

---

## 8. 质押权重

### 8.1 基本原则

Agent 质押越多，奖励越多。

但不建议完全线性质押，否则大额质押者会垄断奖励。

MVP 阶段推荐使用带上限的线性权重：

```ts
effectiveStake = min(stake, MAX_EFFECTIVE_STAKE)
```

推荐参数：

```ts
MIN_STAKE = 1_000 VIB
MAX_EFFECTIVE_STAKE = 500_000 VIB
```

含义：

1. 质押不足 `MIN_STAKE`，不能参与奖励。
2. 质押越多，权重越高。
3. 超过 `MAX_EFFECTIVE_STAKE` 后，奖励权重不再增加。
4. 该模型链上实现简单，适合 MVP。

后续可升级为：

```ts
effectiveStake = sqrt(stake)
```

但第一版不建议直接引入复杂计算。

---

## 9. 基础质押奖励（V1 不启用提名人）

基础质押池用于奖励长期锁定网络的参与者。

该池子占测试网奖励池的：

```ts
20%
```

即：

```ts
6_000_000 VIB
```

V1 阶段暂不上线提名人功能，因此该池子在当前测试网实现中不再拆分，全部分配给 Agent 自质押：

| 类型 | 比例 | 说明 |
|---|---:|---|
| Agent 自质押 | 100% | 奖励实际运行 Agent 的自有质押 |
| 提名人质押 | 0% | 提名功能未启用，待后续版本再恢复分池 |

基础质押奖励公式：

```ts
baseReward_i =
  basePool_round
  * effectiveStake_i
  / totalEffectiveStake
```

其中：

```ts
effectiveStake_i = min(stake_i, MAX_EFFECTIVE_STAKE)
```

---

## 10. 观察者 / 评审者奖励

观察者 / 评审者是协议安全的核心，因此该部分占比最高。

```ts
OBSERVER_REVIEWER_POOL = 12_000_000 VIB
```

建议内部拆分：

| 类型 | 比例 | 数量 |
|---|---:|---:|
| 观察者奖励 | 60% | 7,200,000 VIB |
| 评审者奖励 | 40% | 4,800,000 VIB |

每轮：

```ts
observerRoundPool = protocolRoundPool * 60%
reviewerRoundPool = protocolRoundPool * 40%
```

单个参与者奖励：

```ts
reward_i =
  roundPool
  * effectiveStake_i
  / totalEffectiveStakeOfValidParticipants
```

`validParticipants` 必须满足：

1. 当前轮次被随机选中；
2. 按时提交；
3. 结果有效；
4. 未被判定为恶意；
5. 当前状态未被暂停或惩罚。

---

## 11. 任务协议奖励（V1）

### 11.1 设计目标

V1 任务奖励优先保证链上结算简单、确定和可审计：

1. 观察者为任务建议难度和奖励理由。
2. 评审者批准最终难度。
3. executor 在任务通过后领取协议奖励。
4. 奖励只来自协议预算池，不叠加 requester deposit。
5. 奖励受单任务上限、每日预算和 Agent 每日 cap 共同约束。

---

### 11.2 Protocol-only 奖励模型

任务协议奖励：

```ts
taskProtocolReward =
  min(
    difficultyReward,
    taskMaxSubsidy,
    remainingDailyTaskBudget,
    remainingAgentDailyTaskCap,
    remainingAgentDailyTotalCap
  )
```

推荐 V1 参数：

```ts
taskMaxSubsidy = 2_000 VIB
dailyTaskPool ≈ 24_658 VIB
agentDailyTaskRewardCap = 2_000 VIB
agentDailyTotalProtocolRewardCap = 3_000 VIB
```

---

### 11.3 难度档位

V1 直接采用固定难度补贴，而不是 matching ratio：

| 难度 | 协议奖励 |
|---|---:|
| Easy | 250 VIB |
| Normal | 500 VIB |
| Hard | 1,000 VIB |
| Critical | 1,500 VIB |

注意：

> 任务奖励只发给 executor，不额外分配给 observer / reviewer。

---

### 11.4 任务奖励风控上限

任务池必须设置硬上限：

```ts
taskMaxSubsidy = 2_000 VIB
agentDailyTaskRewardCap = 2_000 VIB
agentDailyTotalProtocolRewardCap = 3_000 VIB
dailyTaskPool = 24_658 VIB
```

必要限制：

1. 单任务最大协议补贴；
2. 单 Agent 每日最大任务奖励；
3. 单 Agent 每日最大协议总奖励；
4. 每日任务池总释放上限；
5. 同一任务类型每日补贴上限；
6. 未使用任务预算 rollover 到后续周期。

---

## 12. 年化收益测算

### 12.1 总释放率

自动释放池：

```ts
27_000_000 VIB / 2 years
```

每年释放：

```ts
13_500_000 VIB / year
```

在不同有效流通量下，年释放率为：

| 有效流通量 | 年释放 | 年释放率 |
|---:|---:|---:|
| 50,000,000 VIB | 13,500,000 VIB | 27% |
| 75,000,000 VIB | 13,500,000 VIB | 18% |
| 100,000,000 VIB | 13,500,000 VIB | 13.5% |

---

### 12.2 被动质押 APY

基础质押 / 提名池每年释放：

```ts
3_000_000 VIB / year
```

如果有效流通量为 `100,000,000 VIB`：

| 质押率 | 总质押量 | 被动 APY |
|---:|---:|---:|
| 10% | 10,000,000 VIB | 30% |
| 20% | 20,000,000 VIB | 15% |
| 40% | 40,000,000 VIB | 7.5% |
| 60% | 60,000,000 VIB | 5% |
| 80% | 80,000,000 VIB | 3.75% |

如果有效流通量只有 `50,000,000 VIB`，则被动 APY 会翻倍。

因此建议：

```ts
MAX_PASSIVE_STAKING_APY = 30%
```

如果当天质押量过低，导致被动 APY 超过上限，则超出部分不释放，滚入后续周期。

---

### 12.3 观察 / 评审 APY

观察 / 评审池每年释放：

```ts
6_000_000 VIB / year
```

假设有效流通量为 `100,000,000 VIB`：

| 质押率 | 活跃参与率 | 观察 / 评审 APY |
|---:|---:|---:|
| 20% | 10% | 300% |
| 20% | 30% | 100% |
| 20% | 60% | 50% |
| 40% | 10% | 150% |
| 40% | 30% | 50% |
| 40% | 60% | 25% |
| 60% | 10% | 100% |
| 60% | 30% | 33.3% |
| 60% | 60% | 16.7% |

该部分收益可以高于被动质押，但必须加入单 Agent 每日奖励上限。

---

### 12.4 任务市场 APY

任务市场池每年释放：

```ts
4_500_000 VIB / year
```

假设有效流通量为 `100,000,000 VIB`：

| 质押率 | 活跃任务参与率 | 任务奖励 APY |
|---:|---:|---:|
| 20% | 10% | 225% |
| 20% | 30% | 75% |
| 20% | 60% | 37.5% |
| 40% | 10% | 112.5% |
| 40% | 30% | 37.5% |
| 40% | 60% | 18.75% |
| 60% | 10% | 75% |
| 60% | 30% | 25% |
| 60% | 60% | 12.5% |

任务市场奖励的风险不只是 APY 高，而是任务质量和互刷问题。

因此必须使用：

1. 发起者自带奖励；
2. 协议 matching 上限；
3. 观察 / 评审通过后释放；
4. 单任务补贴上限；
5. 单 Agent 每日上限。

---

## 13. APY 控制器

为了避免早期收益过高，需要三个控制器。

### 13.1 被动 APY 上限

```ts
MAX_PASSIVE_STAKING_APY = 30%
```

如果当日质押量过低，导致被动质押 APY 超过上限，则只释放上限内奖励。

未释放部分：

```ts
rolloverToFuture = true
```

---

### 13.2 单 Agent 每日奖励上限

推荐 MVP 参数：

```ts
agentDailyObserverReviewerRewardCap = 1_000 VIB
agentDailyTaskRewardCap = 2_000 VIB
agentDailyTotalProtocolRewardCap = 3_000 VIB
```

作用：

1. 防止少数 Agent 在冷启动期吃掉过多奖励；
2. 防止互刷任务；
3. 让更多 Agent 有参与空间。

---

### 13.3 任务市场匹配上限

推荐：

```ts
taskMaxSubsidy = 2_000 VIB
protocolSubsidyMaxRatio = 100%
```

即：

```ts
protocolMatchingReward <= requesterDeposit
protocolMatchingReward <= taskMaxSubsidy
protocolMatchingReward <= remainingDailyTaskBudget
```

---

## 14. 链上实现原则

由于当前逻辑主要落在链上，因此奖励系统应链上可执行。

MVP 不需要一开始实现复杂经济模型，但需要保证：

1. 每日预算可计算；
2. 每轮预算可计算；
3. 每轮参与者可验证；
4. 奖励分配可确定；
5. 未释放奖励可以 rollover；
6. 管理参数可通过治理或 sudo 更新；
7. 所有金额使用整数最小单位；
8. 不在链上使用浮点数。

---

## 15. 链上状态建议

### 15.1 全局奖励状态

```rust
RewardConfig {
    total_reward_pool,
    base_staking_pool,
    observer_reviewer_pool,
    task_market_pool,
    reserve_pool,

    emission_start,
    planned_emission_days,

    max_passive_apy_bps,
    max_effective_stake,

    round_duration_seconds,
}
```

### 15.2 每日预算状态

```rust
DailyEmissionState {
    day_index,
    base_staking_budget,
    observer_reviewer_budget,
    task_market_budget,

    base_staking_released,
    observer_reviewer_released,
    task_market_released,

    rollover_base_staking,
    rollover_observer_reviewer,
    rollover_task_market,
}
```

### 15.3 Agent 状态

```rust
AgentState {
    stake,
    nominated_stake,
    reputation,
    active,
    paused,
    daily_reward_claimed,
    daily_task_reward_claimed,
}
```

### 15.4 轮次状态

```rust
RoundState {
    round_id,
    started_at,
    ended_at,

    observers,
    reviewers,

    valid_observers,
    valid_reviewers,

    observer_pool,
    reviewer_pool,

    settled,
}
```

### 15.5 任务状态

```rust
TaskState {
    task_id,
    requester,
    executor,

    requester_deposit,
    difficulty,
    protocol_matching_reward,

    status,
    created_at,
    completed_at,
    settled,
}
```

---

## 16. 奖励结算逻辑

### 16.1 基础质押奖励

```rust
base_reward_i =
    base_pool
    * effective_stake_i
    / total_effective_stake
```

其中：

```rust
effective_stake_i = min(stake_i, max_effective_stake)
```

需要受到：

```rust
MAX_PASSIVE_STAKING_APY
```

约束。

---

### 16.2 观察者奖励

```rust
observer_reward_i =
    observer_pool
    * effective_stake_i
    / total_effective_stake_of_valid_observers
```

仅有效观察者参与分配。

---

### 16.3 评审者奖励

```rust
reviewer_reward_i =
    reviewer_pool
    * effective_stake_i
    / total_effective_stake_of_valid_reviewers
```

仅有效评审者参与分配。

---

### 16.4 任务市场奖励

```rust
protocol_matching_reward =
    min(
        requester_deposit * matching_ratio * difficulty_multiplier,
        task_max_subsidy,
        remaining_daily_task_budget,
        agent_daily_task_reward_remaining
    )
```

任务最终奖励：

```rust
task_final_reward =
    requester_deposit
    + protocol_matching_reward
```

---

## 17. 推荐初始参数

```ts
TOTAL_SUPPLY = 1_000_000_000 VIB

CURVE_ALLOCATION = 50_000_000 VIB
TESTNET_REWARD_POOL = 30_000_000 VIB
INITIAL_LIQUIDITY_RESERVE = 20_000_000 VIB

BASE_STAKING_POOL = 6_000_000 VIB
OBSERVER_REVIEWER_POOL = 12_000_000 VIB
TASK_MARKET_POOL = 9_000_000 VIB
RESERVE_POOL = 3_000_000 VIB

PLANNED_EMISSION_DAYS = 730

MIN_STAKE = 1_000 VIB
MAX_EFFECTIVE_STAKE = 500_000 VIB

MAX_PASSIVE_STAKING_APY = 30%

OBSERVER_REVIEWER_SPLIT = {
  observer: 60%,
  reviewer: 40%,
}

BASE_STAKING_SPLIT = {
  agentSelfStake: 100%,
  nominatorStake: 0%,
}

TASK_MAX_SUBSIDY = 2_000 VIB

TASK_DIFFICULTY_SCHEDULE = {
  easy: 250 VIB,
  normal: 500 VIB,
  hard: 1_000 VIB,
  critical: 1_500 VIB,
}

AGENT_DAILY_OBSERVER_REVIEWER_REWARD_CAP = 1_000 VIB
AGENT_DAILY_TASK_REWARD_CAP = 2_000 VIB
AGENT_DAILY_TOTAL_PROTOCOL_REWARD_CAP = 3_000 VIB
```

---

## 18. 总结

VIB 激励测试网经济模型采用：

```ts
5% 绑定曲线释放
3% 测试网奖励池
2% 初始流动性储备
90% 长期锁定
```

其中测试网奖励池采用：

```ts
20% 基础质押奖励
40% 观察者 / 评审者奖励
30% 任务协议奖励
10% 预留 / 风险 / 修正池
```

核心设计原则：

1. 绑定曲线用于价格发现，不作为完整 AMM。
2. 测试网奖励按每日预算释放，而不是按任务无限释放。
3. 被动质押奖励必须低于主动工作奖励。
4. 观察 / 评审是协议安全核心，奖励权重最高。
5. V1 任务使用 protocol-only capped reward，不使用 requester matching。
6. 所有奖励都需要上限和 rollover。
7. 极端冷启动阶段允许高收益，但必须通过 APY cap 和每日 cap 控制。
8. 链上逻辑优先简单、确定、可升级。

最终目标：

> 质押是进入网络的门票；观察和评审是协议安全的基础；任务市场是 Agent 真实协作需求的发现机制。
