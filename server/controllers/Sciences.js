const { Sciences, Majors } = require("../models");
const createScience = async(req, res) => {
    const { makhoa, tenkhoa } = req.body;
    await Sciences.create({
            makhoa: makhoa,
            tenkhoa: tenkhoa,
        })
        .then(async(result) => {
            await Sciences.findOne({ where: { id: result.id }, include: [Majors] })
                .then((science) => {
                    res
                        .status(200)
                        .json({ success: true, message: "Thêm khoa thành công!", science });
                })
                .catch((err) => {});
        })
        .catch((err) => {
            res
                .status(200)
                .json({ success: false, message: "Thêm khoa thất bại!", err });
        });
};

const updateScience = async(req, res) => {
    const { makhoa, tenkhoa, id } = req.body;
    await Sciences.update({
            makhoa: makhoa,
            tenkhoa: tenkhoa,
        }, { where: { id: id } })
        .then(async(result) => {
            await Sciences.findByPk(id)
                .then((science) => {
                    res.status(200).json({
                        success: true,
                        message: `Update ${tenkhoa} thành công!`,
                        science,
                    });
                })
                .catch((err) => {});
        })
        .catch((err) => {
            res.status(200).json({
                success: false,
                message: `Update khoa ${tenkhoa} thất bại!`,
                err,
            });
        });
};

const deleteScience = async(req, res) => {
    const id = req.params.id;
    await Sciences.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: `Xóa khoa thành công`,
                id,
            });
        })
        .catch((err) => {
            res.status(200).json({
                success: false,
                message: "Xóa khoa thất bại",
                err: err,
            });
        });
};

const getScience = async(req, res) => {
    const id = req.params.id;
    await Sciences.findOne({ where: { id: id } })
        .then((science) => {
            res
                .status(200)
                .json({ success: true, message: "Lấy khoa thành công!", science });
        })
        .catch((err) => {
            res
                .status(200)
                .json({ success: false, message: "Lấy khoa thất bại", err });
        });
};

const getListSciences = async(req, res) => {
    await Sciences.findAll({ include: [Majors] })
        .then((sciences) => {
            res.status(200).json({
                success: true,
                message: "Lấy danh sách khoa thành công!",
                sciences,
            });
        })
        .catch((err) => {
            res
                .status(200)
                .json({ success: false, message: "Lấy danh sách khoa thất bại", err });
        });
};

module.exports = {
    createScience,
    updateScience,
    deleteScience,
    getListSciences,
    getScience,
};