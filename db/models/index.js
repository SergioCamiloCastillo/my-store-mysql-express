//envia la conexion hacia los modelos

const { User, UserSchema } = require('./userModel');

function setupModels(sequelize) {
  //init le dice que debe seguir el esquema declaraod en userModel.js y la configuracion
  User.init(UserSchema, User.config(sequelize));
}
module.exports = setupModels;
