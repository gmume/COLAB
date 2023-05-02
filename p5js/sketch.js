let widthW = window.innerWidth;
let heightW = window.innerHeight;
let vec = [];


function setup(){
  createCanvas(widthW, heightW);

  background(0);
  frameRate(20);
  stroke(100, 100, 100, 100);
  strokeWeight(2);

  for(let i = 0; i <= 10; i += 2){

    vec[i] = createVector(widthW / 2 - widthW / 4 , heightW / 2 + i);
    vec[i + 1] = createVector(widthW / 2 + widthW / 4 , heightW / 2 + i);
    
    line(vec[i].x, vec[i].y, vec[i + 1].x, vec[i + 1].x);

  }

  console.log(vec);
  console.log("blubb");
}

function draw(){

}