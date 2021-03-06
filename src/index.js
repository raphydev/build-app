import '@babel/polyfill';
import http from 'http';

function requestHandler(req, res) {
  if (req.method === 'POST' && req.url === '/users') {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Payload should not be empty',
    }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Raphael detaillons les processus de dev nodeJS et React via docker');
}

const server = http.createServer(requestHandler);
server.listen(process.env.PORT || 9099);
