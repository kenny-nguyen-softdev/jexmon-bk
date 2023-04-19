'use strict';
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import Category from "./classes/CategoryModel";
Category.init(
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
    tableName: "categories",
    sequelize: sequelizeConnection,
    modelName: "Category",
  }
);
export default Category
