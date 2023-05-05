let t = 0;


//let width = window.innerWidth;

let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2;

let p1x = 0;
let p1y = 0;

let p2x = 0;
let p2y = 0;

let p3x = 0;
let p3y = 0;

let p4x = 0;
let p4y = 0;

let p5x = 0;
let p5y = 0;

let p6x = 0;
let p6y = 0;

let p7x = 0;
let p7y = 0;

let p8x = 0;
let p8y = 0;

let borderLow = 0.3;
let borderHigh = 0.7;

let innerCanvasX = window.innerWidth * (borderHigh - borderLow);
let innerCanvasY = window.innerHeight * (borderHigh - borderLow);

let posX = window.innerWidth * borderLow;
let posY = window.innerHeight * borderLow;

let rectCenterX = posX + innerCanvasX/2;
let rectCenterY = posY + innerCanvasY/2;



function setup(){
  // setup of the sketch
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  frameRate(10);

  p1x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p1y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p2x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p2y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p3x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p3y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p4x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p4y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p5x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p5y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p6x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p6y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p7x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p7y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

  p8x = random(window.innerWidth*borderLow, window.innerWidth*borderHigh);
  p8y = random(window.innerHeight*borderLow, window.innerHeight*borderHigh);

}

function draw(){
  // here you draw to the screen


  let noiseX = noise(t) - 0.5;
  let noiseY = noise(t*2) -0.5;

  let staticX = noise(t);
  let staticY = noise(t*2);

  let moveUnitX = noiseX * 50;
  let moveUnitY = noiseY * 50;

  stroke(200);
  noFill();
  beginShape();
    curveVertex(p1x,p1y);
    curveVertex(p2x,p2y);
    curveVertex(p3x,p3y);
    curveVertex(p4x,p4y);
    curveVertex(p5x,p5y);
    curveVertex(p6x,p6y);
    curveVertex(p7x,p7y);
    //curveVertex(p8x,p8y);
  endShape();

 


  t += 0.01; 

  p1x += moveUnitX;
  p1y += moveUnitY;

  p2x += moveUnitX;
  p2y += moveUnitY;

  p3x += moveUnitX;
  p3y += moveUnitY;

  p4x += moveUnitX;
  p4y += moveUnitY;

  p5x += moveUnitX;
  p5y += moveUnitY;

  p6x += moveUnitX;
  p6y += moveUnitY;

  p7x += moveUnitX;
  p7y += moveUnitY;

  p8x += moveUnitX;
  p8y += moveUnitY;

  posX += moveUnitX;
  posY += moveUnitY;

  rectCenterX = posX + innerCanvasX/2;
  rectCenterY = posY + innerCanvasY/2;

}