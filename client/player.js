// ----------------- //
// IMPORT NECECETIES //
// ----------------- //

import { rainbowColor } from './main.js';

// --------------- //
// PLAYER CREATION //
// --------------- //

export let player;

export function createPlayer(scene, x, y) {
  console.log("Player Creating...")
  
  player = scene.physics.add.sprite(x, y, 'imageCircle');
  player.setDisplaySize(30, 30); // 30 30
  player.body.setCircle(20, 0, 0);
  player.setTint(0x81daf0);
  
  let playerEmitter = scene.add.particles(0, 0, 'imageCircle', {
    x: 0,
    y: 0,
    speed: 0,
    lifespan: 300,
    quantity: 1,
    alpha: { start: 0.75, end: 0 },
    scale: { start: 0.75, end: 0 },
  });
  
  let playerEmitter2 = scene.add.particles(0, 0, 'imageCircle', {
    x: { random: [ -100, 100 ] },
    y: { random: [ -100, 100 ] },
    speed: 15,
    lifespan: 1000,
    quantity: 1,
    alpha: { start: 0.3, end: 0 },
    scale: 0.05
  });

  playerEmitter.startFollow(player);
  playerEmitter2.startFollow(player);
  
  // ---------------- //
  // PLAYER COLLISION //
  // ---------------- //
  
  function playerCollide(player, object) {
            
    if (enemyPhysicsGroup.contains(object)) {
      let bounce = 
        getDirectionVector(
          new Phaser.Math.Vector2(player.x, player.y),
          new Phaser.Math.Vector2(object.x, object.y),
          400
        )
            
      player.body.velocity.x += -bounce.x
      player.body.velocity.y += -bounce.y
    }
  }
  
  console.log("Player Succesfully Created!")
  
  
}

let mouseMoveX = 0;
let mouseMoveY = 0;


export function updatePlayer() {
  
  // check if player exists
  if (player) {
    player.body.velocity.x += mouseMoveX * 2;
    player.body.velocity.y += mouseMoveY * 2;

    player.body.velocity.x *= 0.95;
    player.body.velocity.y *= 0.95;

    if (Math.abs(player.body.velocity.x) < 10) player.body.velocity.x = 0;
    if (Math.abs(player.body.velocity.y) < 10) player.body.velocity.y = 0;
    
    mouseMoveX = 0;
    mouseMoveY = 0;
  }
}


document.addEventListener('mousemove', function(event) {
  mouseMoveX = event.movementX;
  mouseMoveY = event.movementY;
});
