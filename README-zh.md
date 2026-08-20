# AI Browser Bridge - 浏览器自动化 MCP 服务器

<div align=\ center\>

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-orange.svg)](https://modelcontextprotocol.io/)
[![GitHub stars](https://img.shields.io/github/stars/xinqi5921/ai-browser-bridge?style=social)](https://github.com/xinqi5921/ai-browser-bridge/stargazers)

**让 AI 直接控制你的 Chrome 浏览器 \u2014 开箱即用的 MCP 服务器**

[English Docs](README-en.md) | [安装指南](docs/INSTALL.md) | [API 参考](docs/API.md) | [企业版](enterprise/)

</div>

---

## 是什么？

AI Browser Bridge 是一个 **Chrome 浏览器自动化 MCP 服务器**，让 AI 助手（Claude、Cursor、Codex 等）能够直接控制你的 Chrome 浏览器，执行网页导航、截图、点击、内容提取等复杂操作。

### 为什么选择我们？

| 特性 | AI Browser Bridge | 其他方案 |
|------|:------------------:|:--------:|
| 多 AI 工具支持 | \u2705 Cursor + Claude + Codex | \u26a0 仅支持单一工具 |
| 开箱即用 | \u2705 一键启动 | \u274c 需要复杂配置 |
| 中文文档 | \u2705 完整中文支持 | \u26a0 英文为主 |
| 企业级功能 | \u2705 多用户/SSO/审计 | \u274c 无 |
| 开源免费 | \u2705 MIT 许可证 | \u26a0 部分收费 |

---

## 快速开始

\\\ash
# 克隆项目
git clone https://github.com/xinqi5921/ai-browser-bridge.git
cd ai-browser-bridge

# 安装依赖
npm install

# 一键启动
./\u542f\u52a8.bat
\\\

### 配置 MCP 客户端

在 Cursor / Claude Desktop / Codex 中配置 MCP 服务器：

\\\json
{
  \mcpServers\: {
    \ai-browser-bridge\: {
      \command\: \node\,\n      \args\: [\path/to/server.js\]\n    }\n  }\n}\n\\\

详细配置请查看 [安装指南](docs/INSTALL.md)。\n\n---\n\n## 核心功能\n\n| 功能 | 描述 | 示例场景 |\n|------|------|----------|\n| **浏览器导航** | 访问任意网页 | 自动化测试、数据爬取 |\n| **智能截图** | 自动截图并 AI 分析页面内容 | UI 测试、页面监控 |\n| **点击/输入** | 模拟鼠标键盘操作 | 表单填写、自动化操作 |\n| **内容提取** | 提取页面文本和结构化数据 | 数据采集、信息检索 |\n| **快照分析** | AI 分析页面内容和结构 | 智能决策、内容理解 |\n| **批量操作** | 批量执行多个浏览器任务 | 批量数据爬取、自动化工作流 |\n\n---\n\n## 支持的 AI 工具\n\n| 工具 | 集成方式 | 难度 |\n|------|----------|:----:|\n| **Cursor** | 内置 MCP 配置 | 简单 |\n| **Claude Desktop** | MCP Server 配置 | 简单 |\n| **Codex CLI** | MCP Protocol | 中等 |\n| **任意 MCP 客户端** | 标准 MCP 协议 | 中等 |\n\n---\n\n## 定价方案\n\n### 免费版（开源）\n- 基础浏览器操作\n- 单浏览器会话\n- 社区支持\n- MIT 许可证\n\n### 专业版 \u2014 \u00a5129/\u6708\n- 5 个浏览器会话\n- 5,000 API \u8c03\u7528/\u6708\n- 批量操作\n- 优先技术支持\n- 使用统计面板\n\n### 企业版 \u2014 \u5b9a\u5236\u62a5\u4ef7\n- \u65e0\u9650浏览器会话\n- \u65e0\u9650 API \u8c03\u7528\n- \u591a\u7528\u6237\u7ba1\u7406\n- SSO \u5355\u70b9\u767b\u5f55\n- \u5ba1\u8ba1\u65e5\u5fd7\n- \u5b9a\u5236\u5f00\u53d1\n- \u4e13\u5c5e\u5ba2\u670d\n\n[\u67e5\u770b\u5b8c\u6574\u5b9a\u4ef7](enterprise/PRICING.md) | [\u514d\u8d39\u8bd5\u7528 7 \u5929](#)\n\n---\n\n## \u6587\u6863\n\n| \u6587\u6863 | \u8bf4\u660e |\n|------|------|\n| [\u5b89\u88c5\u6307\u5357](docs/INSTALL.md) | \u5feb\u901f\u5b89\u88c5\u548c\u914d\u7f6e |\n| [API \u53c2\u8003](docs/API.md) | \u5b8c\u6574 API \u6587\u6863 |\n| [\u914d\u7f6e\u8bf4\u660e](docs/CONFIG.md) | \u8be6\u7ec6\u914d\u7f6e\u9009\u9879 |\n| [\u5e38\u89c1\u95ee\u9898](docs/FAQ.md) | \u5e38\u89c1\u95ee\u9898\u89e3\u7b54 |\n| [\u90e8\u7f72\u6307\u5357](docs/DEPLOYMENT.md) | \u4f01\u4e1a\u90e8\u7f72\u65b9\u6848 |\n\n---\n\n## \u89c6\u9891\u6559\u7a0b\n\n| \u89c6\u9891 | \u94fe\u63a5 |\n|------|------|\n| \u5b89\u88c5\u914d\u7f6e\u6559\u7a0b | [B\u7ad9](https://bilibili.com) |\n| \u4f7f\u7528\u6848\u4f8b\u6f14\u793a | [B\u7ad9](https://bilibili.com) |\n| \u9ad8\u7ea7\u529f\u80fd\u6559\u7a0b | [YouTube](#) |\n\n---\n\n## \u4f01\u4e1a\u7248\u529f\u80fd\n\n\u67e5\u770b [\u4f01\u4e1a\u7248\u6587\u6863](enterprise/README.md) \u4e86\u89e3\u66f4\u591a\uff1a\n\n- **\u7528\u6237\u7ba1\u7406** \u2014 \u591a\u7528\u6237\u6743\u9650\u63a7\u5236\n- **\u652f\u4ed8\u96c6\u6210** \u2014 \u8ba2\u9605\u7ba1\u7406\u548c\u8ba1\u8d39\n- **\u4f7f\u7528\u7edf\u8ba1** \u2014 \u5b9e\u65f6\u6570\u636e\u9762\u677f\n- **\u4f01\u4e1a\u5b89\u5168** \u2014 SSO\u3001\u5ba1\u8ba1\u65e5\u5fd7\u3001IP \u767d\u540d\u5355\n\n---\n\n## \u8d21\u732e\u6307\u5357\n\n\u6211\u4eec\u6b22\u8fce\u6240\u6709\u5f62\u5f0f\u7684\u8d21\u732e\uff01\n\n1. Fork \u672c\u4ed3\u5e93\n2. \u521b\u5efa\u7279\u6027\u5206\u652f\n3. \u63d0\u4ea4\u66f4\u6539\n4. \u63a8\u9001\u5230\u5206\u652f\n5. \u5f00\u542f Pull Request\n\n\u8bf7\u9605\u8bfb [\u8d21\u732e\u6307\u5357](docs/CONTRIBUTING.md) \u4e86\u89e3\u66f4\u591a\u3002\n\n---\n\n## \u652f\u6301\u6211\u4eec\n\n\u5982\u679c\u8fd9\u4e2a\u9879\u76ee\u5bf9\u4f60\u6709\u5e2e\u52a9\uff0c\u6b22\u8fce\u652f\u6301\u6211\u4eec\uff1a\n\n- [GitHub Sponsors](https://github.com/sponsors/xinqi5921)\n- [\u7231\u53d1\u7535](https://afdian.net/@xinqi5921)\n- \u7ed9\u4e00\u4e2a Star\n\n\u4f60\u7684\u652f\u6301\u662f\u6211\u4eec\u6301\u7eed\u5f00\u53d1\u7684\u6700\u5927\u52a8\u529b\uff01\n\n---\n\n## \u8bb8\u53ef\u8bc1\n\n[MIT License](LICENSE) - \u81ea\u7531\u4f7f\u7528\u3001\u4fee\u6539\u548c\u5206\u53d1\n\n---

<div align=\center\>

**Made with love by [xinqi5921](https://github.com/xinqi5921)**

Star us on GitHub \u2014 it helps!

</div>