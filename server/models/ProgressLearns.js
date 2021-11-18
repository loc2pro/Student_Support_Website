module.exports = (sequelize, DataTypes) => {
    const ProgressLearn = sequelize.define("ProgressLearn", {
        tinchi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tinchiyeucau: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    ProgressLearn.associate = (models) => {
        ProgressLearn.belongsTo(models.Students, {
            onDelete: "cascade",
        });
        ProgressLearn.hasMany(models.RegistersCourses, {
            onDelete: "cascade",
        });
    };
    return ProgressLearn;
};