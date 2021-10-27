module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
        magiaovien: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tengiaovien: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    Teachers.associate = (models) => {
        Teachers.hasMany(models.ClassCourses, {
            onDelete: "no action",
        });
    };
    return Teachers;
};