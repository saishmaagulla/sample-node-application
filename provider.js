const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.get('/', (req, res) => {
  res.write("Hello, to get user details append /user to the url")
})

server.get('/user', (req, res) => {
  res.json({
    id: 1283,
    name: 'Rohith Vallabhaneni'
  })
})
 
 module.exports = {
  server
 }

