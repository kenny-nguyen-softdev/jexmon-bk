import { Sequelize } from "sequelize";
import logger from '../core/logger/logger';

const dbInit = async (sequelizeConnection: Sequelize) => {
  try {
    await sequelizeConnection.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};
export default dbInit;
