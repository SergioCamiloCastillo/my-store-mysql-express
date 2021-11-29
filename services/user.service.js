const boom = require('@hapi/boom');
const connection = require('../libs/mysql');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await connection.query('SELECT * FROM tasks');
    return rta
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
