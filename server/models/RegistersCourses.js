module.exports = (sequelize, DataTypes) => {
    const RegistersCourses = sequelize.define("RegistersCourses", {
        tongdiem: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    });

    RegistersCourses.associate = (models) => {
        RegistersCourses.hasOne(models.Courses, {
            onDelete: "no action",
        });
    };
    RegistersCourses.associate = (models) => {
        RegistersCourses.belongsTo(models.Semesters, {
            onDelete: "no action",
        });
        RegistersCourses.hasOne(models.Learns, {
            onDelete: "no action",
        });
    };

    return RegistersCourses;
};