'use strict';
const { UserSchema, USER_TABLE } = require('../models/userModel');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(USER_TABLE, 'password', UserSchema.password);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(USER_TABLE, 'password');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
