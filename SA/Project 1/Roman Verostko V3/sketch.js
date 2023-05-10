let t = 0;

let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2;

let baseCurve = [];

let borderLowX = 0.3;
let borderHighX = 0.7;
let borderLowY = 0.4;
let borderHighY = 0.6;

let r = 0;
let g = 0;
let b = 0;


function setup(){
  // setup of the sketch
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  frameRate(10);



  /// Define base curve semi randomly
  baseCurve[0] = window.innerWidth*borderLowX -20;
  baseCurve[1] = window.innerHeight/2;

  baseCurve[2] = window.innerWidth*borderLowX;
  baseCurve[3] = window.innerHeight / 2;

  baseCurve[4] = random(window.innerWidth*borderLowX, window.innerWidth/2);
  baseCurve[5] = random(window.innerHeight*borderLowY, window.innerHeight*borderHighY);

  baseCurve[6] = random(window.innerWidth*borderLowX, window.innerWidth*borderHighX);
  baseCurve[7] = random(window.innerHeight*borderLowY, window.innerHeight*borderHighY);

  baseCurve[8] = random(window.innerWidth/2, window.innerWidth*borderHighX);
  baseCurve[9] = random(window.innerHeight*borderLowY, window.innerHeight*borderHighY);

  baseCurve[10] = window.innerWidth*borderHighX;
  baseCurve[11] = window.innerHeight/2;

  baseCurve[12] = window.innerWidth*borderHighX +20;
  baseCurve[13] = window.innerHeight/2;

  
  r = random(130, 230);
  g = random(130, 230);
  b = random(130, 230);
  


}

function draw(){
  // here you draw to the screen

  stroke(r, g, b, (255-t*200));
  noFill();
  beginShape();
    for(let i = 0; i < baseCurve.length; i+=2){
      curveVertex(baseCurve[i], baseCurve[i+1]);
    };
  endShape();

  fill(0);

  for(let i = 0; i < baseCurve.length; i+=2){
    ellipse(baseCurve[i], baseCurve[i+1]);
  };


  let moveX = (mouseX - baseCurve[6]) * 0.05;
  let moveY = (mouseY - baseCurve[7]) * 0.05;
  //console.log(moveX, moveY);

  for(let i = 0; i < baseCurve.length; i+=2){
    baseCurve[i] = baseCurve[i] + moveX;
    baseCurve[i+1] = baseCurve[i+1] + moveY;
  };


  t += 0.01; 

}