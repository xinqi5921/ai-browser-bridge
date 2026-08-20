const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.use(cors());
app.use(express.json());

// 内存存储（生产环境用数据库）
const users = new Map();
const sessions = new Map();

// 认证中间件
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: '未授权' });
  
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ error: '无效令牌' });
  }
};

// 注册
app.post('/api/auth/register', (req, res) => {
  const { username, password, email } = req.body;
  if (users.has(username)) {
    return res.status(400).json({ error: '用户名已存在' });
  }
  
  const user = { username, password, email, createdAt: new Date() };
  users.set(username, user);
  
  const token = jwt.sign({ username, role: 'user' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { username, email } });
});

// 登录
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.get(username);
  
  if (!user || user.password !== password) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }
  
  const token = jwt.sign({ username, role: 'user' }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { username, email: user.email } });
});

// 获取使用统计
app.get('/api/stats', authMiddleware, (req, res) => {
  const stats = {
    totalSessions: sessions.size,
    activeSessions: 0,
    totalRequests: 0,
    requestsToday: 0
  };
  res.json(stats);
});

// 管理用户（管理员）
app.get('/api/admin/users', authMiddleware, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: '权限不足' });
  }
  const userList = Array.from(users.values()).map(u => ({
    username: u.username,
    email: u.email,
    createdAt: u.createdAt
  }));
  res.json(userList);
});

app.listen(PORT, () => {
  console.log('Enterprise API running on port', PORT);
});