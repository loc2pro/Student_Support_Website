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
            console.log(planstudy);
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

module.exports = { createPlanStudy, getPlanStudy };