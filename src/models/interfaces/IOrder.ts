import Sequelize, { Optional } from "sequelize";
export interface IOrderModel extends Sequelize.Model {
  id: number;
  customer_id: number;
  address: string;
  shipping_name: string;
  shipping_email: string;
  shipping_phone_number: string;
  payment_method: number;
  shipping_fee: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface OrderAttributes {
  id: number;
  customer_id: number;
  address: string;
  shipping_name: string;
  shipping_email: string;
  shipping_phone_number: string;
  payment_method: number;
  shipping_fee: string;
  createdAt: Date;
  updatedAt: Date;
}
export type OrderInput = Optional<OrderAttributes, "id">;
export type OrderOutput = Required<OrderAttributes>;
