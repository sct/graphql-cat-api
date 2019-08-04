import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.prettyPrint(),
  transports: [new winston.transports.Console()],
});

export default logger;
