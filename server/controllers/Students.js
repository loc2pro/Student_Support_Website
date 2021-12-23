require("dotenv").config();
const Sciences = require("../models/Sciences");
const { Students, ClassCourses, Courses, Teachers } = require("../models");
const bcrypt = require("bcrypt");
const env = "ACCESS_TOKEN_SECRET";
const config = require(__dirname + "/../config/config.json")[env];
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const xlsx = require("xlsx");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const multer = require("multer");
const upload = multer();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

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

// const createStudent = async (req, res) => {
//   const { mssv, name, password, email, dateOfBirth, address, MajorId } =
//     req.body;

//   bcrypt.hash(password, 10).then(async (hash) => {
//     await Students.create({
//       mssv: mssv,
//       name: name,
//       password: hash,
//       email: email,
//       dateOfBirth: dateOfBirth,
//       address: address,
//       MajorId: MajorId,
//     })
//       .then((newsudent) => {
//         res.status(200).json({
//           success: true,
//           message: "Create student success",
//           newsudent,
//         });
//       })
//       .catch((err) => {
//         res
//           .status(400)
//           .json({ success: false, message: "Create student failer", err });
//       });
//   });
// };

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
  const id = req.params.id;
  await Students.destroy({ where: { id: id } })
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          success: true,
          message: "Delete student success",
          result,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Delete student failer",
          result,
        });
      }
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
      user: process.env.EMAIL_ID,
      pass: process.env.PASSWORD,
    },
  });
  let newpass = (Math.random() + 1).toString(36).substring(7);
  var mailOptions = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: "Reset Password ",
    html: `<p>Mật khẩu mới của bạn là:${newpass}</p>`,
  };
  bcrypt.hash(newpass, 10).then(async (hash) => {
    await Students.update({ password: hash }, { where: { email: email } })
      .then((result) => {
        if (result > 0) {
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
        } else {
          return res.status(400).json({
            success: false,
            message: "Thất bại",
            err: error,
          });
        }
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          err: err,
          message: "Email Không Tồn Tại",
        });
      });
  });
};
//admin
const getStudents = async (req, res) => {
  await Students.findAll()
    .then((students) => {
      res.status(200).json({ success: true, students });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};

const getListStudentsByMajor = async (req, res) => {
  await Students.findAll({ where: { MajorId: req.params.id } })
    .then((students) => {
      res.status(200).json({ success: true, students });
    })
    .catch((err) => {
      res.status(200).json({ success: false, err });
    });
};

const createStudent = async (req, res) => {
  const { name, khoa, email, dateOfBirth, address, MajorId, PlanStudyId } =
    req.body;
  console.log(req.body);
  const file = req.file;
  let myFile = req.file.originalname.split(".");
  const fileTyle = myFile[myFile.length - 1];

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileTyle}`,
    Body: req.file.buffer,
    ContentType: "image/png",
  };
  // mới tạo mặc đinh pass là 1-8
  bcrypt.hash("12345678", 10).then(async (hash) => {
    await Students.create({
      name: name,
      mssv: khoa,
      khoa: khoa,
      password: hash,
      image: params.Key,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address,
      MajorId: MajorId,
      PlanStudyId: PlanStudyId,
    })
      .then(async (newstudent) => {
        let mssv = newstudent.khoa;
        while (mssv + newstudent.id < 10000000) {
          mssv = mssv * 10;
        }
        mssv = mssv + newstudent.id;
        await Students.update(
          {
            mssv: mssv,
          },
          { where: { id: newstudent.id } }
        )
          .then(async (result1) => {
            await Students.findByPk(newstudent.id)
              .then((result) => {
                s3.upload(params, upload.fields([]), (error, data) => {
                  if (error) {
                    console.log(error.message);
                    return res.status(500).json({
                      success: false,
                      message: "Upload hình sinh viên thất bại",
                    });
                  }
                  return res.status(200).json({
                    success: true,
                    message: "Tạo sinh viên thành công",
                    result,
                  });
                });
              })
              .catch((err) => {
                return res.status(200).json({
                  success: false,
                  message: "Create student failer1",
                  err,
                });
              });
          })
          .catch((err) => {
            return res
              .status(200)
              .json({ success: false, message: "Create student failer2", err });
          });
      })
      .catch((err) => {
        return res
          .status(200)
          .json({ success: false, message: "Create student failer", err });
      });
  });
};

const createStudentByExcel = async (req, res) => {
  const { data, MajorId } = req.body;
  if (data.length < 1) {
    return res.json({
      success: false,
      message: "Không có sinh viên nào cần thêm",
    });
  }
  if (!MajorId) {
    return res.json({ success: false, message: "Vui lòng chọn nghành" });
  }
  await bcrypt
    .hash("12345678", 10)
    .then(async (hash) => {
      let soluong = 0;
      await Promise.all(
        await data.map(async (st) => {
          await Students.create({
            name: st.name,
            mssv: st.khoa,
            khoa: st.khoa,
            password: hash,
            email: st.email,
            dateOfBirth: st.dateOfBirth,
            address: st.address,
            MajorId: MajorId,
          })
            .then(async (newstudent) => {
              let mssv = newstudent.khoa;
              while (mssv + newstudent.id < 10000000) {
                mssv = mssv * 10;
              }
              mssv = mssv + newstudent.id;
              await Students.update(
                {
                  mssv: mssv,
                },
                { where: { id: newstudent.id } }
              )
                .then(async (result1) => {
                  if (result1 > 0) await soluong++;
                })
                .catch((err) => {
                  console.log(soluong);
                  return res.json({
                    success: false,
                    message: `Thêm thành công ${soluong} sinh viên.`,
                  });
                });
            })
            .catch((err) => {
              console.log("soluong", soluong);
              return res.json({
                success: false,
                message: `Thêm thành công ${soluong} sinh viên.`,
                err,
              });
            });
        })
      )
        .then((result) => {})
        .catch((err) => {});
      return res.json({
        success: true,
        message: `Thêm thành công ${data.length} vào danh sách sinh viên`,
      });
    })
    .catch((err) => {});
};
const updateStudentAdmin = async (req, res) => {
  const { name, email, dateOfBirth, address, id } = req.body;
  await Students.update(
    {
      name: name,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address,
    },
    { where: { id: id } }
  )
    .then(async (result) => {
      await Students.findOne({ where: { id: id } })

        .then((student) => {
          return res.status(200).json({
            success: true,
            message: `Update student ${name} success`,
            student,
          });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      return res
        .status(200)
        .json({ success: false, message: "update student failer", err });
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
  createStudentByExcel,
  getStudents,
  getListStudentsByMajor,
  updateStudentAdmin,
  sendEmail,
};
