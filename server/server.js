const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', ws => {
  console.log('Client connected');

    ws.on('message', function incoming(message) {
    let text = message.toString();
    console.log(text);
    ws.send(text); // Echoes the received message back to the client
  });
});
