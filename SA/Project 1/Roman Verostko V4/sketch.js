let t = 0;

let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2;

let baseCurve = [];
let newCurve = [];
let allCurves = [];

let borderLowX = 0.3;
let borderHighX = 0.7;
let borderLowY = 0.4;
let borderHighY = 0.6;

let strokeColor = 0;
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

  allCurves.push(baseCurve);


  r = random(130, 230);
  g = random(130, 230);
  b = random(130, 230);

  strokeColor = color(r, g, b);
  
  
  //console.log(allCurves);

}

function draw(){
  background(255);

  //draw all curves
  for(let i = 0; i < allCurves.length; i++){

    //fading
    strokeColor.setAlpha(255 - map(i, 0, 100, 0, 255));
    stroke(strokeColor);
    noFill();

    beginShape();
      for(let j = 0; j < allCurves[i].length; j+=2){
        curveVertex(allCurves[i][j], allCurves[i][j+1]);
      };
    endShape();
  };

  // define move unit for new curve
  let moveX = (mouseX - allCurves[allCurves.length-1][6]) * 0.05;
  let moveY = (mouseY - allCurves[allCurves.length-1][7]) * 0.05;

  //create new curve array
  for(let i = 0; i < baseCurve.length; i+=2){
    newCurve.push(allCurves[allCurves.length-1][i] + moveX);
    newCurve.push(allCurves[allCurves.length-1][i+1] + moveY);
  }

  allCurves.push(newCurve);
  newCurve = [];


  t += 1;

}