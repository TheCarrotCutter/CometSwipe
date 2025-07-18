// ----------------- //
// IMPORT NECECETIES //
// ----------------- //

import { rainbowColor } from './main.js';

// other thing
let domLoaded;
document.addEventListener('DOMContentLoaded', () => {
  domLoaded = true;
});

// ---------------- //
// HELPER FUNCTIONS //
// ---------------- //

// UTILS is also used for random stuff i dont know where to put like buttons stuffs

// find distance between 2 vectors limited to a distance
export function getDirectionVector(start, end, length) {
  return end.clone()
  .subtract(start)
  .normalize()
  .scale(length);
}

// launch and object by adding velocity in a direcion
export function launchToObject(object, target, speed) {
  let launchVector = 
    getDirectionVector(
      new Phaser.Math.Vector2(object.x, object.y),
      new Phaser.Math.Vector2(target.x, target.y),
      speed
    )
        
  object.body.velocity.x += move.x
  object.body.velocity.y += move.y
}

let buttonGraphics;

// ------------- //
// BUTTON STUFFS //
// ------------- //

export function updateButtons() {
  // for every html button every frame
  
  let rainbowHex;
  if (rainbowColor) {
    rainbowHex = '#' + rainbowColor.toString(16).padStart(6, '0');
  };
  
  document.querySelectorAll('button').forEach(button => {
    if (domLoaded) {
      if (button.matches(':hover')) {
        button.style.borderColor = rainbowHex;
        button.style.borderWidth = '7px';
      } else {
        button.style.borderColor = '#ffffff';
        button.style.borderWidth = '5px';
      };
    };
  });
  
  document.querySelectorAll('.rainbowText').forEach(button => {
    if (domLoaded) {
      button.style.color = rainbowHex;
    };
  });
  
}

document.querySelectorAll('.pulseButton').forEach(button => {
  console.log('dud')
    button.addEventListener("click", (button) => 
      console.log('sdf')
    );
});