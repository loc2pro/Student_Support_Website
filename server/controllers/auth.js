const env = "ACCESS_TOKEN_SECRET";
const config = require(__dirname + "/../config/config.json")[env];
const jwt = require("jsonwebtoken");
const { Students } = require("../models");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  const { mssv, password } = req.body;
  if (!mssv || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing mssv or password" });
  }
  try {
    //Check for mssv
    const user = await Students.findOne({ where: { mssv: mssv } });
    if (!user)
      return res.json({
        success: false,
        message: "Incorrect mssv or password",
      });
    else {
      //check password
      bcrypt
        .compare(password, user.password)
        .then(async (result) => {
          if (!result)
            return res.status(404).json({
              success: false,
              message: "Incorrect mssv or password",
            });
          else {
            const accessToken = jwt.sign({ userId: user.id }, config);
            await user
              .getMajor()
              .then(async (marjor) => {
                await marjor.getScience().then((sciences) => {
                  res.json({ user, marjor, sciences, accessToken });
                });
              })
              .catch((err) => {
                res.json({ user });
              });
          }
        })
        .catch((err) => {
          console.log(err);
          res.json({ success: false, message: "Login in failer" });
        });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Login in failer" });
  }
};

const Register = async (req, res) => {
  const { mssv, password, name, email } = req.body;
  if (!mssv || !password) {
    return res
      .status(200)
      .json({ success: false, message: "Missing mssv or password" });
  }
  try {
    //Check for mssv
    const user = await Students.findOne({ where: { mssv: mssv } });
    if (user)
      return res.json({
        success: false,
        message: "Mssv has already existed",
      });
    else {
      //check password
      bcrypt.hash(password, 10).then((hash) => {
        Students.create({
          mssv: mssv,
          name: name,
          email: email,
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
    res.json({ success: false, message: "Register in failer", error });
  }
};

const CheckUser = async (req, res) => {
  try {
    const user = await Students.findByPk(req.userId);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Student not found" });
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Login failer" });
  }
};

module.exports = { Login, Register, CheckUser };
