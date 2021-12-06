
const { Semesters } = require("../models");

const createSemester = async (req, res) => {
  const { tenhocky, PlanStudyId } = req.body;
  await Semesters.create({
    tenhocky: tenhocky,
    PlanStudyId: PlanStudyId,
  })
    .then((result) => {
      res.json({ success: true, message: "Tạo học kỳ thành công!", result });
    })
    .catch((err) => {
      res.json({ success: false, message: "Tạo học kỳ thất bại!", err });
    });
};

const updateSemester = async (req, res) => {
  const { tenhocky, id, PlanStudyId } = req.body;
  await Semesters.update(
    {
      tenhocky: tenhocky,
      PlanStudyId: PlanStudyId,
    },
    { where: { id: id } }
  )
    .then(async(result) => {
      if (result > 0) {
       await Semesters.findOne({ where: { id: id } })
          .then((semester) => {
            res.json({
              success: true,
              message: "Sửa học kỳ thành công!",
              semester,
            });
          })
          .catch((err) => {
            res.json({ success: false, message: "Sửa học kỳ thất bại!", err });
          });
      }
    })
    .catch((err) => {
      res.json({ success: false, message: "Sửa học kỳ thất bại!", err });
    });
};

const deleteSemester = async (req, res) => {
  const id = req.params.id;
  await Semesters.destroy({ where: { id: id } })
    .then((result) => {
      res.json({
        success: true,
        message: "Xóa Học Kỳ Thành Công",
        result,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Xóa Học Kỳ Thất Bại",
        err: err,
      });
    });
};

const getSemester = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Semesters.findOne({ where: { id: id } })
    .then((semester) => {
      semester
        .getCourses()
        .then((courses) => {
          res.json({ success: true, semester, courses });
        })
        .catch((err) => {
          res.json({ success: true, semester });
        });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
};
const getListSemester = async (req, res) => {
  await Semesters.findAll()
    .then((semester) => {
      res.json({
        success: true,
        message: "Lấy thành công danh sách học kỳ ",
        semester,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Lấy thất bại danh sách học kỳ ",
        semester,
      });
    });
};

module.exports = {
  createSemester,
  updateSemester,
  getSemester,
  deleteSemester,
  getListSemester,
};
