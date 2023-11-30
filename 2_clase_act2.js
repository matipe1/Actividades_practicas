// Ejecutar node.js en el navegador desde un servidor

const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hola mundo, desde un servidor Node.js!');
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor Node.js en ejecucion en http://localhost:3000/')
})