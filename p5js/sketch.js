let sizeLine;
let countSteps;
let oldFrameCount;

let shiftX;
let shiftY;
let directionFactorX;
let directionFactorY;

let lineStart;
let controlPoint1;
let lineMiddle;
let controlPoint2;
let lineEnd;

let pivot;
let minX;
let maxX;
let minY;
let maxY;

let outlineMiddleRight;
let outlineMiddleLeft; 
let outlineMiddleLower;
let outlineMiddleUpper;

function setup() {
  createCanvas(400, 500);
  noFill();
  strokeWeight(1);
  background(230);
  frameRate(500);
  
  sizeLine = 150;
  countSteps = random(300, 500);
  oldFrameCount = frameCount;

  shiftX = 1;
  shiftY = 1;
  directionFactorX = 1;
  directionFactorY = 1;

  lineStart     = createVector(0, 0);
  controlPoint1 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineMiddle    = createVector(random(0, sizeLine), random(0, sizeLine));
  controlPoint2 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineEnd       = createVector(random(0, sizeLine), random(0, sizeLine));

  pivot = createVector(0, 0);
  minX = (pivot.x - width  / 2) * 0.9;
  maxX = (pivot.x + width  / 2) * 0.9;
  minY = (pivot.y - height / 2) * 0.9;
  maxY = (pivot.y + height / 2) * 0.9;
}

function draw() {

  if (frameCount > oldFrameCount + countSteps) {
    changeDirection();
  }

  frameRate(300);
  stroke(100, 60);
  translate(width / 2 + shiftX, height / 2 + shiftY);
  createLine();
  
  outlineMiddleRight = createVector(maxX - shiftX, minY - shiftY + height / 2 * 0.9);
  outlineMiddleLeft  = createVector(minX - shiftX, minY - shiftY + height / 2 * 0.9);
  outlineMiddleLower = createVector(minX - shiftX + width / 2 * 0.9, maxY - shiftY);
  outlineMiddleUpper = createVector(minX - shiftX + width / 2 * 0.9, minY - shiftY);

  if(pivot.x < outlineMiddleRight.x - sizeLine && outlineMiddleLeft.x < pivot.x) {
    shiftX += 1 * directionFactorX;
  } else {
    shiftX -= 1 * directionFactorX;
    changeDirection();
  }
  
  if(pivot.y < outlineMiddleLower.y - sizeLine && outlineMiddleUpper.y < pivot.y) {
    shiftY += 1 * directionFactorY;
  } else {
    shiftY -= 1 * directionFactorY;
    changeDirection();
  }
}

function changeDirection() {
  countSteps = random(300, 500);
  directionFactorX = map(noise(random(0, 10)), 0, 1, -1, 1);
  directionFactorY = map(noise(random(0, 10)), 0, 1, -1, 1);
  oldFrameCount = frameCount;

  background(360, 10);
}

function createLine() {
  beginShape();
  //Line start point
  vertex(lineStart.x, lineStart.y);
  quadraticVertex(
    //control point 1
    controlPoint1.x,
    controlPoint1.y,
    //anchor point middle
    lineMiddle.x,
    lineMiddle.y,
  );
  quadraticVertex(
    //control point 2
    controlPoint2.x,
    controlPoint2.y,
    //anchor point end
    lineEnd.x,
    lineEnd.y,
  );
  endShape();
}
