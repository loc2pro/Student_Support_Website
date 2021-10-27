module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("Courses", {
        mahocphan: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tenhocphan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sotinchi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sotiet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Courses.associate = (model) => {
        Courses.hasMany(model.ClassCourses, {
            onDelete: "cascade",
        });
        Courses.belongsTo(model.RegistersCourses, {
            onDelete: "no action",
        });
    };
    return Courses;
};