let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let blocksW = 40;
let blocksH = 20;

let gridW = windowWidth / blocksW;
let gridH = windowHeight / blocksH;

let amountW = windowWidth / gridW;
let amountH = windowHeight / gridH;

let middle = 0;
let centershift = 0;


function setup() {
  // setup of the sketch
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(15);

}


function draw() {

  middle = mouseX;
  // here you draw to the screen
  background(255);

  let positionW = 0;
  let positionH = 0;
  for (let i = 0; i < amountW; i++) {

    if (positionW <= middle) {
      centershift += gridW;
    } else {
      centershift -= gridW;
    };

    line1 = new elementLine(positionW, positionH, centershift);
    line1.show();



    let positionH2 = positionH;
    for (let j = 0; j < amountH; j++) {
      line1 = new elementLine(positionW, positionH2, centershift);
      line1.show();
      positionH2 += gridH;
    }



    positionW += gridW;
  }

  centershift = 0;

}


class elementLine {

  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this, c = c;
  }

  show() {
    stroke(0);
    strokeCap(ROUND);
    let strokeW = map(centershift, 0, middle, 1, 10)
    strokeWeight(strokeW);
    //line(this.x + random(-centershift / 20, centershift / 20), this.y + random(-centershift / 20, centershift / 20), this.x + gridW + random(-centershift / 20, centershift / 20), this.y + gridH + random(-centershift / 20, centershift / 20));
    //console.log(map(noise(random(0, 100)), 0, 1, 0, 10));
    //console.log(map(noise(0.0001), 0, 1, 0, centershift))
    line(this.x + map(noise(random(0, 100)), 0, 1, 0, strokeW), this.y + map(noise(random(0, 100)), 0, 1, 0, strokeW), this.x + gridW + map(noise(random(0, 100)), 0, 1, 0, strokeW), this.y + gridH + map(noise(random(0, 100)), 0, 1, 0, strokeW));
  }
}