const http = require('http');
const WebSocket = require('ws');

const testMode = require('./gamemodes/testGamemode.js');

const server = http.createServer();
const wss = new webSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a message TO the client
  ws.send('Hello client! Welcome to the server.');

  // Listen for messages FROM the client
  ws.on('message', (message) => {
    console.log('Received from client:', message);

    // Send back a response
    ws.send(`You said: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
