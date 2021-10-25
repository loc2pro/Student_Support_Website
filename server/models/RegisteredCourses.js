module.exports = (sequelize, DataTypes) => {
    const RegisteredCourses = sequelize.define("RegisteredCourses", {
        diemgiuaky: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        diemcuoiky: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });
    return RegisteredCourses;
};