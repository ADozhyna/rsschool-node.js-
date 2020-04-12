const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./common/winston');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

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
