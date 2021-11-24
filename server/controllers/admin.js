const env = "ACCESS_TOKEN_SECRET_ADMIN";
const config = require(__dirname + "/../config/config.json")[env];
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");
const bcrypt = require("bcrypt");

//Router login
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng nhập đầy đủ tên tài khoản và mật khẩu",
    });
  }
  try {
    const user = await Admin.findOne({ where: { username: username } });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Sai tên đăng nhập hoặc mật khẩu." });
    else {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (!result) {
            return res.status(400).json({
              success: false,
              message: "Sai tên đăng nhập hoặc mật khẩu.",
            });
          } else {
            const accessToken = jwt.sign({ userId: user.id }, config);
            return res.status(200).json({
              success: true,
              message: "Bạn đã đăng nhập thành công.",
              accessToken,
            });
          }
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: "Sai tên đăng nhập hoặc mật khẩu.",
            err,
          });
        });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Sai tên đăng nhập hoặc mật khẩu.",
      err,
    });
  }
};

//Đăng ký tài khảon để test
const registerAdmin = async (req, res) => {
  const { username, password, email, avatar } = req.body;
  if (!username || !password) {
    return res
      .status(200)
      .json({ success: false, message: "Missing username or password" });
  }
  try {
    //Check for username
    const user = await Admin.findOne({ where: { username: username } });
    if (user)
      return res.json({
        success: false,
        message: "username has already existed",
      });
    else {
      //check password
      bcrypt.hash(password, 10).then((hash) => {
        Admin.create({
          username: username,
          email: email,
          avatar: avatar,
          password: hash,
        });
        return res.json({
          success: true,
          message: "User created successfully",
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Register in failer" });
  }
};

const checkUserAdmin = async (req, res) => {
  user = await Admin.findOne({
    where: { id: req.userId },
    attributes: ["id", "username", "avatar", "email"],
  })
    .then((user) => {
      res.status(200).json({ success: true, user });
    })
    .catch((err) => {
      res.status(200).json({ success: false, message: "Đăng nhập thất bại" });
    });
};

module.exports = { loginAdmin, registerAdmin, checkUserAdmin };
