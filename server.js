const http = require('http');
var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || '3000';



app.use(express.static(path.join(__dirname, './dist/views')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/views/index.html'));
});

app.set('port', port);

module.exports = app;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server is runing in ' + process.env.NODE_ENV + ' mode at  http://localhost:' + port)
});