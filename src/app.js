const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const logger = require('./common/winston');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const ValidationError = require('./common/validation');
const createError = require('http-errors');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  logger.log(
    'info',
    `url: ${req.url} params: ${JSON.stringify(
      req.query
    )} body: ${JSON.stringify(req.body)}`
  );
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use((req, res, next) => {
  next(createError(404, `Not found url: ${req.url}`));
});

app.use((error, req, res, next) => {
  logger.log('error', `error: ${error.status} ${error.message}`);
  if (error instanceof ValidationError) {
    res.status(error.status).send(error.text);
    return;
  }
  if (error.status === 404) {
    res.status(error.status).send(error.text);
    return;
  }
  next(error);
});

app.use((error, req, res) => {
  res.status(INTERNAL_SERVER_ERROR).send(getStatusText(INTERNAL_SERVER_ERROR));
});

module.exports = app;
