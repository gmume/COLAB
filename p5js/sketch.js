let rot = 0;
let x = 0;
let y = 0;
let angle = 0;

let countUpX = 0;
let countUpY = 0;
let myMatrix;

// let sliderX;
// let sliderY;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

  background(0);
  frameRate(10);
  stroke(100, 100, 100, 100);
  strokeWeight(1);
  noFill();

  // sliderX = createSlider(0.001, 1, 0.01, 0.01);
  // sliderX.position(10, 10);
  // sliderX.style('width', width / 10 + "px");

  // sliderY = createSlider(0.001, 1, 0.01, 0.01);
  // sliderY.position(10, 30);
  // sliderY.style('width', width / 10 + "px");
}

function draw(){

  rotate(angle);
  bezier(width / 2 - 40, height / 2 - 40, width / 2 + 80, height / 2 - 80, width / 2 + 200, height / 2 + 10, width / 2 + 40, height / 2 +40);

  angle += 0.001;
  console.log("frameCount: "+frameCount);
}
