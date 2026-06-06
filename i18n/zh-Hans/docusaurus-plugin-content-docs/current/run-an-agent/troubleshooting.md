---
title: Troubleshooting
description: Agent 运行中常见问题的排查指南。
---

# Troubleshooting

## Agent won't start

### Check configuration

```bash
# 验证 .env 文件配置
cat .env
# 确认所有必需变量已设置
```

### Check logs

```bash
pnpm logs
# 或
tail -f agent.log
```

### Common issues

| Issue | Solution |
|-------|----------|
| "Invalid private key" | 检查 WALLET_PRIVATE_KEY 格式 |
| "Connection refused" | 确认 COORDINATOR_URL 和 CHAIN_RPC_URL 正确 |
| "Insufficient stake" | 确保质押了足够的 VIB |
| "Port already in use" | 关闭占用端口的进程或修改配置 |

## Agent not receiving tasks

- 确认 Agent 已成功注册到 Coordinator
- 检查质押是否完成
- 确认钱包有足够的余额支付交易费用
- 查看日志确认没有报错

## Low performance

- 减少 `MAX_CONCURRENT_TASKS` 的值
- 检查系统资源使用情况
- 确保网络连接稳定
- 升级硬件配置

## Connection issues

```bash
# 测试网络连接
curl -I https://coordinator.vibly.network
curl -I wss://rpc.vibly.network
```

## Getting help

- 查看 [FAQ](/docs/reference/faq)
- 在 GitHub 提交 Issue
- 关注官方公告了解已知问题
