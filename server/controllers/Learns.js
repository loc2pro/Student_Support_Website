const { Learns } = require("../models");

const createLearn = async(req, res) => {
    const {
        diemquatrinh,
        diemgiuaky,
        diemcuoiky,
        ClassCourseId,
        RegistersCourseId,
        StudentId,
    } = req.body;
    await Learns.create({
            diemquatrinh: diemquatrinh,
            diemgiuaky: diemgiuaky,
            diemcuoiky: diemcuoiky,
            RegistersCourseId: RegistersCourseId,
            ClassCourseId: ClassCourseId,
            StudentId: StudentId,
        })
        .then((newLearn) => {
            res.json({ success: true, newLearn });
        })
        .catch((err) => {
            res.json({ success: false, err });
        });
};

const getLearns = async(req, res) => {
    await Learns.findAll()
        .then((Learns) => {
            res.json(Learns);
        })
        .catch((err) => {
            console.log({ err });
        });
};
const getLearnsId = async(req, res) => {
    const LearnsId = req.params.LearnsId;

    await Learns.findOne({ where: { id: LearnsId } })
        .then((Learns) => {
            res.send(Learns);
        })
        .catch((err) => {
            console.log({ err });
        });
};

const updateLearn = async(req, res) => {
    const {
        diemquatrinh,
        diemgiuaky,
        diemcuoiky,
        ClassCourseId,
        RegistersCourseId,
        StudentId,
        id,
    } = req.body;
    await Learns.update({
            diemquatrinh: diemquatrinh,
            diemgiuaky: diemgiuaky,
            diemcuoiky: diemcuoiky,
            RegistersCourseId: RegistersCourseId,
            ClassCourseId: ClassCourseId,
            StudentId: StudentId,
        }, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: `Update Learn ${lichhoc} success`,
                result,
            });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "update Learn failer", err });
        });
};

const deleteLearn = async(req, res) => {
    const id = req.params.id;
    await Learns.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Delete Learn success",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Delete Learn failer",
                err: err,
            });
        });
};

module.exports = {
    createLearn,
    getLearns,
    getLearnsId,
    updateLearn,
    deleteLearn,
};