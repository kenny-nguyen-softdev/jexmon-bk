import Sequelize, { Optional } from "sequelize";
export interface ICommentModel extends Sequelize.Model {
  id: number;
  name: string;
  email: string;
  content: string;
  star: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentAttributes {
  id: number;
  name: string;
  email: string;
  content: string;
  star: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export type CommentInput = Optional<CommentAttributes, "id">;
export type CommentOutput = Required<CommentAttributes>;
