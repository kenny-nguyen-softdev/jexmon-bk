import Sequelize, { Optional } from "sequelize";
export interface ICommentModel extends Sequelize.Model {
  id: number;
  name: string;
  email: string;
  content: string;
  star: string;
  product_id: number;
}
export interface CommentAttributes {
  id: number;
  name: string;
  email: string;
  content: string;
  star: string;
  product_id: number;
}
export type CommentInput = Optional<CommentAttributes, "id">;
export type CommentOutput = Required<CommentAttributes>;
