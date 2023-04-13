import { Model } from "sequelize";
import { ImageAttributes, ImageInput } from "../interfaces/IImage";
export default class Image
  extends Model<ImageAttributes, ImageInput>
  implements ImageAttributes
{
  public declare id: number;
  public declare featured_image: string;
  public declare product_id: number;
}
