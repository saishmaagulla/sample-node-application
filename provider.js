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
  res.json({
    '/user': 'Gives the user details',
    '/details': 'Gives details of the user'
  })
})

server.get('/user', (req, res) => {
  res.json({
    id: 1283,
    name: 'Rohith Vallabhaneni'
  })
})

server.get('/details', (req, res) => {
  res.json({
    id: 1283,
    name: 'Rohith Vallabhaneni',
    DOJ: '12-12-2016',
    designation: 'ASE',
    technology: 'DevOps'
  })
})
 
 module.exports = {
  server
 }

