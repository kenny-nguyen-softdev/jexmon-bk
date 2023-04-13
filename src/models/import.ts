import User from "./User";
import Category from "./Category";
import Brand from "./Brand";
import Order from "./Order";
import Image from "./Image";
import Comment from "./Comment";
import Product from "./Product";
import Color from "./Color";

const db: any = {};
db["User"] = User;
db["Category"] = Category;
db["Brand"] = Brand;
db["Image"] = Image;
db["Comment"] = Comment;
db["Order"] = Order;
db["Product"] = Product;
db["Color"] = Color;

export default db;
