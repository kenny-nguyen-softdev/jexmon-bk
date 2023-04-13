import Sequelize, { Optional } from "sequelize";
export interface IOrderItemModel extends Sequelize.Model {
  id: number;
  product_id: number;
  order_id: number;
  qty: number;
}
export interface OrderItemAttributes {
  id: number;
  product_id: number;
  order_id: number;
  qty: number;
}
export type OrderItemInput = Optional<OrderItemAttributes, "id">;
export type OrderItemOutput = Required<OrderItemAttributes>;
