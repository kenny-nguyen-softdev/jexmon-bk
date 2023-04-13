import { Model } from "sequelize";
import { OrderAttributes, OrderInput } from "../interfaces/IOrder";
export default class Order
  extends Model<OrderAttributes, OrderInput>
  implements OrderAttributes
{
  public declare id: number;
  public declare customer_id: number;
  public declare address: string;
  public declare shipping_name: string;
  public declare shipping_email: string;
  public declare shipping_phone_number: string;
  public declare payment_method: number;
  public declare shipping_fee: string;
}
