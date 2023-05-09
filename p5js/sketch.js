let sizeLine;
let angle = 0;
let countSteps;
let oldFrameCount;
let shiftX;
let shiftY;
let directionFactorX;
let directionFactorY;
let angleFactor;
let lineStart;
let controlPoint1;
let lineMiddle;
let controlPoint2;
let lineEnd;
let sliderAngle;
let sliderCountStepsMin;
let sliderCountStepsMax;
let sliderSpeed;

function setup() {
  createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.9);
  angleMode(DEGREES);
  noFill();
  strokeWeight(1);
  background(360);

  group = createDiv('');
  group.position(30, 30);  
  
  sliderAngle = createSlider(0.0, 0.5, 0.3, 0.1);
  sliderAngle.style('width', '80px');
  sliderAngle.parent(group);
  labelSliderAngle = createSpan("angle&#8195");
  labelSliderAngle.parent(group);
  
  sliderCountStepsMin = createSlider(10, 200, 100, 10);
  sliderCountStepsMin.style('width', '80px');
  sliderCountStepsMin.parent(group);
  labelSliderCountStepsMin = createSpan("min step&#8195");
  labelSliderCountStepsMin.parent(group);

  sliderCountStepsMax = createSlider(200, 500, 300, 10);
  sliderCountStepsMax.style('width', '80px');
  sliderCountStepsMax.parent(group);
  labelSliderCountStepsMax = createSpan("max step&#8195");
  labelSliderCountStepsMax.parent(group);

  sliderSpeed = createSlider(10, 100, 30, 10);
  sliderSpeed.style('width', '80px');
  sliderSpeed.parent(group);
  labelSliderSpeed = createSpan('speed');
  labelSliderSpeed.parent(group);

  frameRate(sliderSpeed.value());
  sizeLine = 280;
  countSteps = random(sliderCountStepsMin.value(), sliderCountStepsMax.value());
  oldFrameCount = frameCount;
  shiftX = 1;
  shiftY = 1;
  directionFactorX = 1;
  directionFactorY = 1;
  angleFactor = 1;
  lineStart     = createVector(0, 0);
  controlPoint1 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineMiddle    = createVector(random(0, sizeLine), random(0, sizeLine));
  controlPoint2 = createVector(random(0, sizeLine), random(0, sizeLine));
  lineEnd       = createVector(random(0, sizeLine), random(0, sizeLine));  
}

function draw() {
  background(360);

  if (frameCount > oldFrameCount + countSteps) {
    changeDirection();
  }

  frameRate(sliderSpeed.value());
  stroke(map(noise(frameCount), 0, 1, 0, 100) % 100, angle % 100, angle % 100, 60);
  translate(width / 2 + shiftX, height / 2 + shiftY);
  rotate(angle % 360);
  createLine();

  //box
  line(0, 0, sizeLine, 0);
  line(sizeLine, 0, sizeLine, sizeLine);
  line(sizeLine, sizeLine, 0, sizeLine);
  line(0,sizeLine, 0, 0);

  // if(shiftX + 1 * directionFactorX < width / 2 - sizeLine * 1.2 && shiftX + 1 * directionFactorX >  sizeLine * 2.2 - width / 2) {
  if(shiftX + 1 * directionFactorX < width / 2 - sizeLine * 1.2) {
    console.log("entred if x");
    shiftX += 1 * directionFactorX;
  } else {
    console.log("entred else x");
    shiftX -= 1 * directionFactorX;
  }
  
  // if(shiftY + 1 * directionFactorY < height / 2 - sizeLine * 1.2 && shiftY + 1 * directionFactorY >   sizeLine * 2.2 - height / 2) {
  if(shiftY + 1 * directionFactorY < height / 2 - sizeLine * 1.2) {
    console.log("entred if y");
    shiftY += 1 * directionFactorY;
  } else {
    console.log("entred else y");
    shiftY -= 1 * directionFactorY;
  }
  
  angle += sliderAngle.value() * angleFactor;
}

function changeDirection() {
  countSteps = random(sliderCountStepsMin.value(), sliderCountStepsMax.value());
  directionFactorX = map(noise(random(0, 10)), 0, 1, -1, 1);
  directionFactorY = map(noise(random(0, 10)), 0, 1, -1, 1);
  angleFactor = random([-1, 0, 1]);
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
