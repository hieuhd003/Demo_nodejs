const express = require('express');
// const mongoose = require('mongoose');
const Note = require('./models/Note'); // Đảm bảo đường dẫn đúng đến mô hình Note
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors()); // <- dòng này là quan trọng
app.use(express.json());

// Két nối đến cơ sở dữ liệu MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => console.log("Kết nối đến MongoDB thành công!"))
    .then(err => console.error("Lỗi kết nối đến MongoDB:", err));

    // Lấy tất cả các ghi chú từ cơ sở dữ liệu
    app.get('/api/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});


    // Tạo mới một ghi chú
    app.post('/api/notes', async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.json(newNote);
}
);

// cap nhat ghi chu

app.put('/api/notes/:id', async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNote);
});

// Xóa một ghi chú
app.delete('/api/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Ghi chú đã được xóa" });
});

// Định nghĩa mô hình Note
app.get('/api/message', (req, res) => {
  res.json({ message: "Xin chào từ backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend đang chạy tại http://localhost:${PORT}`);
});
