import { User, UserCreate, userRepository } from "../interfaces/user.interface";
import { userRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {
  private userRepository: userRepository;
  constructor() {
    this.userRepository = new userRepositoryPrisma();
  }

  async create({ name, email }: UserCreate): Promise<User> {
    const verifyIfUserExist = await this.userRepository.findByEmail(email);
    if (verifyIfUserExist) {
      throw new Error("User already exists")
    }
    const result = await this.userRepository.create({ name, email });

    return result;
  }
}
export { UserUseCase };
