const http = require('http');
const WebSocket = require('ws');

console.log('Starting server...');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

let clients = {};

let idCounter = 1;

wss.on('connection', socket => {
  console.log('Client connected');

  let playerID = idCounter++;
  clients[playerID] = { x: 0, y: 0 };

    socket.on('message', function incoming(message) {
    let text = JSON.parse(message);

    let player = clients[playerID];
    player.x += text.x || 0; // 0 is the starting position
    player.y += text.y || 0;

    socket.send(JSON.stringify({
      playerID: playerID,
      clients: clients
    }));

    console.log(JSON.stringify(player));
  });
});

console.log(`Server started on port ${PORT}`);
