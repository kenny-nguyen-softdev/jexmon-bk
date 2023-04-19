import { Model } from "sequelize";
import { BrandAttributes, BrandInput } from "../interfaces/IBrand";
export default class Brand
  extends Model<BrandAttributes, BrandInput>
  implements BrandAttributes
{
  public declare id: number;
  public declare name: string;
  public declare featured_image: string;
  public declare createdAt: Date;
  public declare updatedAt: Date;
}
