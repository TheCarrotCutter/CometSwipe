const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000; // Render will set process.env.PORT
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', ws => {
  console.log('Client connected');
});

socket.onmessage = function(event) {
  socket.send(event.data+1);
};
