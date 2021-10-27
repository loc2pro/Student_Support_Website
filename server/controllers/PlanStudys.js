const { PlanStudys } = require("../models");

const createPlanStudy = async(req, res) => {
    const { tenkehoach, majorId } = req.body;
    await PlanStudys.create({
            tenkehoach: tenkehoach,
            MajorId: majorId,
        })
        .then((result) => {
            res
                .status(200)
                .json({ success: true, message: "Tạo kế hoạch thành công!", result });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "Tạo kế hoạch thất bại!", err });
        });
};

const getPlanStudy = async(req, res) => {
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

const updatePlanStudy = async(req, res) => {
    const { tenkehoach, id } = req.body;
    await PlanStudys.update({ tenkehoach: tenkehoach }, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: `Update PlanStudy ${tenkehoach} success`,
                result,
            });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "update PlanStudy failer", err });
        });
};

const deletePlanStudy = async(req, res) => {
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

module.exports = {
    createPlanStudy,
    getPlanStudy,
    updatePlanStudy,
    deletePlanStudy,
};