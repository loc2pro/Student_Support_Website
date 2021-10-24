module.exports = (sequelize, DataTypes) => {
    const CompulsoryCourses = sequelize.define("CompulsoryCourses", {
        iscomplete: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    });
    CompulsoryCourses.associate = (models) => {
        CompulsoryCourses.hasMany(models.Students, {
            onDelete: "cascade",
        });
        CompulsoryCourses.hasMany(models.Courses, {
            onDelete: "cascade",
        });
    };
    return CompulsoryCourses;
};