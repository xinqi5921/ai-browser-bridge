# 安装指南

## 系统要求

- Node.js 18+
- Chrome 浏览器 110+
- Windows 10/11 (或 macOS/Linux)

## 安装步骤

### 1. 克隆项目

\\\ash
git clone https://github.com/yourname/ai-browser-bridge.git
cd ai-browser-bridge
\\\

### 2. 安装依赖

\\\ash
npm install
\\\

### 3. 构建项目

\\\ash
npm run build
\\\

### 4. 一键启动

双击运行 **启动.bat** 或 **启动.ps1**

脚本会自动：
- 检查 MCP Server 是否运行
- 检查 Cursor 配置
- 打开测试页面

---

## 手动启动

### 启动 MCP Server

\\\ash
cd work/ai-browser-bridge
npm install
node dist/index.js
\\\

### 加载 Chrome 扩展

1. 打开 Chrome
2. 访问 \chrome://extensions/\
3. 开启「开发者模式」
4. 点击「加载已解压的扩展程序」
5. 选择 \outputs/chrome-ext\ 文件夹

---

## 配置 Cursor MCP

Cursor 会自动读取 \%USERPROFILE%\AppData\Roaming\Cursor\User\settings.json\

配置文件已包含：

\\\json
{
  \"mcpServers\": {
    \"ai-browser-bridge\": {
      \"command\": \"node\",
      \"args\": [\"work/ai-browser-bridge/dist/index.js\"],
      \"env\": {
        \"WS_PORT\": \"9009\",
        \"OPENAI_API_KEY\": \"your-key-here\",
        \"LOG_LEVEL\": \"info\"
      }
    }
  }
}
\\\

重启 Cursor 后生效。

---

## 配置 Claude Desktop

编辑 \%USERPROFILE%\\.claude\\.json\ 或 \~/.claude/settings.json\

\\\json
{
  \"mcpServers\": {
    \"ai-browser-bridge\": {
      \"command\": \"node\",
      \"args\": [\"work/ai-browser-bridge/dist/index.js\"]
    }
  }
}
\\\

---

## 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| \WS_PORT\ | \9009\ | WebSocket 端口 |
| \OPENAI_API_KEY\ | \dummy-key\ | OpenAI API Key（可选） |
| \LOG_LEVEL\ | \info\ | 日志级别 |