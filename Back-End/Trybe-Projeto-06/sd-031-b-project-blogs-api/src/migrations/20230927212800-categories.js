'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name',
      },
    }, { 
      tableName: 'categories', 
    });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('categories');
  }
};
