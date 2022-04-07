let x, y;
let newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
  x = width/2;
  y = height/2;
}

function draw() {
  strokeWeight(0.1);
  stroke(255);
	
  let radius = random(windowHeight/2);
  let a = random(TWO_PI);
	
  newX = width/2 + cos(a)*  radius;
  newY = height/2 + sin(a) * radius;
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}
