const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hellow Word')
})

server.listen(3000)
console.log('====================================');
console.log('Server on port 3000');
console.log('====================================');