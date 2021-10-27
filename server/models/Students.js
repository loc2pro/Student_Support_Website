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
    image: {
      type: DataType.STRING,
      allowNull: true,
    },
  });

  Students.associate = (models) => {
    Students.hasMany(models.RegisteredCourses, {
      onDelete: "cascade",
    });
    Students.hasMany(models.CompulsoryCourses, {
      onDelete: "cascade",
    });
    Students.belongsTo(models.Majors, {
      onDelete: "no action",
    });
  };

  return Students;
};
