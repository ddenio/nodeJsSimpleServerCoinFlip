const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  try {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        // Handle the error, e.g., by sending an error response to the client
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } catch (error) {
    // Handle any synchronous errors here, but this is less likely for non-blocking file operations
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
}).listen(8000);