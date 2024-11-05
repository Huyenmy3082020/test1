// models/Song.js
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // ID bài hát
  title: { type: String, required: true }, // Tiêu đề bài hát
  album: { type: String, required: true }, // Tên album
  artist: { type: String, required: true }, // Tên nghệ sĩ
  source: { type: String, required: true }, // Đường dẫn đến file nhạc
  image: { type: String, required: true }, // Đường dẫn đến hình ảnh bài hát
  duration: { type: Number, required: true }, // Thời gian bài hát (tính bằng giây)
  favorite: { type: Boolean, default: false }, // Đánh dấu bài hát yêu thích
  counter: { type: Number, default: 0 }, // Số lần phát
  replay: { type: Number, default: 0 }, // Số lần phát lại
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
