module.exports = (sequelize, DataTypes) => {
    const CompulsoryCourses = sequelize.define("CompulsoryCourses", {
        iscomplete: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    });
    return CompulsoryCourses;
};