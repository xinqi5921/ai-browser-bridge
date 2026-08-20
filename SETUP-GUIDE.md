# AI Browser Bridge - 最终设置指南

## 当前状态

### 已完成
- MCP Server 运行中 (端口 9009, PID 12848)
- Chrome 扩展已构建 (outputs/chrome-ext/, 17 文件)
- MCP 配置文件已生成 (mcp-config/ai-browser-bridge/)
- settings.json 已生成 (cursor-settings-output.json)

### 需要手动完成
由于沙箱权限限制，以下操作需要手动完成：

## 步骤 1: 复制 MCP 配置文件

1. 打开源目录：
   C:\Users\顺李成张\Documents\Codex\2026-08-16\chrome-plugin-chrome-openai-bundled-file-2\mcp-config\ai-browser-bridge

2. 复制整个 ai-browser-bridge 文件夹

3. 打开目标目录：
   C:\Users\顺李成张\.cursor\projects\empty-window\mcps\

4. 粘贴文件夹

## 步骤 2: 复制 settings.json

1. 打开源文件：
   C:\Users\顺李成张\Documents\Codex\2026-08-16\chrome-plugin-chrome-openai-bundled-file-2\cursor-settings-output.json

2. 复制文件内容

3. 打开目标位置：
   C:\Users\顺李成张\AppData\Roaming\Cursor\User\

4. 创建或编辑 settings.json 文件，粘贴以下内容：

{
  "mcpServers": {
    "ai-browser-bridge": {
      "command": "node",
      "args": [
        "C:\\Users\\顺李成张\\Documents\\Codex\\2026-08-16\\chrome-plugin-chrome-openai-bundled-file-2\\work\\ai-browser-bridge\\dist\\index.js"
      ],
      "env": {
        "WS_PORT": "9009",
        "OPENAI_API_KEY": "dummy-key",
        "LOG_LEVEL": "info"
      }
    }
  }
}

## 步骤 3: 重启 Cursor

完全关闭 Cursor（任务管理器确认无残留进程），然后重新打开。

## 步骤 4: 加载 Chrome 扩展

1. 打开 Chrome
2. 地址栏输入：chrome://extensions/
3. 开启右上角「开发者模式」
4. 点击「加载已解压的扩展程序」
5. 选择目录：outputs\chrome-ext\
6. 点击扩展图标 -> Connect

## 步骤 5: 测试

在 Cursor 聊天中输入：
navigate to https://example.com and take a screenshot

## 文件位置汇总

| 组件 | 路径 |
|------|------|
| MCP Server | work/ai-browser-bridge/dist/index.js |
| MCP 配置源 | mcp-config/ai-browser-bridge/ |
| MCP 配置目标 | .cursor/projects/empty-window/mcps/ai-browser-bridge/ |
| settings.json 源 | cursor-settings-output.json |
| settings.json 目标 | %USERPROFILE%\AppData\Roaming\Cursor\User\settings.json |
| Chrome 扩展 | outputs/chrome-ext/ |

## MCP 工具列表
- browser_navigate - 导航到 URL
- browser_snapshot - 获取页面快照
- browser_click - 点击元素
- browser_type - 输入文本
- browser_screenshot - 截图
- browser_get_url - 获取当前 URL
- browser_get_title - 获取页面标题
