module.exports = (sequelize, DataTypes) => {
    const ClassCourses = sequelize.define("ClassCourses", {
        malop: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        tenlop: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        trangthai: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        soluong: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        soluongDK: {
            type: DataTypes.FLOAT,
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