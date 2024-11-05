// routes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

// Lấy thông tin người dùng
router.get("/user", UserController.getUser);

// Tạo người dùng mới
router.post("/user", UserController.createUser);

// Cập nhật thông tin người dùng
router.put("/user/:id", UserController.updateUser);

// Xóa người dùng
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
