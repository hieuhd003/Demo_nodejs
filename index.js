const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // cho phép đọc JSON từ request body

// ✅ Tạo route GET /api/users
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice', email: 'alice@gmail.com' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com' }
  ]);
});

// ✅ Chạy server tại cổng 3000
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
