'use-strict'

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', field: 'user_id', as: 'user' });
  };

  return BlogPost;
}