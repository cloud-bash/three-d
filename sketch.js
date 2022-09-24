let img;
let angle = 0;
let rotate = true;

function preload(){
  img = loadImage("images/sunrise1.png");
}

function setup() {
  frameRate(100)
  image(img, 0, 0);
  createCanvas(windowWidth, windowHeight, WEBGL);
  textureMode(NORMAL);
}

function draw() {
  background(220);
  texture(img);
  // box(45);
  // rotateY(180);
  // rotateZ(180);
  rotateY(angle);
  // sphere(200)
  ellipsoid(width,300)
  // beginShape();
  // vertex(-100, 0, 0, 0, 0);
  // vertex(-100, 0, 0, 1, 0);
  // vertex(100, 100, 0, 1, 1);
  // vertex(0, 100, 0, 0, 1);
  // endShape(CLOSE);
  if(rotate){
    angle += 0.005;
  } else if(!rotate) {
    angle -= 0.005;
  }
  // beginShape();
  // vertex(100,23,-100);
  // vertex(200,23,-50);
  // vertex(150, 45,-100);
  // vertex(50, 45,-100);
  // vertex(-60, -40,-200);
  // endShape();
}

function mouseClicked() {
  rotate = !rotate
}