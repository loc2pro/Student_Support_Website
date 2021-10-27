module.exports = (sequelize, DataTypes) => {
    const RegistersCourses = sequelize.define("RegistersCourses", {
        tongdiem: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    });

    RegistersCourses.associate = (models) => {
        RegistersCourses.hasOne(models.Courses, {
            onDelete: "cascade",
        });
    };
    RegistersCourses.associate = (models) => {
        RegistersCourses.belongsTo(models.Semesters, {
            onDelete: "cascade",
        });
        RegistersCourses.hasOne(models.Learns, {
            onDelete: "cascade",
        });
    };

    return RegistersCourses;
};