'use strict';
const { CategorySchema, CATEGORY_TABLE } = require('../models/categoryModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);

    //pasamos en nombre de la table, el nombre de la columna y el schema de esa columna
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
