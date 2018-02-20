const server = require('./provider.js').server
const PORT = process.env.PORT || 30000

server.listen(PORT, () => {
  console.log('Provider Service listening on http://localhost:'+ PORT)
})