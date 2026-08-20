# 视频教程脚本

## 视频 1：安装配置教程

### 开场 (0:00-0:30)
大家好，今天教大家如何安装配置 AI Browser Bridge。
这是一个开源项目，可以让 AI 直接控制你的 Chrome 浏览器。

### 步骤 1：下载项目 (0:30-1:00)
首先从 GitHub 下载项目：
\\\
git clone https://github.com/yourname/ai-browser-bridge.git
\\\
或者直接下载 ZIP 文件。

### 步骤 2：安装依赖 (1:00-1:30)
打开终端，进入项目目录：
\\\
cd ai-browser-bridge
npm install
\\\

### 步骤 3：构建项目 (1:30-2:00)
\\\
npm run build
\\\
构建完成后，在 outputs 文件夹可以看到扩展文件。

### 步骤 4：启动服务 (2:00-2:30)
双击运行 启动.bat
脚本会自动启动 MCP Server 并打开测试页面。

### 步骤 5：加载 Chrome 扩展 (2:30-3:30)
1. 打开 Chrome，访问 chrome://extensions/
2. 开启开发者模式
3. 点击加载已解压的扩展程序
4. 选择 outputs/chrome-ext 文件夹
5. 点击扩展图标，点击 Connect
6. 状态变绿表示成功

### 步骤 6：配置 Cursor (3:30-4:00)
配置已自动写入，重启 Cursor 即可使用。

### 测试 (4:00-4:30)
在 Cursor 中输入：
\\\
navigate to https://example.com and take a screenshot
\\\
观察 Chrome 浏览器的变化。

### 结尾 (4:30-5:00)
感谢观看，如果觉得有用请点赞订阅！
项目地址：https://github.com/yourname/ai-browser-bridge

---

## 视频 2：使用案例演示

### 案例 1：自动化测试 (0:00-1:30)
演示如何使用 AI 进行网页自动化测试。
\\\
请在 example.com 网站上填写表单并提交
\\\

### 案例 2：数据抓取 (1:30-3:00)
演示如何抓取网页数据。
\\\
访问 amazon.com 搜索「Laptop」，抓取前 5 个结果的价格
\\\

### 案例 3：截图报告 (3:00-4:30)
演示如何生成页面截图报告。
\\\
访问 10 个网站，截取每个网站的首页，生成报告
\\\

### 案例 4：登录自动化 (4:30-6:00)
演示如何处理需要登录的网站。
\\\
打开 Gmail，使用已保存的会话登录，检查未读邮件数量
\\\

### 结尾 (6:00-6:30)
更多功能敬请期待！