const canvas = document.getElementById('gameCanvas');

canvas.addEventListener('click', function(event) {
    canvas.requestPointerLock();
});

let mouseMoveX = 0;
let mouseMoveY = 0;
let mouseMoved = false;

document.addEventListener('mousemove', function(event) {
  mouseMoveX = event.movementX;
  mouseMoveY = event.movementY;
  mouseMoved = true;
});

let socketOpened = false;

function update() {
    if (mouseMoved === false) {
        mouseMoveX = 0;
        mouseMoveY = 0;
    }

    mouseMoved = false;

    if (socketOpened) {
        socket.send(JSON.stringify({type: 'mousemove', x: mouseMoveX, y: mouseMoveY}));
    };

    requestAnimationFrame(update);
}

let socket = new WebSocket("wss://cometswipe.onrender.com"); // wss://cometswipe.onrender.com
// or ws://localhost:3000

socket.onopen = function(event) {
    alert("[open] Connection established");
    socketOpened = true;
};

socket.onclose = function(event) {
    alert("[close] Connection closed");
    socketOpened = false;
};

socket.onmessage = function(event) {
    let data = JSON.parse(event.data);
    console.log('received', data);

    if (data.type === 'update') {
        let clients = data.clients;
        let playerID = data.playerID;
        let playerData = clients[playerID];
        console.log(playerData);

        entities[0].x = playerData.x;
        entities[0].y = playerData.y;

        for (let id in clients) {
            if (id != playerID) {
                if (!entities.find(entity => entity.id === id)) {
                    entities.push({type:'playerEnemy', id:id, x:clients[id].x, y:clients[id].y, radius:10, color:'#ff0000'});
                } else {
                    entities.find(entity => entity.id === id).x = clients[id].x;
                    entities.find(entity => entity.id === id).y = clients[id].y;
                }
            }
        }
    }

    if (data.type === 'welcome') {
        console.log('Welcome, player ID:', data.playerID);
    }
};

export let entities = [
    {type:'playerYou', x:300, y:300, radius:10, color:'#1068dbff'},
];

export let particles = [];


update();

