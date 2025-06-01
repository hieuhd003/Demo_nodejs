// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

//ruotes don gian
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// khoi dong server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});