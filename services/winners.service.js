const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class WinnersService {

  constructor() {
  }
  async create(data) {
    const newWinners = await models.Winners.create(data);
    return newWinners;
  }

  async find() {
    const winners = await models.Winners.findAll({
      include: ['selection']
    });
    return winners;
  }

  async findOne(id) {
    const winners = await models.Winners.findByPk(id, {
      include: ['selection']
    });
    return winners;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const winners = await this.findOne(id);
    await winners.destroy();
    return { id };
  }

}

module.exports = WinnersService;
