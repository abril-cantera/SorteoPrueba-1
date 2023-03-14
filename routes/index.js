const express = require('express');

const winnersRouter = require('./winners.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/winners', winnersRouter);
}

module.exports = routerApi;
