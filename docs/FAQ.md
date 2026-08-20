# 常见问题

## 连接问题

### Q: Chrome 扩展连接不上 MCP Server？

**A:** 检查以下几点：
1. MCP Server 是否正在运行（端口 9009）
2. Chrome 扩展是否已正确加载
3. 点击扩展图标后是否点击了 Connect 按钮
4. 状态是否变为绿色

### Q: 测试页面显示 Connected 但扩展显示 Disconnected？

**A:** 这是正常的。测试页面只测试 WebSocket 连接，扩展需要单独加载并点击 Connect。

### Q: 如何在 Codex CLI 中使用？

**A:** Codex CLI 已经内置了 MCP 支持，直接在你的会话中就能使用浏览器控制功能。

---

## 配置问题

### Q: Cursor 找不到 MCP Server？

**A:** 确保：
1. settings.json 路径正确：\%USERPROFILE%\AppData\Roaming\Cursor\User\settings.json\
2. MCP Server 已启动
3. Cursor 已重启

### Q: 如何修改 WebSocket 端口？

**A:** 设置环境变量 \WS_PORT\：

\\\ash
# Windows
set WS_PORT=8080

# Linux/Mac
export WS_PORT=8080
\\\

---

## 使用问题

### Q: 截图中文字乱码？

**A:** 确保 Chrome 使用支持中文的字体。在 Chrome 设置中调整字体选项。

### Q: 页面元素点击失败？

**A:** 使用 CSS 选择器时注意：
- 使用唯一的 ID 或 class
- 确保元素已加载完成
- 尝试使用 \rowser_snapshot\ 获取元素引用

### Q: 如何处理需要登录的网站？

**A:** 扩展使用你当前 Chrome 会话的 Cookie，已登录的网站可以直接使用。

---

## 企业版问题

### Q: 如何升级到企业版？

**A:** 联系作者获取企业版授权。

### Q: 企业版支持定制开发吗？

**A:** 是的，提供定制开发服务，请联系商务。