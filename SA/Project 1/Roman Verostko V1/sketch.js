let t = 0;


//let width = window.innerWidth;

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
  let moveUnitX = noise(t);
  let moveUnitY = noise(t*2);

  /*
  if(p1x <= 0 || p1y <= 0){
    moveUnitX = moveUnitX * 10;
    moveUnitY = moveUnitY * 10;
  }else if(p1x >= window.width || p1y <= window.height){
    moveUnitX = (moveUnitX -1) * 10;
    moveUnitY = (moveUnitY -1) * 10;
  }else{
    moveUnitX = (moveUnitX -0.5) * 10;
    moveUnitY = (moveUnitY -0.5) * 10;
  }*/

  moveUnitX = (moveUnitX -0.5) * 50;
    moveUnitY = (moveUnitY -0.5) * 50;
  

  //console.log(moveUnitX);
  stroke(200);
  noFill();
  beginShape();
    curveVertex(p1x,p1y);
    curveVertex(p2x,p2y);
    curveVertex(p3x,p3y);
    curveVertex(p4x,p4y);
    curveVertex(p5x,p5y);
    curveVertex(p6x,p6y);
    //curveVertex(p7x,p7y);
    //curveVertex(p8x,p8y);
  endShape();
  /*
  if(p1x <= 0 || p1y <= 0){
    t -= 0.01; 
  }else if(p1x >= window.width || p1y <= window.height){
    t -= 0.01; 
  }else{
    t += 0.01; 
  }*/

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

}