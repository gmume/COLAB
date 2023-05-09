let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

let baseCurve = [];
let newCurve = [];
let allCurves = [];
let maxCurves = 400;

let borderLowX = 0.3;
let borderHighX = 0.7;
let borderLowY = 0.4;
let borderHighY = 0.6;

let strokeColor = 0;
let o = 0;
let opac = 0;

let r = 0;
let g = 0;
let b = 0;

let dynaX = 0;
let dynaY = 0;



function setup() {
  // setup of the sketch
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  frameRate(24);



  /// Define base curve semi randomly

  //nothing
  baseCurve[0] = window.innerWidth * borderLowX - 20;
  baseCurve[1] = window.innerHeight / 2;

  // start point
  baseCurve[2] = window.innerWidth * borderLowX;
  baseCurve[3] = window.innerHeight / 2;

  baseCurve[4] = random(window.innerWidth * borderLowX, window.innerWidth / 2);
  baseCurve[5] = random(window.innerHeight * borderLowY, window.innerHeight * borderHighY);

  //middle point
  baseCurve[6] = random(window.innerWidth * borderLowX, window.innerWidth * borderHighX);
  baseCurve[7] = random(window.innerHeight * borderLowY, window.innerHeight * borderHighY);

  baseCurve[8] = random(window.innerWidth / 2, window.innerWidth * borderHighX);
  baseCurve[9] = random(window.innerHeight * borderLowY, window.innerHeight * borderHighY);

  // end point
  baseCurve[10] = window.innerWidth * borderHighX;
  baseCurve[11] = window.innerHeight / 2;

  //nothing
  baseCurve[12] = window.innerWidth * borderHighX + 20;
  baseCurve[13] = window.innerHeight / 2;

  allCurves.push(baseCurve);


  r = random(130, 230);
  g = random(130, 230);
  b = random(130, 230);

  strokeColor = color(r, g, b);



}

function draw() {
  background(255);

  // dynamic curve
  //let dynaMouseX = (mouseX - baseCurve[6]) * 0.01;
  //let dynaMouseY = (mouseY - baseCurve[7]) * 0.01;
  let dynaMouseX = (mouseX - window.innerWidth / 2) * 0.01;
  let dynaMouseY = (mouseY - window.innerHeight / 2) * 0.01;

  dynaX = dynaX + dynaMouseX;
  dynaY = dynaY + dynaMouseY;

  console.log(dynaMouseX, dynaMouseY);

  //draw all curves
  for (let i = 0; i < allCurves.length; i++) {

    //fading opacity
    if(i <= maxCurves/2){
      opac = i*1.3;
    }else{
      opac = maxCurves/2 + (maxCurves/2 - i*1.3);
    };
    strokeColor.setAlpha(opac);
    stroke(strokeColor);
    noFill();
    beginShape();
    for (let j = 0; j < allCurves[i].length; j += 14) {
      //nothing
      curveVertex(allCurves[i][j], allCurves[i][j + 1]);

      //startpoint
      curveVertex(allCurves[i][j + 2], allCurves[i][j + 3]);

      curveVertex(allCurves[i][j + 4] + dynaX / 3, allCurves[i][j + 5] + dynaY / 3);

      //middlepoint
      curveVertex(allCurves[i][j + 6] + dynaX, allCurves[i][j + 7] + dynaY);

      curveVertex(allCurves[i][j + 8] + dynaX / 3, allCurves[i][j + 9] + dynaY / 3);

      //endpoint
      curveVertex(allCurves[i][j + 10], allCurves[i][j + 11]);

      //nothing
      curveVertex(allCurves[i][j + 12], allCurves[i][j + 13]);
    };
    endShape();
  };


  // define move unit for new curve
  let moveX = (mouseX - allCurves[allCurves.length - 1][6]) /** 0.02*/;
  let moveY = (mouseY - allCurves[allCurves.length - 1][7]) /** 0.02*/;

  moveX = map(moveX, -window.width/2, window.width/2, -8, 8);
  moveY = map(moveY, -window.height/2, window.height/2, -8, 8);

  console.log(moveX, moveY);
  //create new curve array
  if(allCurves.length < maxCurves){
    for (let i = 0; i < baseCurve.length; i += 2) {
      newCurve.push(allCurves[allCurves.length - 1][i] + moveX);
      newCurve.push(allCurves[allCurves.length - 1][i + 1] + moveY);
    };
  
    allCurves.push(newCurve);
  };
  
  newCurve = [];
}