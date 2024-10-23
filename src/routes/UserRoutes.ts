import { Router } from 'express';
import userService from '../services/UserService';

const router = Router();

// Получить всех пользователей
router.get('/', async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users); // Вернет пустой массив, если пользователей нет
});

// Создать нового пользователя
router.post('/', async (req, res) => {
  const newUser = await userService.createUser(req.body);
  res.json(newUser);
});

export default router;
