const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')
var bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
const authors = ['tac gia 1', 'tac gia 2', 'tac gia 3']

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/authors', (req, res) => {
  res.send(authors)
})

app.post('/authors', (req, res) => {
  const { body: { name }} = req
  authors.push(name)
  res.send(true)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})