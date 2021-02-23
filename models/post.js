module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1],
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  return Post;
};
