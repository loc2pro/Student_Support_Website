module.exports = (sequelize, DataTypes) => {
  const RegistersCourses = sequelize.define("RegistersCourses", {
    tongdiem: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    hocphi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  RegistersCourses.associate = (models) => {
    RegistersCourses.belongsTo(models.Semesters, {
      onDelete: "cascade",
    });
    RegistersCourses.belongsTo(models.Courses, {
      onDelete: "cascade",
    });
    RegistersCourses.hasOne(models.Learns, {
      onDelete: "cascade",
    });
  };

  return RegistersCourses;
};
