module.exports = (sequelize, DataTypes) => {
    const Semesters = sequelize.define("Semesters", {
        tenhocky: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Semesters.associate = (models) => {
        Semesters.belongsTo(models.PlanStudys, {
            onDelete: "no action",
        });
        Semesters.hasMany(models.Courses, {
            onDelete: "no action",
        });
    };

    return Semesters;
};