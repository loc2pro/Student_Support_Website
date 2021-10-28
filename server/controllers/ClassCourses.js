const { ClassCourses, Teachers } = require("../models");

//output: classcourseId
//Input: danh sách lịch của lớp học đó
const getClassDetails = async(req, res) => {
    try {
        const classcourseId = req.params.classcourseId;
        await ClassCourses.findOne({ where: { id: classcourseId } })
            .then(async(classcourse) => {
                await classcourse
                    .getClassDetails()
                    .then(async(classdetais) => {
                        await Teachers.findByPk(classcourse.TeacherId)
                            .then((teacher) => {
                                res
                                    .status(200)
                                    .json({ success: true, classcourse, teacher, classdetais });
                            })
                            .catch((err) => {
                                res.status(400).json({
                                    success: false,
                                    message: "Không tìn thấy giáo viên của lớp",
                                    err,
                                });
                            });
                    })
                    .catch((err) => {
                        res.status(400).json({
                            success: false,
                            message: "Không tìn thấy lịch học",
                            err,
                        });
                    });
            })
            .catch((err) => {
                console.log(err);
                res
                    .status(400)
                    .json({ success: false, message: "Không tìn thấy lớp học", err });
            });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

const createClassCourse = async(req, res) => {
    const { malop, tenlop, trangthai, soluong, soluongDK, TeacherId, CourseId } =
    req.body;
    await ClassCourses.create({
            malop: malop,
            tenlop: tenlop,
            trangthai: trangthai,
            soluong: soluong,
            soluongDK: soluongDK,
            TeacherId: TeacherId,
            CourseId: CourseId,
        })
        .then((newClassCourse) => {
            res.json({ success: true, newClassCourse });
        })
        .catch((err) => {
            res.json({ success: false, err });
        });
};

const updateClassCourse = async(req, res) => {
    const {
        malop,
        tenlop,
        trangthai,
        soluong,
        soluongDK,
        TeacherId,
        CourseId,
        id,
    } = req.body;
    await ClassCourses.update({
            malop: malop,
            tenlop: tenlop,
            trangthai: trangthai,
            soluong: soluong,
            soluongDK: soluongDK,
            TeacherId: TeacherId,
            CourseId: CourseId,
        }, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: `Update ClassCourse ${tenhocphan} success`,
                result,
            });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "update ClassCourse failer", err });
        });
};

const deleteClassCourse = async(req, res) => {
    const id = req.params.id;
    await ClassCourses.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Delete ClassCourse success",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Delete ClassCourse failer",
                err: err,
            });
        });
};

module.exports = {
    getClassDetails,
    createClassCourse,
    updateClassCourse,
    deleteClassCourse,
};