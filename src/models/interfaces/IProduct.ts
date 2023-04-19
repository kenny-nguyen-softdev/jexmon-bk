import Sequelize, { Optional } from "sequelize";
export interface IProductModel extends Sequelize.Model {
  id: number;
  name: string;
  description: string;
  price: number;
  sale_price: number;
  discount_from_date: Date;
  discount_to_date: Date;
  featured_image: string;
  category_id: number;
  brand_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  sale_price: number;
  discount_from_date: Date;
  discount_to_date: Date;
  featured_image: string;
  category_id: number;
  brand_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export type ProductInput = Optional<ProductAttributes, "id">;
export type ProductOutput = Required<ProductAttributes>;
