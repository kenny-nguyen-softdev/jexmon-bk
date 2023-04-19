"use strict";
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import ProductColor from "./classes/ProductColorModel";
ProductColor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
        key: "id",
      },
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
        key: "id",
      },
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
    tableName: "product_colors",
    sequelize: sequelizeConnection,
    modelName: "ProductColor",
  }
);
export default ProductColor;
