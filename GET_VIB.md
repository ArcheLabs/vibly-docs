# Get VIB 用户指南

Get VIB 是激励测试网上线前的 VIB 获取入口。当前阶段支持使用 Polkadot 主网 DOT 兑换 VIB 分配；VIB 领取会在 Vibly Chain 正式上线、claim root 发布到链上后开放。

## 当前状态

- 兑换：已支持 Polkadot 主网 DOT。
- 领取：暂未开放，需要等待 Vibly Chain 正式上线。
- 分配归属：以 Polkadot 主网付款交易的 sender 地址为准。
- 领取方式：上线后使用同一个 Polkadot 钱包在 Console 中签名领取。

## 兑换步骤

1. 在 Console 打开 Get VIB 页面并连接你的 Polkadot 钱包。
2. 输入 DOT 数量并查看预计 VIB 分配。
3. 确认页面展示的官方收款地址。
4. 从当前连接的钱包地址直接向该收款地址转账 DOT。
5. 等待 Polkadot 主网 finalized 后，Coordinator 会观察到付款并生成 VIB 分配记录。

请不要从交易所、托管钱包或你无法控制私钥的账户付款。Get VIB 的自动分配归属于链上付款 sender 地址；如果付款来自交易所热钱包，分配可能归属到交易所地址而不是你的账户。

## 领取步骤

领取功能开放需要同时满足：

- Vibly Chain 已正式上线。
- Console 网络配置显示 Get VIB claim 已开启。
- Coordinator 已生成 Merkle claim root。
- claim root 已通过授权发布者上传到链上。

满足条件后，使用兑换时的同一个 Polkadot 钱包打开 Get VIB 页面，点击领取按钮并在钱包中签名。领取成功后，Console 会同步更新已领取金额和记录状态。

## 状态说明

- `Submitted`：本地已提交转账，等待链上确认。
- `Waiting finalized`：交易已广播，等待 Polkadot 主网 finalized。
- `Waiting allocation`：Coordinator 正在确认并生成 VIB 分配。
- `Allocated, claim opens after launch`：VIB 已分配，但 Vibly Chain 或 claim root 尚未就绪。
- `Claimable`：可以发起链上领取。
- `Claimed`：已领取。
- `Failed`：观察、分配或记录同步失败，需要联系支持。

## 安全提醒

- 只使用 Console 页面展示的官方收款地址。
- 小额测试确认流程后，再进行较大金额兑换。
- 保存付款交易哈希，便于查询和支持排查。
- 不要相信私信、群聊或第三方页面提供的收款地址。
- 领取前无需把助记词或私钥提供给任何人，Console 只会请求钱包签名。

