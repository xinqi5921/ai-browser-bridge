# AI Browser Bridge - 安装指南

## 当前状态

### 已完成
- MCP Server 运行中 (端口 9009, PID 12848)
- MCP 配置文件已写入: .cursor\projects\empty-window\mcps\ai-browser-bridge\
- Chrome 扩展已构建: outputs\chrome-ext\ (17个文件)

### 待完成 (需要手动操作)
- 复制 settings.json 到 Cursor 配置目录
- 加载 Chrome 扩展
- 测试浏览器自动化

## 步骤 1: 配置 Cursor MCP

**方法 A: 使用批处理脚本 (推荐)**
`cmd
cd /d C:\Users\顺李成张\Documents\Codex\2026-08-16\chrome-plugin-chrome-openai-bundled-file-2
setup-final.bat
`

**方法 B: 手动复制**
1. 打开文件资源管理器
2. 复制文件: cursor-settings-output.json
3. 粘贴到: %USERPROFILE%\AppData\Roaming\Cursor\User\settings.json
   (覆盖现有文件)

## 步骤 2: 重启 Cursor
完全关闭 Cursor (任务管理器确认无残留进程)，然后重新打开。

## 步骤 3: 加载 Chrome 扩展
1. 打开 Chrome
2. 地址栏输入: chrome://extensions/
3. 开启右上角「开发者模式」
4. 点击「加载已解压的扩展程序」
5. 选择目录: outputs\chrome-ext\
6. 点击扩展图标 -> **Connect**

## 步骤 4: 测试
在 Cursor 聊天中输入:
`
navigate to https://example.com and take a screenshot
`

## 文件位置

| 组件 | 路径 |
|------|------|
| MCP 配置 | .cursor\projects\empty-window\mcps\ai-browser-bridge\ |
| settings.json | cursor-settings-output.json (需复制到 Cursor 目录) |
| Chrome 扩展 | outputs\chrome-ext\ |
| MCP Server | work\ai-browser-bridge\dist\index.js |
| 启动命令 | 
ode work/ai-browser-bridge/dist/index.js |

## MCP 工具列表
- browser_navigate - 导航到 URL
- browser_snapshot - 获取页面快照
- browser_click - 点击元素
- browser_type - 输入文本
- browser_screenshot - 截图
- browser_get_url - 获取当前 URL
- browser_get_title - 获取页面标题
