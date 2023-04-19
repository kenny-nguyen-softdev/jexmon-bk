import Sequelize, { Optional } from "sequelize";
export interface IColorModel extends Sequelize.Model {
  id: number;
  name: string;
  bar_code: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ColorAttributes {
  id: number;
  name: string;
  bar_code: string;
  createdAt: Date;
  updatedAt: Date;
}
export type ColorInput = Optional<ColorAttributes, "id">;
export type ColorOutput = Required<ColorAttributes>;
