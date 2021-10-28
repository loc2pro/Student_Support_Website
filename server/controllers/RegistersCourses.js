const { RegistersCourses, Learns } = require("../models");

//Đăng ký môn học
//Input: CourseId , SemesterId, StudentId,ClassCourseId
const CourseRegistration = async(req, res) => {
    const { CourseId, SemesterId, StudentId, ClassCourseId } = req.body;
    await RegistersCourses.create({
            tongdiem: 0,
            SemesterId: SemesterId,
            CourseId: CourseId,
            StudentId: StudentId,
        })
        .then(async(registerCourse) => {
            await Learns.create({
                    ClassCourseId: ClassCourseId,
                    StudentId: StudentId,
                    RegistersCourseId: registerCourse.id,
                })
                .then((learn) => {
                    res.status(200).json({
                        success: true,
                        message: "Đăng ký học phần thành công!",
                        registerCourse,
                        learn,
                    });
                })
                .catch((err) => {
                    res.status(200).json({
                        success: false,
                        message: "Đăng ký học phần thất bại 1!",
                        registerCourse,
                    });
                });
        })
        .catch((err) => {
            res.status(200).json({
                success: false,
                message: "Đăng ký học phần thật bại",
            });
        });
};
//Đăng ký môn học
//Input: RegistersCourseId
const deleteRegisterCourse = async(req, res) => {
    const id = req.params.id;
    await RegistersCourses.destroy({ where: { id: id } })
        .then((result) => {
            res
                .status(200)
                .json({ success: true, message: "Xóa thành đăng ký thành công." });
        })
        .catch((err) => {
            res
                .status(400)
                .json({ success: false, message: "Xóa thành đăng ký thất bại" });
        });
};

module.exports = { CourseRegistration, deleteRegisterCourse };