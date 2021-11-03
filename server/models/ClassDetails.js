module.exports = (sequelize, DataTypes) => {
  const ClassDetails = sequelize.define("ClassDetails", {
    lichhoc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Đang cập nhập",
    },
    ca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Đang cập nhập",
    },
    daynha: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Đang cập nhập",
    },
    phong: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Đang cập nhập",
    },
  });

  return ClassDetails;
};
