module.exports = (sequelize, DataTypes) => {
    const PlanStudys = sequelize.define("PlanStudys", {
        tenkehoach: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    PlanStudys.associate = (models) => {
        PlanStudys.hasMany(models.Semesters, {
            onDelete: "no action",
        });
    };
    return PlanStudys;
};