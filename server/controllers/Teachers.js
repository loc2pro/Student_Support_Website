const { Teachers } = require("../models");

const createTeacher = async (req, res) => {
  const { magiaovien, tengiaovien, email } = req.body;
  await Teachers.create({
    magiaovien: magiaovien,
    tengiaovien: tengiaovien,
    email: email,
  })
    .then((newTeacher) => {
      res.json({ success: true, newTeacher });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
};

const getTeachers = async (req, res) => {
  await Teachers.findAll()
    .then((Teachers) => {
      res.json(Teachers);
    })
    .catch((err) => {
      console.log({ err });
    });
};
const getTeachersId = async (req, res) => {
  const TeachersId = req.params.TeachersId;

  await Teachers.findOne({ where: { id: TeachersId } })
    .then((Teachers) => {
      res.json(Teachers);
    })
    .catch((err) => {
      console.log({ err });
    });
};

const updateTeacher = async (req, res) => {
  const { magiaovien, tengiaovien, email, id } = req.body;
  await Teachers.update(
    {
      magiaovien: magiaovien,
      tengiaovien: tengiaovien,
      email: email,
    },
    { where: { id: id } }
  )
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Update Teacher ${tengiaovien} success`,
        result,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, message: "update Teacher failer", err });
    });
};

const deleteTeacher = async (req, res) => {
  const id = req.params.id;
  await Teachers.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Delete Teacher success",
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Delete Teacher failer",
        err: err,
      });
    });
};

module.exports = {
  createTeacher,
  getTeachers,
  getTeachersId,
  updateTeacher,
  deleteTeacher,
};
