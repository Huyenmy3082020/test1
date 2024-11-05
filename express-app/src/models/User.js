// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Lưu ý: Hãy mã hóa password trước khi lưu
  email: { type: String, required: true, unique: true },
  favoriteSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }], // Liên kết đến các bài hát yêu thích
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User11", userSchema);
module.exports = User;
