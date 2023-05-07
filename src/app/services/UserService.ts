import User from "../../models/User";
const bcrypt = require("bcryptjs");

class UserService {
  getUserByEmail = async (email: string) => {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return user;
    } else {
      return false;
    }
  };

  createNewUser = async (requestedUser: any) => {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        username,
        phone_number,
        address,
      } = requestedUser;

      // Tạo ra một chuỗi ngẫu nhiên
      const salt = bcrypt.genSaltSync(10);
      // Mã hóa salt + password
      const hashPassword = bcrypt.hashSync(password, salt);

      const newUser = await User.create({
        first_name,
        last_name,
        email,
        password: hashPassword,
        username,
        phone_number,
        address,
      });

      if (!newUser) {
        return false;
      }

      return newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default new UserService()
