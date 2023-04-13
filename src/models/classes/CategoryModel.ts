import { Model } from "sequelize";
import { CategoryAttributes, CategoryInput } from "../interfaces/ICategory";
export default class Category
  extends Model<CategoryAttributes, CategoryInput>
  implements CategoryAttributes
{
  public declare id: number;
  public declare name: string;
  public declare featured_image: string;
}
