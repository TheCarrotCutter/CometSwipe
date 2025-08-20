import { app, gameObjects } from './app.js';


const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

if (gameObjects) {
    for (let i = 0; i < gameObjects.length; i++) {
        const obj = gameObjects[i];
        if (obj.type === 'circle') {
            graphics.beginFill(0xffffff);
            graphics.drawCircle(obj.x, obj.y, obj.radius);
            graphics.endFill();
        };
    };
};
