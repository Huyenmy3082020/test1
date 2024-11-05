// UserController.js
const User = require("../../src/models/User"); // Giả sử bạn có một model User

// Lấy thông tin người dùng
const getUser = async (req, res) => {
  try {
    const userId = req.query.id; // Lấy userId từ query params
    const user = await User.findById(userId); // Tìm user theo id

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user); // Trả về thông tin người dùng
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Tạo người dùng mới
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body; // Lấy thông tin từ body
    const newUser = new User({ username, password, email }); // Tạo một đối tượng User mới
    await newUser.save(); // Lưu vào cơ sở dữ liệu
    return res.status(201).json(newUser); // Trả về thông tin người dùng đã tạo
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Cập nhật thông tin người dùng
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Lấy userId từ params
    const updatedData = req.body; // Lấy dữ liệu cập nhật từ body
    const user = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }); // Cập nhật thông tin người dùng

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user); // Trả về thông tin người dùng đã cập nhật
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Xóa người dùng
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Lấy userId từ params
    const user = await User.findByIdAndDelete(userId); // Xóa người dùng

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" }); // Trả về thông báo thành công
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
