const Sciences = require("../models/Sciences");
const { Students } = require("../models");

const getSciences = async(req, res) => {
    const studentId = req.params.studentId;
    console.log(studentId);
    await Students.findOne({ where: { id: studentId } })
        .then(async(student) => {
            console.log("student tim được:", student);
            await student.getMajor().then(async(marjor) => {
                await marjor.getScience().then((sciences) => {
                    res.json({ student, marjor, sciences });
                });
            });
        })
        .catch((err) => {});
};

module.exports = { getSciences };