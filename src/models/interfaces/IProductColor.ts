import Sequelize, { Optional } from "sequelize";
export interface IProductColorModel extends Sequelize.Model {
  id: number;
  product_id: number;
  color_id: number;
}
export interface ProductColorAttributes {
  id: number;
  product_id: number;
  color_id: number;
}
export type ProductColorInput = Optional<ProductColorAttributes, "id">;
export type ProductColorOutput = Required<ProductColorAttributes>;
