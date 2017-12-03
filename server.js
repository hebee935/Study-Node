const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const static = require('serve-static');
const bodyParser = require('body-parser');

//웹 서버 객체 생성
var server = http.createServer();

app.use('/views', static(patth.join(__dirname, 'views')));

server.listen(3000, function(req, res){
    console.log("Server start,,,");
});
/*
server.on('connection', function(socket){
    var addr = socket.address();
    console.log("clients are comming~");
});
*/