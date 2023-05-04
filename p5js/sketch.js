let rot = 0;
let x = 0;
let y = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

  background(0);
  frameRate(10);
  stroke(100, 100, 100);
  strokeWeight(5);
  noFill();
}

function draw(){
  resetMatrix();
  applyMatrix(1, rot, -rot, 1, x, y)
  bezier(850, 400, 100, 100, 900, 900, 350, 1200);

  rot += map(noise(rot), 0, 1, 0, 0.1);
  x += noise(x / 100);
  y -= noise(y / 100);
}

function path() {
  //create random path with x,y within canvas
}

function rotation() {
  //create randomly turning rotation
}
