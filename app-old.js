const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  const end = {
    name: 'Jasan',
    age: 20,
    url: req.url
  }
  res.write(JSON.stringify(end))
  res.end()
}).listen(8080)

console.log('Escuchando en el puerto 8080')