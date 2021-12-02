'use strict';
const { UserSchema, USER_TABLE } = require('../models/userModel');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
    //pasamos en nombre de la table, el nombre de la columna y el schema de esa columna
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};
