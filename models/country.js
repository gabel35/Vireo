module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  return Country;
};
