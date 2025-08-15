let socket = new WebSocket("wss://cometswipe.onrender.com");

socket.onopen = function(e) {
    alert("[open] Connection established");
    socket.send("1");
};
socket.onmessage = function(event) {
    alert(`[message] Data received from server: ${event.data}`);
};

export const app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundColor: 0x1099bb
});
document.body.appendChild(app.view);

export let gameObjects = [
    {type:'circle', radius:10}
];