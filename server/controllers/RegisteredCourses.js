const { RegisteredCourses } = require("../models");

const RegisteredCourse = async(req, res) => {
    const courseIds = req.query.courses.split(";");
    console.log(courseIds);
};

module.exports = { RegisteredCourse };