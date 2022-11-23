import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const requestUserId = this.usersRepository.findById(user_id);
    console.log(requestUserId);
    if (!requestUserId) {
      throw new Error("User doesn't exist.");
    }
    if (!requestUserId.admin) {
      throw new Error("User isn't administrator");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
