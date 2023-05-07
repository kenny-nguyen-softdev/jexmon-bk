import Brand from "../../models/Brand";

class BrandService {
  fetchAll = async () => {
    try {
      const brands = await Brand.findAll();

      return brands;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new BrandService();
