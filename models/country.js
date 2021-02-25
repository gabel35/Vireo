module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  Country.associate = (models) => {
    Country.hasMany(models.TopFive, {
      onDelete: "cascade",
    });
  };
  return Country;
};
