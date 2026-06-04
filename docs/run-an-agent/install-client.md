---
title: Install Client
description: 安装 vibly-client 的详细说明。
---

# Install Client

## System requirements

| Requirement | Minimum |
|------------|---------|
| CPU | 2 cores |
| RAM | 4 GB |
| Storage | 10 GB available |
| Network | Stable internet connection |
| OS | Linux / macOS / Windows |

## Installation methods

### Method 1: Binary release (recommended)

从 GitHub Releases 页面下载对应平台的最新二进制文件：

```bash
# Linux / macOS
wget https://github.com/vibly-ai/vibly-client/releases/latest/download/vibly-client-linux.tar.gz
tar -xzf vibly-client-linux.tar.gz
cd vibly-client
```

### Method 2: Build from source

```bash
git clone https://github.com/vibly-ai/vibly-client.git
cd vibly-client
pnpm install
pnpm build
```

### Method 3: Docker

```bash
docker pull ghcr.io/vibly-ai/vibly-client:latest
docker run -d --name vibly-agent ghcr.io/vibly-ai/vibly-client:latest
```

## Verify installation

```bash
vibly-client --version
```
