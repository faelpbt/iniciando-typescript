import { Request, Response } from 'express';

class UserController {
  findAll(request: Request, response: Response) {
    return response.send("Olá")
  }
}

export default new UserController();