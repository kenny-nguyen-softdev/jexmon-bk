import Sequelize, { Optional } from 'sequelize';

export interface IUserModel extends Sequelize.Model {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  phong_number: string;
  address: string;
}
export interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  phong_number: string;
  address: string;
}
export type UserInput = Optional<UserAttributes, 'id'>;
export type UserOutput = Required<UserAttributes>;
