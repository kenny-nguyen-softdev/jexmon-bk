import { Model } from 'sequelize';
import { UserAttributes, UserInput } from '../interfaces/IUser';
export default class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public username!: string;
  public password!: string;
}
