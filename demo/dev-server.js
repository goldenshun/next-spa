const handler = require('serve-handler');
const http = require('http');
const next = require('next');
const config = require('./serve.json');

const dev = process.env.NODE_ENV !== 'production';
next({ dev });
// const handle = app.getRequestHandler()

const server = http.createServer((request, response) => handler(request, response, config));

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
