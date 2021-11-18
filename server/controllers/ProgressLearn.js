const { ProgressLearn } = require("../models");

const getProgressLearn = async (req, res) => {
  const  id  = req.params.id;
  await ProgressLearn.findOne({ where: { StudentId: id } })
    .then((progress) => {
      res.status(200).json({
        success: true,
        progress,
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};
module.exports = {
  getProgressLearn,
};
