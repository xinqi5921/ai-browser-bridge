# 部署指南

## 开发环境部署

### 前置条件
- Node.js 18+
- npm 9+
- Chrome 浏览器

### 步骤

1. 克隆项目
   git clone https://github.com/yourname/ai-browser-bridge.git

2. 安装依赖
   npm install

3. 构建项目
   npm run build

4. 启动服务
   ./启动.bat

---

## 生产环境部署

### Docker 部署

docker build -t ai-browser-bridge .
docker run -d -p 9009:9009 ai-browser-bridge

---

## 安全加固

1. 设置强密码
   export OPENAI_API_KEY=your-secure-key

2. 限制 IP 访问
   只允许本地访问

3. 启用 HTTPS
   certbot --nginx -d bridge.example.com
