import Model from "../../models/";

class CategoryService {
  fetchAll = async () => {
    try {
      const categories = await Model.Category.findAll();

      return categories;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new CategoryService();
