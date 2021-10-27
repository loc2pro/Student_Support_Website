module.exports = (sequelize, DataTypes) => {
    const ClassDetails = sequelize.define("ClassDetails", {
        lichhoc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        daynha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phong: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return ClassDetails;
};