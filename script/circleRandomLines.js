/*
 * Copyright (c) 2023 Michael Kolesidis
 * GNU Affero General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 */

// Old (initial) point
let x, y;

// New point
let newX, newY;

// Colors
let color1 = 10;
let color2 = 255;

// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color1);
  x = width / 2;
  y = height / 2;
}

// Draw
function draw() {
  strokeWeight(0.12);
  stroke(color2);

  let radius = random(
    windowHeight > windowWidth ? windowWidth / 2.5 : windowHeight / 2.5
  );
  let a = random(TWO_PI);

  newX = width / 2 + cos(a) * radius; // will be within circle radius
  newY = height / 2 + sin(a) * radius; // will be within circle radius
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}

// Invert colors
function mouseClicked() {
  let temp;
  temp = color1;
  color1 = color2;
  color2 = temp;
  background(color1);
}

// Resize
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Fullscreen
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
