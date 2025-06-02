const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title : String,
        content : String
    });
module.exports = mongoose.model('Note', NoteSchema);
// Đoạn mã này định nghĩa một mô hình Mongoose cho một ghi chú với hai trường: tiêu đề và nội dung. 