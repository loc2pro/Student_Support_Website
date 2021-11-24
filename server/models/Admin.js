module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    });
    return Admin;
};