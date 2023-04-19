import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
const host: string | undefined = process.env.DB_HOST ?? "";
const user: string | undefined = process.env.DB_USERNAME ?? "";
const password: string | undefined = process.env.DB_PASSWORD ?? "";
const database: string | undefined = process.env.DB_DATABASE ?? '';
const sequelizeConnection = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  dialectModule: mysql2,
});
export default sequelizeConnection;
