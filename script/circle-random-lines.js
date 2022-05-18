let x, y;
let newX, newY;
let color1 = 0;
let color2 = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color1);
  x = width / 2;
  y = height / 2;
}

function draw() {
  strokeWeight(0.12);
  stroke(color2);

  let radius = random(
    windowHeight > windowWidth ? windowWidth / 2.5 : windowHeight / 2.5
  );
  let a = random(TWO_PI);

  newX = width / 2 + cos(a) * radius;
  newY = height / 2 + sin(a) * radius;
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}

function mouseClicked() {
  let temp;
  temp = color1;
  color1 = color2;
  color2 = temp;
  background(color1);
  }

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
  }