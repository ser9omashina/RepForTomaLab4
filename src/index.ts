import express from 'express';
import sequelize from './config/sequelize';  
import userRoutes from './routes/UserRoutes';  

const app = express();
app.use(express.json());  // Для парсинга JSON тела запроса

// Использовать маршруты пользователей
app.use('/users', userRoutes);

// Синхронизация базы данных
sequelize.sync().then(() => {
  console.log('startui ili pizdui');
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server zapushen na porty 3000');
});
