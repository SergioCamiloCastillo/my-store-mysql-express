//envia la conexion hacia los modelos

const { User, UserSchema } = require('./userModel');
const { Customer, CustomerSchema } = require('./customerModel');

function setupModels(sequelize) {
  //init le dice que debe seguir el esquema declaraod en userModel.js y la configuracion
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);

}
module.exports = setupModels;
