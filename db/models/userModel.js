const { Model, DataTypes, Sequelize } = require('sequelize');
//definir nombre de tabla
const USER_TABLE = 'users';
//UserSchema define la estructura de la bd
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true.valueOf,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: '2',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
    //definir todas las relaciones de BD
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
    //timestamps habilita campos por defecto
  }
}

module.exports = { USER_TABLE, UserSchema, User };
