module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return Country;
};
