'use strict';
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customerModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  down: async (queryInterface) => {
    //revertir lo que realizar en up
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
