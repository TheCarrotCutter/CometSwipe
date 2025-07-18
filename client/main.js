// ----------------- //
// IMPORT NECECETIES //
// ----------------- //

import { player, createPlayer, updatePlayer } from './player.js';

import { generateTextures } from './images.js';

import { loadStyleGround } from './definitions.js';

import { updateButtons } from './utils.js';

// export thisBefore

export let thisBefore;

// ------------------ //
// PHASER GAME SETUPS //
// ------------------ //

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  resolution: 1,
  parent: 'mainMenu',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

console.log('Phaser version:', Phaser.VERSION);

// ----------- //
// MISC SETUPS //
// ----------- //

let gameCanvas = game.canvas

let inGame = false;

// --------------- //
// SCENE FUNCTIONS //
// --------------- //

function preload() {
  
}

function create() {
  // --------------- //
  // CREATE() SETUPS //
  // --------------- //
  
  let camera = this.cameras.main
  var effect = camera.postFX.addGlow(0xFFFFFF, 1.5, 1, 0, 1, 4);
//var effect = camera.postFX.addGlow(color, outerStrength, innerStrength, knockout, quality, distance);


  generateTextures(this);
  
  loadStyleGround(this, 'mainMenu')
  
  //loadMenu(this, 'mainMenu');
  
  this.input.on('pointerdown', () => {
    if (inGame === true) {
      gameCanvas.requestPointerLock();
    };
  });
  
}
let rainbowHue = 0;
export let rainbowColor;

function update(time, delta) {
  updatePlayer();
  updateButtons();
  
  // rainbow color
  
  rainbowHue += 0.0001 * delta;
  if (rainbowHue > 1) rainbowHue = 0;
  rainbowColor = Phaser.Display.Color.HSVToRGB(rainbowHue, 1, 1).color;
};

// ---------- //
// LOAD LEVEL //
// ---------- //

export function joinServer(scene, level) {
  createPlayer(scene, 300, 300);
  loadStyleGround(scene, 'smallStars');
  //loadStyleGround(scene, 'stars');
  gameCanvas.requestPointerLock();
    
  inGame = true;
};
