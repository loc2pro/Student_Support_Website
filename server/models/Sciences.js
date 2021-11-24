module.exports = (sequelize, DataTypes) => {
    const Sciences = sequelize.define("Sciences", {
        makhoa: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tenkhoa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Sciences.associate = (models) => {
        Sciences.hasMany(models.Majors, {
            onDelete: "cascade",
        });
    };
    return Sciences;
};