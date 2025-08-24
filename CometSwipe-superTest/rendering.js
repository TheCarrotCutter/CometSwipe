import { entities } from './app.js';



const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Get 2D drawing context

function render() {
    if (entities) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        for (let i = 0; i < entities.length; i++) {
            const obj = entities[i];
            if (obj.type === 'circle') {
                ctx.fillStyle = obj.color || '#000000';
                ctx.beginPath();
                ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        requestAnimationFrame(render); // Call render again for the next frame
    }
}

render();