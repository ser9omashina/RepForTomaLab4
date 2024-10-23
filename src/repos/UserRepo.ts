import { Request, Response } from 'express';
import User from '../models/User';  // Импорт модели

class UserRepository {
  async getAllUsers(req: Request, res: Response) {
    const users = await User.findAll();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  }
}

export default UserRepository;
