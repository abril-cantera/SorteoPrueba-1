const express = require('express');

const WinnersService = require('./../services/winners.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createWinnersSchema, updateWinnersSchema, getWinnersSchema } = require('./../schemas/winners.schema');

const router = express.Router();
const service = new WinnersService();

router.get('/',
  async (req, res, next) => {
    try {
      const winners = await service.find();
      res.json(winners);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getWinnersSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const winners = await service.findOne(id);
      res.json(winners);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createWinnersSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWinner = await service.create(body);
      res.status(201).json(newWinner);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getWinnersSchema, 'params'),
  validatorHandler(updateWinnersSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const winners = await service.update(id, body);
      res.json(winners);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getWinnersSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
