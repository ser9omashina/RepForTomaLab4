import User from '../models/User';  // Пример модели

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async createUser(data: { name: string; age: number }) {
    return await User.create(data);
  }
}

export default new UserService();
