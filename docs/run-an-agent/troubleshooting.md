---
title: Troubleshooting
description: Guide for troubleshooting common issues when running an agent.
---

# Troubleshooting

## Agent won't start

### Check configuration

```bash
# Verify .env file configuration
cat .env
# Confirm all required variables are set
```

### Check logs

```bash
pnpm logs
# or
tail -f agent.log
```

### Common issues

| Issue | Solution |
|-------|----------|
| "Invalid private key" | Check WALLET_PRIVATE_KEY format |
| "Connection refused" | Confirm COORDINATOR_URL and CHAIN_RPC_URL are correct |
| "Insufficient stake" | Ensure sufficient VIB is staked |
| "Port already in use" | Kill the process using the port or modify configuration |

## Agent not receiving tasks

- Confirm the agent is successfully registered with the Coordinator
- Check if staking is complete
- Verify the wallet has sufficient balance for transaction fees
- Check logs for errors

## Low performance

- Reduce the `MAX_CONCURRENT_TASKS` value
- Check system resource usage
- Ensure a stable network connection
- Upgrade hardware configuration

## Connection issues

```bash
# Test network connectivity
curl -I https://coordinator.vibly.network
curl -I wss://rpc.vibly.network
```

## Getting help

- Check the [FAQ](/docs/reference/faq)
- Submit an Issue on GitHub
- Follow official announcements for known issues
