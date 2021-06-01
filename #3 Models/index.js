const express = require('express')
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

//Iniciar Express
var app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Configuração da Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Rotas
app.get('/', (req, res) => {
  res.render('form')
})

app.post('/signup', (req, res) => {
  const {title, content} = req.body

  Post.create({
    title,
    content,
  })

  res.redirect('/posts')
})

app.get('/posts', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']]}).then(posts => {
    console.log(posts)
    res.render('posts', {posts})
  })
})

app.get('delete/:id', (req, res) => {
  Post.destroy({where: {
    'id': req.params.id
  }}).then(() => res.send('Deleted!')).catch(error => res.send('Failed to delete :('))
})

app.listen(3000, () => console.log('Running at 3000!'))
