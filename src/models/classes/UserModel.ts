import { Model } from 'sequelize';
import { UserAttributes, UserInput } from '../interfaces/IUser';
export default class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public declare id: number;
  public declare first_name: string;
  public declare last_name: string;
  public declare email: string;
  public declare password: string;
  public declare username: string;
  public declare phone_number: string;
  public declare address: string;
  public declare createdAt: Date;
  public declare updatedAt: Date;
}
