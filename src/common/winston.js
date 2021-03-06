const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.timestamp(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

module.exports = logger;
