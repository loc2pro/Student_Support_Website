const { Semesters } = require("../models");

const createSemester = async(req, res) => {
    const { tenhocky, planstudyId } = req.body;
    await Semesters.create({
            tenhocky: tenhocky,
            PlanStudyId: planstudyId,
        })
        .then((result) => {
            res
                .status(200)
                .json({ success: true, message: "Tạo học kỳ thành công!", result });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "Tạo học kỳ thất bại!", err });
        });
};

const updateSemester = async(req, res) => {
    const { tenhocky, id, planstudyId } = req.body;
    await Semesters.update({
            tenhocky: tenhocky,
            PlanStudyId: planstudyId,
        }, { where: { id: id } })
        .then((result) => {
            res
                .status(200)
                .json({ success: true, message: "Sửa học kỳ thành công!", result });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "Sửa học kỳ thất bại!", err });
        });
};

const deleteSemester = async(req, res) => {
    const id = req.params.id;
    await Semesters.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Delete Semester success",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Delete Semester failer",
                err: err,
            });
        });
};

const getSemester = async(req, res) => {
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

module.exports = {
    createSemester,
    updateSemester,
    getSemester,
    deleteSemester,
};