import { Model } from "sequelize";
import { ProductColorAttributes, ProductColorInput } from "../interfaces/IProductColor";
export default class ProductColor
  extends Model<ProductColorAttributes, ProductColorInput>
  implements ProductColorAttributes
{
  public declare id: number;
  public declare color_id: number;
  public declare product_id: number;
  public declare createdAt: Date;
  public declare updatedAt: Date;
}
