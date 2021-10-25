const { Courses } = require("../models");

const createCourse = async(req, res) => {
    const { mahocphan, tenhocphan, sotinchi, sotiet } = req.body;
    await Courses.create({
            mahocphan: mahocphan,
            tenhocphan: tenhocphan,
            sotinchi: sotinchi,
            sotiet: sotiet,
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
        .catch((err) => {});
};

module.exports = { createCourse, RegisteredCourse, getCourses };