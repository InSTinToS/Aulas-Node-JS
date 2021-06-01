const Sequelize = require('sequelize')

//Conexão com MySQL via Sequelize
const sequelize = new Sequelize('posts', 'root', 'Miguel@1234', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = {
  Sequelize,
  sequelize
}