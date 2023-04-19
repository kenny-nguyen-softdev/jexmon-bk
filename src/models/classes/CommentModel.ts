import { Model } from "sequelize";
import { CommentAttributes, CommentInput } from "../interfaces/IComment";
export default class Comment
  extends Model<CommentAttributes, CommentInput>
  implements CommentAttributes
{
  public declare id: number;
  public declare name: string;
  public declare email: string;
  public declare content: string;
  public declare star: string;
  public declare product_id: number;
  public declare createdAt: Date;
  public declare updatedAt: Date;
}
