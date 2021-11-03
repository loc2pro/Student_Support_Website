const {
  RegistersCourses,
  Learns,
  Students,
  ClassCourses,
} = require("../models");

//Đăng ký môn học
//Input: CourseId , SemesterId, StudentId,ClassCourseId

const CourseRegistration = async (req, res) => {
  const { CourseId, SemesterId, StudentId, ClassCourseId } = req.body;
  if (!CourseId) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng chọn môn học cần đăng ký!",
    });
  }
  if (!SemesterId) {
    return res
      .status(400)
      .json({ success: false, message: "Vui lòng chọn học kỳ cần đăng ký!" });
  }
  if (!StudentId) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng chọn học sinh cần đăng ký!",
    });
  }
  if (!ClassCourseId) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng chọn lớp học cần đăng ký!",
    });
  }

  const register = await RegistersCourses.findOne({
    where: { StudentId: StudentId, CourseId: CourseId },
  });
  if (register) {
    return res.status(400).json({
      success: false,
      message: "Môn này đã được đăng ký",
    });
  }
  await RegistersCourses.create({
    tongdiem: 0,
    SemesterId: SemesterId,
    CourseId: CourseId,
    StudentId: StudentId,
  })
    .then(async (registerCourse) => {
      await Learns.create({
        ClassCourseId: ClassCourseId,
        StudentId: StudentId,
        RegistersCourseId: registerCourse.id,
      })
        .then(async (learn) => {
          const classCourse = await ClassCourses.findByPk(ClassCourseId);
          await ClassCourses.update(
            {
              soluongDK: classCourse.soluongDK + 1,
            },
            { where: { id: ClassCourseId } }
          )
            .then((result) => {
              res.status(200).json({
                success: true,
                message: "Đăng ký môn thành công",
                registerCourse,
              });
            })
            .catch((err) => {});
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
            message: "Đăng ký học phần thất bại 1!",
            registerCourse,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Đăng ký học phần thật bại",
      });
    });
};
//Xóa môn học
//Input: RegistersCourseId
const deleteRegisterCourse = async (req, res) => {
  const id = req.params.id;
  await RegistersCourses.destroy({ where: { id: id } })
    .then((result) => {
      res
        .status(200)
        .json({ success: true, message: "Xóa thành đăng ký thành công." });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, message: "Xóa thành đăng ký thất bại" });
    });
};

module.exports = { CourseRegistration, deleteRegisterCourse };
