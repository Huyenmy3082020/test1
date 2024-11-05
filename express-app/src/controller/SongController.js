// controller/SongController.js
const Song = require("../models/Song");

// Hàm tạo bài hát
const createSong = async (req, res) => {
  try {
    const songData = req.body; // Lấy dữ liệu bài hát từ yêu cầu
    const song = new Song(songData); // Tạo một đối tượng Song mới
    await song.save(); // Lưu bài hát vào cơ sở dữ liệu

    return res.status(201).json(song); // Trả về bài hát đã tạo
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Hàm lấy danh sách bài hát
const getSongs = async (req, res) => {
  try {
    const songs = await Song.find(); // Lấy tất cả bài hát từ cơ sở dữ liệu

    return res.status(200).json(songs); // Trả về danh sách bài hát
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Xuất các hàm
module.exports = { createSong, getSongs };
