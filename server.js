const express = require("express");
const app = express();
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/name') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('tamara sharawi '); 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
