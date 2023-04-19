import Sequelize, { Optional } from "sequelize";
export interface IImageModel extends Sequelize.Model {
  id: number;
  featured_image: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ImageAttributes {
  id: number;
  featured_image: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export type ImageInput = Optional<ImageAttributes, "id">;
export type ImageOutput = Required<ImageAttributes>;
