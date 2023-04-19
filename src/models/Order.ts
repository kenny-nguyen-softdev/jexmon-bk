'use strict';
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import Order from "./classes/OrderModel";
Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "customers",
        key: "id",
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipping_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipping_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipping_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_method: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    shipping_fee: {
      type: DataTypes.INTEGER,
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
    tableName: "orders",
    sequelize: sequelizeConnection,
    modelName: "Order",
  }
);
export default Order;
