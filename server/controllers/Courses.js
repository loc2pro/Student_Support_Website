const { Courses } = require("../models");

const createCourse = async (req, res) => {
  const { mahocphan, tenhocphan, sotinchi, sotiet, semesterId } = req.body;
  await Courses.create({
    mahocphan: mahocphan,
    tenhocphan: tenhocphan,
    sotinchi: sotinchi,
    sotiet: sotiet,
    SemesterId: semesterId,
  })
    .then((newcourse) => {
      res.json({
        success: true,
        message: "Tạo Môn Học Thành Công",
        newcourse,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Tạo Môn Học Thất Bại",
        err,
      });
    });
};

const RegisteredCourse = async (req, res) => {
  console.log(req.query.courseIds);
  const courseIds = req.query.courseIds.split(";");
  console.log(courseIds);
};

const getCourses = async (req, res) => {
  await Courses.findAll()
    .then((courses) => {
      res.json({
        success: true,
        message: "Lấy Thành Công Danh Sách Môn Học",
        courses,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Lấy Danh Sách Môn Học Thất Bại",
        err,
      });
    });
};
const getCoursesId = async (req, res) => {
  const coursesId = req.params.coursesId;

  await Courses.findOne({ where: { id: coursesId } })
    .then((courses) => {
      res.send(courses);
    })
    .catch((err) => {
      console.log({ err });
    });
};

//input: id của học phần - courseId
const getClassCourses = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    await Courses.findByPk(courseId)
      .then(async (course) => {
        await course
          .getClassCourses()
          .then((classcourses) => {
            res.status(200).json({ success: true, classcourses });
          })
          .catch((err) => {
            res.status(400).json({
              success: false,
              message: "Không tìn thấy lớp học nào của môn học",
            });
          });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ success: false, message: "Không tìn thấy học phần" });
      });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const updateCourse = async (req, res) => {
  const { mahocphan, tenhocphan, sotinchi, sotiet, semesterId, id } = req.body;
  await Courses.update(
    {
      mahocphan: mahocphan,
      tenhocphan: tenhocphan,
      sotinchi: sotinchi,
      sotiet: sotiet,
      SemesterId: semesterId,
    },
    { where: { id: id } }
  )
    .then(async (result) => {
      if (result > 0) {
        await Courses.findOne({ where: { id: id } })
          .then((course) => {
            res.json({
              success: true,
              message: `Cập nhật môn học ${tenhocphan} thành công`,
              course,
            });
          })
          .catch((err) => {
            res.json({
              success: false,
              message: "Cập nhật môn học thất bại",
              err,
            });
          });
      }
    })
    .catch((err) => {
      res.json({ success: false, message: "Cập nhật môn học thất bại", err });
    });
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  await Courses.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Delete Course success",
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Delete Course failer",
        err: err,
      });
    });
};

module.exports = {
  createCourse,
  RegisteredCourse,
  getCourses,
  getCoursesId,
  getClassCourses,
  updateCourse,
  deleteCourse,
};
