'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'blog_posts',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'user_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'users',
            key: 'id',
          },
        },
        published: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updated: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        tableName: 'blog_posts',
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('blog_posts');
  }
};
