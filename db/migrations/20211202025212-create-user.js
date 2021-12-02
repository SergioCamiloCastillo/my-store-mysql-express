'use strict';

const { UserSchema, USER_TABLE } = require('../models/userModel');

module.exports = {
  //up es la parte donde va a realizar la creacion
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    //revertir lo que realizar en up
    await queryInterface.dropTable(USER_TABLE);
  },
};
