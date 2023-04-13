"use strict";
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import ProductColor from "./classes/ProductColorModel";
ProductColor.init(
  {
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
    tableName: "images",
    sequelize: sequelizeConnection,
    modelName: "ProductColor",
  }
);
export default ProductColor;
