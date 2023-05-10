let sizeLine;

let directionX, directionY;
let maxShiftX, maxShiftY;

let pivot;
let minX, maxX, minY, maxY;
let boundaryRight, boundaryLeft, boundaryLower, boundaryUpper;

let lineStart, lineControl1, lineMiddle, lineControl2, lineEnd;

let path = [];
let pathStart, pathControl1, pathControl2, pathEnd;
let nextSectionEnd;
let steps;
let step;

function setup() {
  createCanvas(400, 500);
  noFill();
  stroke(100, 60);
  strokeWeight(1);
  background(230, 230, 230, 100);
  frameRate(500);
  
  setupCanvasAdjustment();
  setupBoundaries();
  setupLine();
  setupPath();
}

function draw() {

  adjustBoundaries();
  
  let stepCoord = path[sizeLine - steps];
  let stepX = stepCoord.x;
  let stepY = stepCoord.y;

  translate(stepX, stepY);
  point(lineStart);
  //createLine();
  
  if(steps > 0) {
    steps--;
  } else {
    createPath();
  }
}

function setupCanvasAdjustment() {
  directionX = random([-1, 1]);
  directionY = random([-1, 1]);
  maxShiftX = sizeLine * directionX;
  maxShiftY = sizeLine * directionY;
}

function setupBoundaries() {
  pivot = createVector(0, 0);
  minX = (pivot.x - width  / 2) * 0.9;
  maxX = (pivot.x + width  / 2) * 0.9;
  minY = (pivot.y - height / 2) * 0.9;
  maxY = (pivot.y + height / 2) * 0.9;
  adjustBoundaries();
}

function setupLine() {
  sizeLine = 150;
  lineStart    = createVector(0, 0);
  lineControl1 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineMiddle   = createVector(random(0, sizeLine), random(0, sizeLine));
  lineControl2 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineEnd      = createVector(random(0, sizeLine), random(0, sizeLine));
}

function setupPath() {
  pathStart = createVector(0, 0);
  pathEnd  = createVector(sizeLine, sizeLine);
  nextSectionEnd = pathEnd;
  steps = sizeLine;

  createPath();
}

function createPath() {
  directionX = random([-1, 1]);
  directionY = random([-1, 1]);

  pathStart    = createVector(pathEnd.x, pathEnd.y);
  dontCrossBoundaries();
  
  pathControl1 = createVector(random(pathStart.x, nextSectionEnd.x), random(pathStart.y, nextSectionEnd.y));
  pathControl2 = createVector(random(pathStart.x, nextSectionEnd.x), random(pathStart.y, nextSectionEnd.y));
  pathEnd      = createVector(random(pathStart.x, nextSectionEnd.x), random(pathStart.y, nextSectionEnd.y));

  steps = sizeLine;
  
  for (let i = 0; i <= steps; i++) {
    step = i / steps;
    let xCoord = bezierPoint(pathStart.x, pathControl1.x, pathControl2.x, pathEnd.x, step);
    let yCoord = bezierPoint(pathStart.y, pathControl1.y, pathControl2.y, pathEnd.y, step);

    path[i] = createVector(xCoord, yCoord);
  }
}

function dontCrossBoundaries() {
  nextSectionEnd = pathStart.x + sizeLine * directionX, pathStart.y + sizeLine * directionY;

  if(nextSectionEnd.x > boundaryRight.x - sizeLine && boundaryLeft.x > nextSectionEnd.x) {
    directionX * (-1);
  }
  
  if(nextSectionEnd.y > boundaryLower.y - sizeLine && boundaryUpper.y > nextSectionEnd.y) {
    directionY * (-1);
  }
}

function adjustBoundaries() {
  boundaryRight = createVector(maxX - maxShiftX, minY - maxShiftY + height / 2 * 0.9);
  boundaryLeft  = createVector(minX - maxShiftX, minY - maxShiftY + height / 2 * 0.9);
  boundaryLower = createVector(minX - maxShiftX + width / 2 * 0.9, maxY - maxShiftY);
  boundaryUpper = createVector(minX - maxShiftX + width / 2 * 0.9, minY - maxShiftY);

  // boundaryRight = createVector(maxX - maxShiftX, minY - maxShiftY + height * 0.9);
  // boundaryLeft  = createVector(minX - maxShiftX, minY - maxShiftY + height * 0.9);
  // boundaryLower = createVector(minX - maxShiftX + width * 0.9, maxY - maxShiftY);
  // boundaryUpper = createVector(minX - maxShiftX + width * 0.9, minY - maxShiftY);

  push();
  stroke('red');
  strokeWeight(3);

  point(pivot);

  line(minX, minY, maxX, minY);
  line(maxX, minY, maxX, maxY);
  line(maxX, maxY, minX, maxY);
  line(minX, maxY, minX, minY);
  pop();
}


function createLine() {
  beginShape();
  //Line start point
  vertex(lineStart.x, lineStart.y);
  quadraticVertex(
    //control point 1
    lineControl1.x,
    lineControl1.y,
    //anchor point middle
    lineMiddle.x,
    lineMiddle.y,
  );
  quadraticVertex(
    //control point 2
    lineControl2.x,
    lineControl2.y,
    //anchor point end
    lineEnd.x,
    lineEnd.y,
  );
  endShape();
}