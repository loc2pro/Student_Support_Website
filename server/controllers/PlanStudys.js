const { PlanStudys, Majors } = require("../models");

const createPlanStudy = async (req, res) => {
  const { tenkehoach, majorId } = req.body;
  const planstudy = await PlanStudys.findOne({ where: { MajorId: majorId } });
      if(planstudy){
       return res.json({
          success: false,
          message: "Ngành Đã Được Tạo Kế Hoạch !",
        });
    }
    await PlanStudys.create({
      tenkehoach: tenkehoach,
      MajorId: majorId,
    })
      .then((result) => {
        res.json({
          success: true,
          message: "Tạo kế hoạch thành công!",
          result,
        });
      })
      .catch((err) => {
        res.json({ success: false, message: "Tạo kế hoạch thất bại!1", err });
      });
};

const getPlanStudy = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await PlanStudys.findOne({ where: { id: id } })
    .then((planstudy) => {
      planstudy
        .getSemesters()
        .then((semessters) => {
          res.json({ success: true, planstudy, semessters });
        })
        .catch((err) => {
          res.json({ success: true, planstudy });
        });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
};

const updatePlanStudy = async (req, res) => {
  const { tenkehoach, id } = req.body;
  await PlanStudys.update({ tenkehoach: tenkehoach }, { where: { id: id } })
    .then(async (result) => {
      if (result > 0) {
        PlanStudys.findOne({ where: { id: id } })
          .then((planstudy) => {
            res.json({
              success: true,
              message: "Update kế hoạch thành công!",
              planstudy,
            });
          })
          .catch((err) => {
            res.json({
              success: false,
              message: "Update kế hoạch thất bại !",
              err,
            });
          });
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, message: "update PlanStudy failer", err });
    });
};

const deletePlanStudy = async (req, res) => {
  const id = req.params.id;
  await PlanStudys.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Delete PlanStudy success",
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Delete PlanStudy failer",
        err: err,
      });
    });
};
const getListPlanStudys = async (req, res) => {
  await PlanStudys.findAll()
    .then((planstudys) => {
      res.json({
        success: true,
        message: "Lấy thành công danh sách kế hoạch học tập",
        planstudys,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Lấy kế hoạch học tập thất bại.",
        error,
      });
    });
};

const getPlanStudyByMajor = async (req, res) => {
  const id = req.params.id;
  await Majors.findByPk(id)
    .then((major) => {
      major
        .getPlanStudys()
        .then((planstudys) => {
          res.json({ success: true, major, planstudys });
        })
        .catch((err) => {
          res.json({
            success: false,
            message: "Lấy kế hoạch học tập của khoa thất bại",
            major,
          });
        });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Lấy kế hoạch học tập của khoa thất bại",
        err,
      });
    });
};

module.exports = {
  createPlanStudy,
  getPlanStudy,
  updatePlanStudy,
  deletePlanStudy,
  getListPlanStudys,
  getPlanStudyByMajor,
};
