const express = require('express')
const hbs = require('hbs')
require('./hbs/helper')

const port = process.env.PORT || 3000
const app = express()
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parcials')
app.set('view enginee', 'hbs')

app.get('/', (req, res) => {
  res.render('home.hbs', { name: 'jaSaN HeRnánDez', })
})
app.get('/about', (req, res) => {
  res.render('about.hbs', { name: 'jaSaN HeRnánDez', })
})

app.listen(port, () => {
  console.log(`listening in port http://localhost:${port}`)
})
