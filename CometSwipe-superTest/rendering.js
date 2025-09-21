const drawCommands = [
    { type: 'playerYou', commands: () => {
        ctx.fillStyle = '#c3c7f8ff';
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    
    }},



    { type: 'playerEnemy', commands: () => {
        ctx.fillStyle = '#ffb5b5ff';
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    }}
];



import { entities, particles } from './app.js';



const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function render() {
    if (entities) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        entities.forEach(entity => {
            const drawCommand = drawCommands.find(cmd => cmd.type === entity.type);
            if (drawCommand) {
                ctx.save();
                ctx.translate(entity.x, entity.y);
                drawCommand.commands();
                ctx.restore();
            }
        });

        requestAnimationFrame(render);
    }
}

render();