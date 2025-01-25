'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    undersocred: true,
    tableName: 'categories',
  });
  return Category;
};