import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('my_datebase', 'postgres', 'sergey2944311', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
