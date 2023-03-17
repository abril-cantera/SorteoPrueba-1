'use strict';

const { WINNERS_TABLE } = require('./../models/winners.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(WINNERS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nameWinner: {
        type: Sequelize.DataTypes.STRING,
        unique: false,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(WINNERS_TABLE);
  }
};
