const express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html")
})

app.get('/about', (req, res) => {
  res.send('Welcome to my about page!')
})

app.get('/hello/:name/:occupation', (req, res) => {
  const { name, occupation } = req.params
  
  res.send(`<p>Welcome to my hello Page <b>${name}</b>, <b>${occupation}</b></p>.`)
  //send só pode ser enviado uma vez
})

app.listen(3000, () => console.log('Running!'))
