const Sciences = require("../models/Sciences");
const { Students, ClassCourses, Courses, Teachers } = require("../models");
const bcrypt = require("bcrypt");
const env = "ACCESS_TOKEN_SECRET";
const config = require(__dirname + "/../config/config.json")[env];
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const getSciences = async (req, res) => {
  const mssv = req.params.mssv;
  await Students.findOne({ where: { mssv: mssv } })
    .then(async (student) => {
      console.log("student tim được:", student);
      await student
        .getMajor()
        .then(async (marjor) => {
          await marjor.getScience().then((sciences) => {
            res.json({ student, marjor, sciences });
          });
        })
        .catch((err) => {
          res.json({ student });
        });
    })
    .catch((err) => {});
};

const getStudent = async (req, res) => {
  const mssv = req.body;
  await Students.findOne({ where: { mssv: mssv } })
    .then(async (student) => {
      console.log("student tim được:", student);
      await student
        .getMajor()
        .then(async (marjor) => {
          await marjor.getScience().then((sciences) => {
            res.json({ student, marjor, sciences });
          });
        })
        .catch((err) => {
          res.json({ student });
        });
    })
    .catch((err) => {});
};

const createStudent = async (req, res) => {
  const { mssv, name, password, email, dateOfBirth, address, MajorId } =
    req.body;

  bcrypt.hash(password, 10).then(async (hash) => {
    await Students.create({
      mssv: mssv,
      name: name,
      password: hash,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address,
      MajorId: MajorId,
    })
      .then((newsudent) => {
        res.status(200).json({
          success: true,
          message: "Create student success",
          newsudent,
        });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ success: false, message: "Create student failer", err });
      });
  });
};

const updateStudent = async (req, res) => {
  const { mssv, name, password, email, dateOfBirth, address } = req.body;
  console.log(req.body);
  if (req.body.password) {
    bcrypt.hash(password, 10).then(async (hash) => {
      await Students.update(
        {
          mssv: mssv,
          name: name,
          password: hash,
          email: email,
          dateOfBirth: dateOfBirth,
          address: address,
        },
        { where: { mssv: mssv } }
      )
        .then(async (result) => {
          await Students.findOne({ where: { mssv: mssv } })

            .then(async (user) => {
              const accessToken = jwt.sign({ userId: user.id }, config);

              await user
                .getMajor()
                .then(async (marjor) => {
                  await marjor.getScience().then((sciences) => {
                    res.status(200).json({
                      user,
                      message: `Update student ${name} success`,
                      marjor,
                      sciences,
                      accessToken,
                    });
                  });
                })
                .catch((err) => {
                  res.json({ err });
                });
            })
            .catch((err) => {});
        })
        .catch((err) => {
          res
            .status(400)
            .json({ success: false, message: "update student failer", err });
        });
    });
  } else {
    await Students.update(
      {
        mssv: mssv,
        name: name,
        email: email,
        dateOfBirth: dateOfBirth,
        address: address,
      },
      { where: { mssv: mssv } }
    )
      .then(async (result) => {
        await Students.findOne({ where: { mssv: mssv } })

          .then(async (user) => {
            const accessToken = jwt.sign({ userId: user.id }, config);

            await user
              .getMajor()
              .then(async (marjor) => {
                await marjor.getScience().then((sciences) => {
                  res.status(200).json({
                    user,
                    message: `Update student ${name} success`,
                    marjor,
                    sciences,
                    accessToken,
                  });
                });
              })
              .catch((err) => {
                res.json({ err });
              });
          })
          .catch((err) => {});
      })
      .catch((err) => {
        res
          .status(400)
          .json({ success: false, message: "update student failer", err });
      });
  }
};

const forgotPassword = async (req, res) => {
  const mssv = req.params.mssv;
  let newpass = (Math.random() + 1).toString(36).substring(7);
  bcrypt.hash(newpass, 10).then(async (hash) => {
    await Students.update({ password: hash }, { where: { mssv: mssv } })
      .then((result) => {
        res.status(200).json({
          success: true,
          newpass: newpass,
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          err: err,
        });
      });
  });
};

const deleteStudent = async (req, res) => {
  const mssv = req.params.mssv;
  await Students.destroy({ where: { mssv: mssv } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Delete student success",
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Delete student failer",
        err: err,
      });
    });
};

const getClasses = (req, res) => {
  const mssv = req.params.mssv;
  Students.findOne({ where: { mssv: mssv } })
    .then(async (student) => {
      await student
        .getLearns()
        .then(async (learns) => {
          let listCourses = [];
          await Promise.all(
            learns.map(async (learn) => {
              await ClassCourses.findByPk(learn.ClassCourseId)
                .then(async (classcourse) => {
                  await Courses.findByPk(classcourse.CourseId)
                    .then(async (course) => {
                      await classcourse
                        .getClassDetails()
                        .then(async (classdetails) => {
                          // console.log(classdetails);
                          await Teachers.findByPk(classcourse.TeacherId)
                            .then((teacher) => {
                              classcourse.setDataValue(
                                "ClassDetails",
                                classdetails
                              );
                              classcourse.setDataValue("Teacher", teacher);
                              course.setDataValue("ClassCourse", classcourse);
                              listCourses.push(course);
                            })
                            .catch((err) => {});
                        })
                        .catch((err) => {});
                    })
                    .catch((err) => {});
                })
                .catch((err) => {});
            })
          );
          return res.status(200).send({ success: true, listCourses });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy các lớp",
            err,
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy sinh viên",
        err,
      });
    });
};

const sendEmail = async (req, res) => {
  const { email } = req.body;
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "locit2000@gmail.com", 
      pass: "0981074090", 
    },
  });
  let newpass = (Math.random() + 1).toString(36).substring(7);
  var mailOptions = {
    from: "locit2000@gmail.com",
    to: email,
    subject: "Reset Password ",
    html: `<p>Mật khẩu mới của bạn là:${newpass}</p>`,
  };
  bcrypt.hash(newpass, 10).then(async (hash) => {
    await Students.update({ password: hash }, { where: { email: email } })
      .then((result) => {
       if(result>0){
        mail.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(400).json({
              success: false,
              err: error,
              message: "Vui Lòng Nhập Lại Email",
            });
          } else {
            return res.status(200).json({
              success: true,
              newpass: newpass,
              message: "Vui Lòng Kiểm Tra Email Của Bạn",
              result,
            });
          }
        });
       }else{
        return res.status(400).json({
          success: false,
          message:"Thất bại",
          err: error,
        });
       }
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          err: err,
          message:"Email Không Tồn Tại"
        });
      });
  });
};

module.exports = {
  getSciences,
  createStudent,
  updateStudent,
  forgotPassword,
  deleteStudent,
  getClasses,
  getStudent,
  sendEmail,
};
