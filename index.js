const server = require('./provider.js').server
const PORT = process.env.PORT || 30000
const ADDRESS = process.env.ADDRESS || "0.0.0.0"


server.listen(PORT, ADDRESS, () => {
  console.log('Provider Service listening on http://'+ADDRESS+':'+ PORT)
})
