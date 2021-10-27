module.exports = (sequelize, DataTypes) => {
    const ClassCourses = sequelize.define("ClassCourses", {
        malop: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tenlop: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trangthai: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        soluong: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        soluongDK: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    });
    ClassCourses.associate = (model) => {
        ClassCourses.hasMany(model.Learns, {
            onDelete: "cascade",
        });
        ClassCourses.hasMany(model.ClassDetails, {
            onDelete: "cascade",
        });
    };
    return ClassCourses;
};