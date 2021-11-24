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
        Majors.belongsTo(models.Sciences, {
            onDelete: "cascade",
        });
        Majors.hasMany(models.PlanStudys, {
            onDelete: "cascade",
        });
        Majors.hasMany(models.Students, {
            onDelete: "cascade",
        });
    };
    return Majors;
};