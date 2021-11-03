const { ClassDetails } = require("../models");

const createClassDetail = async(req, res) => {
    const { lichhoc, coso, daynha, phong, ClassCourseId } = req.body;
    await ClassDetails.create({
            lichhoc: lichhoc,
            coso: coso,
            daynha: daynha,
            phong: phong,
            ClassCourseId: ClassCourseId,
        })
        .then((newClassDetail) => {
            res.json({ success: true, newClassDetail });
        })
        .catch((err) => {
            res.json({ success: false, err });
        });
};

const getClassDetails = async(req, res) => {
    await ClassDetails.findAll()
        .then((ClassDetails) => {
            res.json(ClassDetails);
        })
        .catch((err) => {
            console.log({ err });
        });
};
const getClassDetailsId = async(req, res) => {
    const ClassDetailsId = req.params.ClassDetailsId;

    await ClassDetails.findOne({ where: { id: ClassDetailsId } })
        .then((ClassDetails) => {
            res.send(ClassDetails);
        })
        .catch((err) => {
            console.log({ err });
        });
};

const updateClassDetail = async(req, res) => {
    const { lichhoc, coso, daynha, phong, ClassCourseId, id } = req.body;
    await ClassDetails.update({
            lichhoc: lichhoc,
            coso: coso,
            daynha: daynha,
            phong: phong,
            ClassCourseId: ClassCourseId,
        }, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: `Update ClassDetail ${lichhoc} success`,
                result,
            });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "update ClassDetail failer", err });
        });
};

const deleteClassDetail = async(req, res) => {
    const id = req.params.id;
    await ClassDetails.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Delete ClassDetail success",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Delete ClassDetail failer",
                err: err,
            });
        });
};

module.exports = {
    createClassDetail,
    getClassDetails,
    getClassDetailsId,
    updateClassDetail,
    deleteClassDetail,
};