"use strict";
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import OrderItem from "./classes/OrderItemModel";
OrderItem.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
        key: "id",
      },
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "orders",
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
    modelName: "OrderItem",
  }
);
export default OrderItem;
