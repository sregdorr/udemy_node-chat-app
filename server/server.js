const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3050;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);



app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Started on ${port}`);
});