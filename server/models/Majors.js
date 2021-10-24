module.exports = (sequelize, DataTypes) => {
    const Majors = sequelize.define("Majors", {
        manganh: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        tennganh: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    Majors.associate = (models) => {
        Majors.hasMany(models.Sciences, {
            onDelete: "cascade",
        });
    };
    return Majors;
};