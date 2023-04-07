import Sequelize, { Optional } from 'sequelize';

export interface IUserModel extends Sequelize.Model {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}
export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}
export type UserInput = Optional<UserAttributes, 'id'>;
export type UserOutput = Required<UserAttributes>;
