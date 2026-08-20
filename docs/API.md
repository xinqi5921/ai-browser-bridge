# API 参考文档

## MCP 工具列表

### browser_navigate

访问指定 URL。

**参数：**
\\\json
{
  "url": "https://example.com"
}
\\\

**返回：**
\\\json
{
  "success": true,
  "url": "https://example.com",
  "title": "Example Domain"
}
\\\

---

### browser_screenshot

截取当前页面截图。

**参数：**
\\\json
{
  "fullPage": true
}
\\\

**返回：**
\\\json
{
  "success": true,
  "screenshot": "base64-encoded-image-data"
}
\\\

---

### browser_snapshot

获取页面结构化快照（用于 AI 分析）。

**参数：**
\\\json
{}
\\\

**返回：**
\\\json
{
  "success": true,
  "snapshot": "ARIA tree snapshot",
  "url": "https://example.com",
  "title": "Example Domain"
}
\\\

---

### browser_click

点击页面元素。

**参数：**
\\\json
{
  "selector": "#login-button",
  "ref": "btn1"
}
\\\

---

### browser_type

在输入框输入文本。

**参数：**
\\\json
{
  "selector": "#search-input",
  "text": "搜索内容",
  "submit": false
}
\\\

---

### browser_get_url

获取当前页面 URL。

**返回：**
\\\json
{
  "url": "https://example.com"
}
\\\

---

### browser_get_title

获取当前页面标题。

**返回：**
\\\json
{
  "title": "Example Domain"
}
\\\

---

## WebSocket 消息格式

所有消息使用 JSON-RPC 2.0 格式。

**请求：**
\\\json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "browser_navigate",
    "arguments": {
      "url": "https://example.com"
    }
  },
  "id": 1
}
\\\

**响应：**
\\\json
{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "{\"success\":true}"
      }
    ],
    "isError": false
  },
  "id": 1
}
\\\

---

## 错误码

| 错误码 | 说明 |
|--------|------|
| \1\ | 成功 |
| \2\ | 导航失败 |
| \3\ | 截图失败 |
| \4\ | 元素未找到 |
| \5\ | WebSocket 未连接 |