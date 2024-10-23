import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'Users',
  timestamps: false,
});

export default User;
