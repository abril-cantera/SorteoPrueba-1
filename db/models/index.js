const { Winners, WinnersSchema } = require('./winners.model');

function setupModels(sequelize) {
  Winners.init(WinnersSchema, Winners.config(sequelize))

  Winners.associate(sequelize.models)
}