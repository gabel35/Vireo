module.exports = (sequelize, DataTypes) => {
  const TopFive = sequelize.define(
    "TopFive",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    { freezeTableName: true }
  );

  TopFive.associate = (models) => {
    TopFive.belongsTo(models.Country, {
      onDelete: "cascade",
    });
  };
  return TopFive;
};
