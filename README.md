# AI Browser Bridge - Browser Automation MCP Server

<div align=\ center\>

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-orange.svg)](https://modelcontextprotocol.io/)
[![GitHub stars](https://img.shields.io/github/stars/xinqi5921/ai-browser-bridge?style=social)](https://github.com/xinqi5921/ai-browser-bridge/stargazers)

**Let AI Control Your Chrome Browser Directly \u2014 Ready-to-use MCP Server**

[Chinese Docs](README-zh.md) | [Installation](docs/INSTALL.md) | [API Reference](docs/API.md) | [Enterprise](enterprise/)

</div>

---

## What is it?

AI Browser Bridge is a **Chrome browser automation MCP server** that allows AI assistants (Claude, Cursor, Codex, etc.) to directly control your Chrome browser, performing complex operations like page navigation, screenshots, clicks, and content extraction.

### Why Choose Us?

| Feature | AI Browser Bridge | Others |
|---------|:------------------:|:--------:|
| Multi AI Tools | \u2705 Cursor + Claude + Codex | \u26a0 Single tool only |
| Ready to Use | \u2705 One-click start | \u274c Complex setup |
| Chinese Docs | \u2705 Full Chinese support | \u26a0 English only |
| Enterprise Features | \u2705 Multi-user/SSO/Audit | \u274c None |
| Open Source | \u2705 MIT License | \u26a0 Some paid |

---

## Quick Start

\\\ash
# Clone the project
git clone https://github.com/xinqi5921/ai-browser-bridge.git
cd ai-browser-bridge

# Install dependencies
npm install

# One-click start
./launcher.bat
\\\

### Configure MCP Client

Configure MCP server in Cursor / Claude Desktop / Codex:

\\\json
{
  \mcpServers\: {
    \ai-browser-bridge\: {
      \command\: \node\,\n      \args\: [\path/to/server.js\]\n    }\n  }\n}\n\\\

See [Installation Guide](docs/INSTALL.md) for detailed configuration.\n\n---\n\n## Core Features\n\n| Feature | Description | Use Case |\n|---------|-------------|----------|\n| **Navigate** | Visit any webpage | Automation testing, scraping |\n| **Smart Screenshot** | Auto-capture and AI analyze pages | UI testing, page monitoring |\n| **Click/Type** | Simulate mouse and keyboard | Form filling, automation |\n| **Extract Content** | Get page text and structured data | Data collection, search |\n| **Snapshot Analysis** | AI-powered page analysis | Smart decisions, content understanding |\n| **Batch Operations** | Execute multiple browser tasks | Batch scraping, workflow automation |\n\n---\n\n## Supported AI Tools\n\n| Tool | Integration | Difficulty |\n|------|-------------|:----------:|\n| **Cursor** | Built-in MCP config | Easy |\n| **Claude Desktop** | MCP Server config | Easy |\n| **Codex CLI** | MCP Protocol | Medium |\n| **Any MCP Client** | Standard MCP protocol | Medium |\n\n---\n\n## Pricing\n\n### Free (Open Source)\n- Basic browser operations\n- Single browser session\n- Community support\n- MIT License\n\n### Professional \u2014 /month or \u00a5129/month\n- 5 browser sessions\n- 5,000 API calls/month\n- Batch operations\n- Priority support\n- Usage analytics dashboard\n\n### Enterprise \u2014 Custom pricing\n- Unlimited browser sessions\n- Unlimited API calls\n- Multi-user management\n- SSO single sign-on\n- Audit logs\n- Custom development\n- Dedicated support\n\n[View Full Pricing](enterprise/PRICING.md) | [Start Free Trial 7 Days](#)\n\n---\n\n## Documentation\n\n| Document | Description |\n|----------|-------------|\n| [Installation Guide](docs/INSTALL.md) | Quick install and config |\n| [API Reference](docs/API.md) | Complete API docs |\n| [Configuration](docs/CONFIG.md) | Detailed config options |\n| [FAQ](docs/FAQ.md) | Frequently asked questions |\n| [Deployment Guide](docs/DEPLOYMENT.md) | Enterprise deployment |\n\n---\n\n## Video Tutorials\n\n| Video | Link |\n|-------|------|\n| Installation Guide | [Bilibili](https://bilibili.com) |\n| Use Case Demo | [Bilibili](https://bilibili.com) |\n| Advanced Features | [YouTube](#) |\n\n---\n\n## Enterprise Features\n\nCheck [Enterprise Docs](enterprise/README.md) for more:\n\n- **User Management** \u2014 Multi-user permission control\n- **Payment Integration** \u2014 Subscription management and billing\n- **Usage Analytics** \u2014 Real-time data dashboard\n- **Enterprise Security** \u2014 SSO, audit logs, IP whitelist\n\n---\n\n## Contributing\n\nWe welcome all forms of contributions!\n\n1. Fork the repository\n2. Create a feature branch\n3. Commit changes\n4. Push to branch\n5. Open a Pull Request\n\nSee [Contributing Guide](docs/CONTRIBUTING.md) for more details.\n\n---\n\n## Support Us\n\nIf this project helps you, please consider supporting us:\n\n- [GitHub Sponsors](https://github.com/sponsors/xinqi5921)\n- [Afdian](https://afdian.com/p/691e27549c5911f1aa215254001e7c00)\n- Give us a Star\n\nYour support is our greatest motivation to keep developing!\n\n---\n\n## License\n\n[MIT License](LICENSE) - Free to use, modify, and distribute\n\n---

<div align=\center\>

**Made with love by [xinqi5921](https://github.com/xinqi5921)**

Star us on GitHub \u2014 it helps!

</div>