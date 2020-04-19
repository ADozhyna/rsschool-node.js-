const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./common/winston');
const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('./common/config');
const users = require('./resources/users/data').users;
const boards = require('./resources/boards/data').boards;
const tasks = require('./resources/tasks/data').tasks;

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
  db.dropDatabase();
  users.forEach(user => user.save());
  boards.forEach(board => board.save());
  tasks.forEach(task => task.save());
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});

/* setTimeout(() => {
  throw new Error('Oops!');
}, 1500);

setTimeout(() => {
  Promise.reject(new Error('Oops!'))
}, 1500); */

/* eslint-disable */
process.on('uncaughtException', (error, origin) => {
  logger.log('error', `uncaughtException: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.log('error', `Unhandled rejection detected: ${reason.message}`);
});
/* eslint-enable */
