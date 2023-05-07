import Category from "../../models/Category";

class CategoryService {
  fetchAll = async () => {
    try {
      const categories = await Category.findAll();

      return categories;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new CategoryService();
