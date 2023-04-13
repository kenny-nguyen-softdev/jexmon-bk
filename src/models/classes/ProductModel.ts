import { Model } from "sequelize";
import { ProductAttributes, ProductInput } from "../interfaces/IProduct";
export default class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  public declare id: number;
  public declare name: string;
  public declare description: string;
  public declare price: number;
  public declare sale_price: number;
  public declare discount_from_date: Date;
  public declare discount_to_date: Date;
  public declare featured_image: string;
  public declare category_id: number;
  public declare brand_id: number;
}
