'use strict';
const { OrderSchema, ORDER_TABLE } = require('../models/orderModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  down: async (queryInterface) => {
    //revertir lo que realizar en up
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
