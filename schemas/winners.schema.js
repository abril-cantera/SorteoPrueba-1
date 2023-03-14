const Joi = require('joi');

const id = Joi.number().integer();
const nameWinner = Joi.string().min(3).max(15);

const createWinnersSchema = Joi.object({
  nameWinner: nameWinner.required(),
});

const updateWinnersSchema = Joi.object({
  nameWinner: nameWinner,
});

const getWinnersSchema = Joi.object({
  id: id.required(),
});

module.exports = { createWinnersSchema, updateWinnersSchema, getWinnersSchema }
