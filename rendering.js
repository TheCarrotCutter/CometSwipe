const drawCommands = [
    { type: 'playerYou', commands: () => {
        ctx.fillStyle = '#0011ffff';
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    
    }},



    { type: 'playerEnemy', commands: () => {
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    }}
];



import { entities, particles } from './app.js';



const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Get 2D drawing context

function render() {
    if (entities) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        entities.forEach(entity => {
            const drawCommand = drawCommands.find(cmd => cmd.type === entity.type);
            if (drawCommand) {
                ctx.save();
                ctx.translate(entity.x, entity.y);
                drawCommand.commands();
                ctx.restore();
            }
        });

        requestAnimationFrame(render); // Call render again for the next frame
    }
}

render();