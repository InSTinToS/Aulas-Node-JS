const Sequelize = require('sequelize')

const sequelize = new Sequelize('sistema_de_cadastro', 'root', 'Miguel@1234', {
  host: 'localhost',
  dialect: 'mysql',
})


const Posts = sequelize.define('posts', {
  title: {
    type: Sequelize.STRING,
  },
  content:{
    type: Sequelize.TEXT
  },
  likes: {
    type: Sequelize.INTEGER
  }
})

Posts.create({
 title: 'Título legal',
 content: 'Conteúdo legal :D',
 likes: 3000,
})

// Posts.sync({force: true})

sequelize.authenticate().then(() => 
  console.log('Sequelize connected')
).catch(error => console.log('Error: ' + error))
