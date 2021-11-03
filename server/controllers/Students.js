const Sciences = require("../models/Sciences");
const { Students, ClassCourses, Courses, Teachers } = require("../models");
const bcrypt = require("bcrypt");

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
  const { mssv, name, email, dateOfBirth, address } = req.body;
  console.log(req.body);
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
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Update student ${name} success`,
        result,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, message: "update student failer", err });
    });
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

module.exports = {
  getSciences,
  createStudent,
  updateStudent,
  forgotPassword,
  deleteStudent,
  getClasses,
};
