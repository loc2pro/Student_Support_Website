const { Majors, Students } = require("../models");

const createMajor = async(req, res) => {
    const { manganh, tennganh, ScienceId } = req.body;
    await Majors.create({
            manganh: manganh,
            tennganh: tennganh,
            ScienceId: ScienceId,
        })
        .then((newMajor) => {
            res.json({
                success: true,
                message: `Thêm nghành ${tennganh} thành công.`,
                newMajor,
            });
        })
        .catch((err) => {
            res.json({ success: false, err });
        });
};

const getMajors = async(req, res) => {
    await Majors.findAll({ include: [Students] })
        .then((Majors) => {
            res.status(200).json({
                success: true,
                message: "Lấy danh sách nghành thành công",
                Majors,
            });
        })
        .catch((err) => {
            console.log({ err });
        });
};

const getMajorsByScience = async(req, res) => {
    await Majors.findAll({ where: { ScienceId: req.params.id } })
        .then((Majors) => {
            res.status(200).json({
                success: true,
                message: "Lấy danh sách nghành thành công",
                Majors,
            });
        })
        .catch((err) => {
            console.log({ err });
        });
};
const getMajorsId = async(req, res) => {
    const MajorsId = req.params.MajorsId;

    await Majors.findOne({ where: { id: MajorsId } })
        .then((Majors) => {
            res.send(Majors);
        })
        .catch((err) => {
            console.log({ err });
        });
};

const updateMajor = async(req, res) => {
    const { manganh, tennganh, ScienceId, id } = req.body;
    await Majors.update({
            manganh: manganh,
            tennganh: tennganh,
            ScienceId: ScienceId,
        }, { where: { id: id } })
        .then(async(result) => {
            await Majors.findByPk(id)
                .then((Major) => {
                    res.status(200).json({
                        success: true,
                        message: `Update Major ${tennganh} success`,
                        Major,
                    });
                })
                .catch((err) => {});
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "update Major failer", err });
        });
};

const deleteMajor = async(req, res) => {
    const id = req.params.id;
    await Majors.destroy({ where: { id: id } })
        .then((result) => {
            if (result > 0) {
                res.status(200).json({
                    success: true,
                    message: "Xóa thành công",
                    id,
                });
            } else {
                res.status(200).json({
                    success: false,
                    message: "Nghành không tồn tại",
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Delete Major failer",
                err: err,
            });
        });
};

module.exports = {
    createMajor,
    getMajors,
    getMajorsId,
    updateMajor,
    deleteMajor,
    getMajorsByScience,
};