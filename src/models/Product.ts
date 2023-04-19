'use strict';
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import Product from "./classes/ProductModel";
Product.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sale_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    discount_from_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    discount_to_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    featured_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories",
        key: "id",
      },
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "brands",
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
    tableName: "products",
    sequelize: sequelizeConnection,
    modelName: "Product",
  }
);
export default Product;
