'use strict';
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import Brand from "./classes/BrandModel";
Brand.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    featured_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "brands",
    sequelize: sequelizeConnection,
    modelName: "Brand",
  }
);
export default Brand
