const { Model, DataTypes } = require('sequelize');

const WINNERS_TABLE = 'winners';

const WinnersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nameWinner: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
}


class Winners extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WINNERS_TABLE,
      modelName: 'Winners',
      timestamps: false
    }
  }
}

module.exports = { Winners, WinnersSchema, WINNERS_TABLE };


