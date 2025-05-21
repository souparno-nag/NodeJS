const http = require('http');

const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   console.log('user hit the server')
//   res.end('home page')

// console.log(req.method)
// console.log(req.url)
// res.writeHead(200, { 'content-type':'text/html' })
// res.write('<h1>home page</h1>')
// res.end()

  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
}
);

server.listen(5000)