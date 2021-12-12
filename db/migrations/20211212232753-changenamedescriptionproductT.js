'use strict';
const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'descripction', ProductSchema.description);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'descripction');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
