import Sequelize, { Optional } from 'sequelize';

export interface IUserModel extends Sequelize.Model {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  phone_number: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  phone_number: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
export type UserInput = Optional<UserAttributes, 'id'>;
export type UserOutput = Required<UserAttributes>;
