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
        image: {
            type: DataType.STRING,
            allowNull: true,
        },
    });

    Students.associate = (models) => {
        Students.belongsTo(models.Majors, {
            onDelete: "no action",
        });
        Students.belongsTo(models.PlanStudys, {
            onDelete: "no action",
        });
        Students.hasMany(models.RegistersCourses, {
            onDelete: "no action",
        });
        Students.hasMany(models.Learns, {
            onDelete: "no action",
        });
    };

    return Students;
};