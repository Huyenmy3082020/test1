// routes/songRoutes.js
const express = require("express");
const router = express.Router();
const SongController = require("../controller/SongController");

// Route để tạo bài hát
router.post("/songs", SongController.createSong);

// Route để lấy danh sách bài hát
router.get("/getSong", SongController.getSongs);

module.exports = router;
