module.exports = (sequelize, DataTypes) => {
    const Learns = sequelize.define("Learns", {
        diemquatrinh: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        diemgiuaky: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        diemcuoiky: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
    });

    return Learns;
};