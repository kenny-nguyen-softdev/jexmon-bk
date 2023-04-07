import { IUserModel } from "../../models/interfaces/IUser";
import { BaseRepository } from "../../core/repositories/base/BaseRepository";
import { User } from "../../models/";

class UserRepository extends BaseRepository<IUserModel> {
  constructor() {
    super(User);
  }
}

Object.seal(UserRepository);
export = UserRepository;
