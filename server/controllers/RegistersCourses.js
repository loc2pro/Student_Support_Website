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

  //Check trùng lịch học
  const classCourse = await ClassCourses.findOne({
    where: { id: ClassCourseId },
  });
  if (classCourse.soluongDK === classCourse.soluong) {
    console.log("Số lượng đăng ksy đầy");
    return res
      .status(400)
      .json({ success: false, message: "Số lượng đăng ký đã đầy." });
  }
  if (classCourse.trangthai != "Mở") {
    return res
      .status(400)
      .json({ success: false, message: "Lớp đã bị đóng, không thể đăng ký" });
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
//Input: RegistersCourseId
const deleteRegisterCourse = async (req, res) => {
  const { CourseId, SemesterId, StudentId } = req.body;
  await RegistersCourses.findOne({
    where: {
      SemesterId: SemesterId,
      CourseId: CourseId,
      StudentId: StudentId,
    },
  })
    .then(async (result) => {
      await Learns.findOne({ where: { RegistersCourseId: result.id } })
        .then(async (Learn) => {
          await ClassCourses.findByPk(Learn.ClassCourseId)
            .then(async (classcourse) => {
              await ClassCourses.update(
                {
                  soluongDK: classcourse.soluongDK - 1,
                },
                { where: { id: classcourse.id } }
              )
                .then(async (update) => {
                  await RegistersCourses.destroy({
                    where: { id: result.id },
                  })
                    .then((result1) => {
                      res.status(200).json({
                        success: true,
                        message: "Hủy học phần thành công.",
                        result,
                      });
                    })
                    .catch((err) => {
                      res.status(400).json({
                        success: false,
                        message: "Hủy thành phần thất bại",
                      });
                      //     });
                    });
                })
                .catch((err) => {
                  return res.status(400).json({
                    success: false,
                    message: "Hủy thành phần thất bại",
                  });
                });
            })
            .catch((err) => {
              return res.status(400).json({
                success: false,
                message: "Hủy thành phần thất bại",
              });
            });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Hủy thành phần thất bại",
      });
    });
};
//Lấy tất cả môn học theo học kỳ đã đăng ký.
//input: SemesterId và StudentId
const getRegisterCourses = async (req, res) => {
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
  console.log(SemesterId);
  await RegistersCourses.findAll({
   where:{ SemesterId: SemesterId,
    StudentId: StudentId,}
  })
    .then(async (registerCourses) => {
      let listCourses = [];
      await Promise.all(
        registerCourses.map(async (register) => {
          await register
            .getCourse()
            .then(async (course) => {
              course.setDataValue("diemmonhoc", register.tongdiem);
              course.setDataValue("trangthai", register.hocphi);
              listCourses.push(course);
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
const DongHocPhi = async (req, res) => {
  const { SemesterId, StudentId } = req.body;
  if (!SemesterId) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng chọn học kỳ cần nộp học phí!",
    });
  }
  if (!StudentId) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng chọn sinh viên cần nộp học phí!",
    });
  }
  await RegistersCourses.findAll({
    SemesterId: SemesterId,
    StudentId: StudentId,
  })
    .then(async (registerCourses) => {
      await Promise.all(
        registerCourses.map(async (register) => {
          await RegistersCourses.update(
            {
              hocphi: true,
            },
            { where: { id: register.id } }
          )
            .then((result) => {})
            .catch((err) => {});
        })
      );
      return res.json({ success: true, message: "Nộp học phí thành công!" });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Không tìm thấy môn học đăng ký ở học kỳ này",
        err,
      });
    });
};

module.exports = {
  CourseRegistration,
  deleteRegisterCourse,
  getRegisterCourses,
  DongHocPhi,
};
