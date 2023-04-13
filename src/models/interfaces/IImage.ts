import Sequelize, { Optional } from "sequelize";
export interface IImageModel extends Sequelize.Model {
  id: number;
  featured_image: string;
  product_id: number;
}
export interface ImageAttributes {
  id: number;
  featured_image: string;
  product_id: number;
}
export type ImageInput = Optional<ImageAttributes, "id">;
export type ImageOutput = Required<ImageAttributes>;
