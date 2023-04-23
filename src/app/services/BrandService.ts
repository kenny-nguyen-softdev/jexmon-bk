import Model from "../../models/";

class BrandService {
  fetchAll = async () => {
    try {
      const brands = await Model.Brand.findAll();

      return brands;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new BrandService();
