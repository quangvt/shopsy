const bunyan = require('bunyan');

const appname = 'Shopsy';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),
  mongodb: {
    dsn: 'mongodb://localhost:47017/shopsy',
  },
  redis: {
    options: { port: 8379 },
  },
  mysql: {
    options: {
      host: '127.0.0.1',
      port: 3308,
      database: 'shopsy',
      dialect: 'mysql',
      username: 'root',
      password: '<YourPassword>',
    },
  },
};
