var mainblock;
var sideblock1,sideblock2;
var tri1,tri2,tri3;


function setup() {
  createCanvas(800,600);

  mainblock=createSprite(380,400,350,380);

  sideblock1=createSprite(630,420,100,350);
  sideblock2=createSprite(130,420,100,350);
}

function draw() {
  background(0,0,0); 
  rectMode(CENTER);

  tri3=triangle(680,250,580,250,630,150);
  tri2=triangle(180,250,80,250,130,150);
  tri1=triangle(525,210,230,210,380,20);

  drawSprites();
}