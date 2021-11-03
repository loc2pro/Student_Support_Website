module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
        magiaovien: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tengiaovien: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
    });
    Teachers.associate = (models) => {
        Teachers.hasMany(models.ClassCourses, {
            onDelete: "cascade",
        });
    };
    return Teachers;
};