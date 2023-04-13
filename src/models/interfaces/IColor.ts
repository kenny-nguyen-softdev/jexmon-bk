import Sequelize, { Optional } from "sequelize";
export interface IColorModel extends Sequelize.Model {
  id: number;
  name: string;
  bar_code: string;
}
export interface ColorAttributes {
  id: number;
  name: string;
  bar_code: string;
}
export type ColorInput = Optional<ColorAttributes, "id">;
export type ColorOutput = Required<ColorAttributes>;
