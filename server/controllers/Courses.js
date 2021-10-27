const { Courses } = require("../models");

const createCourse = async(req, res) => {
    const { mahocphan, tenhocphan, sotinchi, sotiet, semesterId } = req.body;
    await Courses.create({
            mahocphan: mahocphan,
            tenhocphan: tenhocphan,
            sotinchi: sotinchi,
            sotiet: sotiet,
            SemesterId: semesterId,
        })
        .then((newcourse) => {
            res.json(newcourse);
        })
        .catch((err) => {});
};

const RegisteredCourse = async(req, res) => {
    console.log(req.query.courseIds);
    const courseIds = req.query.courseIds.split(";");
    console.log(courseIds);
};

const getCourses = async(req, res) => {
    await Courses.findAll()
        .then((courses) => {
            res.send(courses);
        })
        .catch((err) => {
            console.log({ err });
        });
};
const getCoursesId = async(req, res) => {
    const coursesId = req.params.coursesId;

    await Courses.findOne({ where: { id: coursesId } })
        .then((courses) => {
            res.send(courses);
        })
        .catch((err) => {
            console.log({ err });
        });
};

module.exports = { createCourse, RegisteredCourse, getCourses, getCoursesId };