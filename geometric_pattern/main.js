var NUM_CIRCLES = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480, 600);

  frameRate(5);

  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;

  rVal = 565;
  gVal = 8;
  bVal = 200;
}

function draw() {
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      stroke(color(rVal, gVal, bVal));
      fill(color(rVal, gVal, bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;

    rVal = (rVal + 254) % 256;
    gVal = (gVal + 7) % 256;
    bVal = (bVal + 3) % 256;
  }
}
