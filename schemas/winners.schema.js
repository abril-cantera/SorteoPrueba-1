const Joi = require('joi');

const id = Joi.number().integer();
const nameWinners = Joi.string().min(3).max(15);

const createWinnersSchema = Joi.object({
  nameWinners: nameWinners.required(),
});

const updateWinnersSchema = Joi.object({
  nameWinners: nameWinners,
});

const getWinnersSchema = Joi.object({
  id: id.required(),
});

module.exports = { createWinnersSchema, updateWinnersSchema, getWinnersSchema }
