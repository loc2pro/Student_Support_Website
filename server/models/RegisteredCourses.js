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
    RegisteredCourses.associate = (models) => {
        RegisteredCourses.hasMany(models.Students, {
            onDelete: "cascade",
        });
        RegisteredCourses.hasMany(models.Courses, {
            onDelete: "cascade",
        });
    };
    return RegisteredCourses;
};