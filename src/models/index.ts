import { Sequelize } from "sequelize";
import sequelize from "../db/connection";
import db from "./import";
import dbInit from "../db/init";
import logger from "../core/logger/logger";

logger.info("Authenticate connection");
dbInit(sequelize);

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export = db;
