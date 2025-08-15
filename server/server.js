const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', ws => {
  console.log('Client connected');
});

WebSocket.onmessage = function(event) {
  console.log(event.data);
  WebSocket.send(event.data);
};
