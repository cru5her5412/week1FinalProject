function setup() {
  ScreenHeight = 200;
  ScreenWidth = 200;
  createCanvas(ScreenWidth, ScreenHeight);
  rectMode(CENTER);
  PX = width / 2;
  PY = height / 2;
  PAcc = 0;
}
function draw() {
  background(255);
  createPlayer();
  fallingBlock();
}
function createPlayer() {
  fill(0, 0, 255);
  rect(PX, PY, 20, 20);
  fill(255);
}
function fallingBlock() {
  if (PAcc > 7 || PAcc + 0.7 > 7) {
    PAcc = 7;
  } else {
    PAcc = PAcc + 0.7;
  }
  PY = PY + PAcc;
}
