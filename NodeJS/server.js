const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const inputString = queryObject.input || "Nessuna stringa fornita";

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><h1>Stringa ricevuta:</h1><p>${inputString}</p></body></html>`);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});
