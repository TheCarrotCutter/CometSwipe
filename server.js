const http = require('http');
const ws = require('ws');

const PORT = process.env.PORT || 3000; // Render will set process.env.PORT
const wss = new WebSocket.Server({ port: PORT });
