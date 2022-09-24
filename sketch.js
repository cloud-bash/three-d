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
  // sphere(width)
  ellipsoid(width,300)
  if(rotate){
    angle += 0.005;
  } else if(!rotate) {
    angle -= 0.005;
  }
}

function mouseClicked() {
  rotate = !rotate
}