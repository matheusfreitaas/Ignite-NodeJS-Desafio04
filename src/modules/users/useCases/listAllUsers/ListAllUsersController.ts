import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.body;
    try {
      const user = this.listAllUsersUseCase.execute(user_id);
      return response.status(200).json(user).send();
    } catch (error) {
      return response.status(400).json({ error }).send();
    }
  }
}

export { ListAllUsersController };
