const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
//models, cada vez que ejecuta el init, asigna un espacio de nombre reservado llamado models donde almacena todos los modelos
//const connection = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);

    return newUser;
  }

  async find() {
    //let [data] = await connection.query('SELECT * FROM andres');
    const data = await models.User.findAll();
    return data;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('Usuario no encontrado');
      //throw lanza el error
    }
    return user;
  }

  async update(id, changes) {
    //buscar primero si existe el usuario segun el id desde sequelize
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
