const express = require('express')
const app = express()
const port = 4000

const authors = ['tac gia 1', 'tac gia 2', 'tac gia 3']

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/authors', (req, res) => {
  res.send(authors)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})