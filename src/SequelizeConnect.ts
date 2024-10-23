const { Sequelize } = require('sequelize')

// Вариант 1: передача `URI` для подключения
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // для `postgres`

// Вариант 2: передача параметров по отдельности (для других диалектов)
//const sequelize = new Sequelize('database', 'username', 'password', {
  //host: 'localhost',
  //dialect: 'postgres'
//})