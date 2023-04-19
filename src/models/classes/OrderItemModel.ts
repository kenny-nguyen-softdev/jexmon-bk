import { Model } from "sequelize";
import { OrderItemAttributes, OrderItemInput } from "../interfaces/IOrderItem";
export default class OrderItem
  extends Model<OrderItemAttributes, OrderItemInput>
  implements OrderItemAttributes
{
  public declare id: number;
  public declare product_id: number;
  public declare order_id: number;
  public declare qty: number;
  public declare createdAt: Date;
  public declare updatedAt: Date;
}
