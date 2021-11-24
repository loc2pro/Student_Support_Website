const { Learns, RegistersCourses } = require("../models");

const createLearn = async (req, res) => {
  const {
    diemquatrinh,
    diemgiuaky,
    diemcuoiky,
    ClassCourseId,
    RegistersCourseId,
    StudentId,
  } = req.body;
  await Learns.create({
    diemquatrinh: diemquatrinh,
    diemgiuaky: diemgiuaky,
    diemcuoiky: diemcuoiky,
    RegistersCourseId: RegistersCourseId,
    ClassCourseId: ClassCourseId,
    StudentId: StudentId,
  })
    .then((newLearn) => {
      res.json({ success: true, newLearn });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
};

const getLearns = async (req, res) => {
  await Learns.findAll()
    .then((Learns) => {
      res.json(Learns);
    })
    .catch((err) => {
      console.log({ err });
    });
};
const getLearnsId = async (req, res) => {
  const LearnsId = req.params.LearnsId;

  await Learns.findOne({ where: { id: LearnsId } })
    .then((Learns) => {
      res.send(Learns);
    })
    .catch((err) => {
      console.log({ err });
    });
};

const updateLearn = async (req, res) => {
  const {
    diemquatrinh3,
    diemquatrinh1,
    diemquatrinh2,
    diemgiuaky,
    diemcuoiky,
    id,
  } = req.body;
  await Learns.update(
    {
      diemquatrinh1: diemquatrinh1,
      diemquatrinh2: diemquatrinh2,
      diemquatrinh3: diemquatrinh3,
      diemgiuaky: diemgiuaky,
      diemcuoiky: diemcuoiky,
    },
    { where: { id: id }, returning: true, plain: true }
  )
    .then(async (result) => {
      await Learns.findByPk(id)
        .then(async (learn) => {
          const tongdiem =
            ((learn.diemquatrinh1 + learn.diemquatrinh2 + learn.diemquatrinh3) /
              3) *
              0.2 +
            learn.diemgiuaky * 0.3 +
            learn.diemcuoiky * 0.5;
          await RegistersCourses.update(
            {
              tongdiem: tongdiem,
            },
            { where: { id: learn.RegistersCourseId } }
          )
            .then((result) => {
              res.status(200).json({
                success: true,
                message: "update Learn success",
                result,
              });
            })
            .catch((err) => {
              res.status(400).json({
                success: false,
                message: "Cập nhập điểm tổng thất bại",
                err,
              });
            });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({ success: false, message: "update Learn failer", err });
    });
};

const deleteLearn = async (req, res) => {
  const id = req.params.id;
  await Learns.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Delete Learn success",
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Delete Learn failer",
        err: err,
      });
    });
};

//Lấy điểm all theo học kỳ.
//input: SemesterId và StudentId
const getLearnsbySemesters = async (req, res) => {
  const { SemesterId, StudentId } = req.body;
  if (!SemesterId) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng chọn học kỳ cần xem!" });
  }
  if (!StudentId) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng chọn sinh viên cần xem!" });
  }
  await RegistersCourses.findAll({
    SemesterId: SemesterId,
    StudentId: StudentId,
  })
    .then(async (registerCourses) => {
      let listCourses = [];
      await Promise.all(
        registerCourses.map(async (register) => {
          await register
            .getCourse()
            .then(async (course) => {
              await register
                .getLearn()
                .then((learn) => {
                  course.setDataValue("diemmonhoc", register.tongdiem);
                  course.setDataValue("learn", learn);
                  listCourses.push(course);
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
      );
      return res.status(200).json({ success: true, listCourses });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Không tìm thấy môn học đăng ký ở học phần này",
        err,
      });
    });
};

module.exports = {
  createLearn,
  getLearns,
  getLearnsId,
  updateLearn,
  deleteLearn,
  getLearnsbySemesters,
};