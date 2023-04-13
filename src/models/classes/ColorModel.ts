import { Model } from "sequelize";
import { ColorAttributes, ColorInput } from "../interfaces/IColor";
export default class Color
  extends Model<ColorAttributes, ColorInput>
  implements ColorAttributes
{
  public declare id: number;
  public declare name: string;
  public declare bar_code: string;
}
