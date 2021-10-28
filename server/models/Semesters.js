module.exports = (sequelize, DataTypes) => {
    const Semesters = sequelize.define("Semesters", {
        tenhocky: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Semesters.associate = (models) => {
        Semesters.belongsTo(models.PlanStudys, {
            onDelete: "cascade",
        });
        Semesters.hasMany(models.Courses, {
            onDelete: "cascade",
        });
    };

    return Semesters;
};