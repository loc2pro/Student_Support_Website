module.exports = (sequelize, DataType) => {
    const Students = sequelize.define("Students", {
        mssv: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataType.STRING,
            allowNull: true,
        },
        address: {
            type: DataType.STRING,
            allowNull: true,
        },
        course: {
            type: DataType.STRING,
            allowNull: true,
        },
    });

    return Students;
};