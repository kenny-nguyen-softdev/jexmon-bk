import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const sequelizeConnection = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  dialectModule: mysql2,
});
export default sequelizeConnection;
