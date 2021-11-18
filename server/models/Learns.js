module.exports = (sequelize, DataTypes) => {
  const Learns = sequelize.define("Learns", {
    diemquatrinh1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    diemquatrinh3: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    diemquatrinh2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    diemgiuaky: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    diemcuoiky: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  });

  return Learns;
};
