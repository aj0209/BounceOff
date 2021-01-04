var rect1, rect2;

function setup() {
  createCanvas(800,600);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400,500,30,40);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "red";
  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(255,255,255);
  if(rect1.y - rect2.y < (rect1.height + rect2.height)/2 && rect2.y - rect1.y < (rect1.height + rect2.height)/2){
    rect1.velocityY = 0 - rect1.velocityY;
    rect2.velocityY = 0 - rect2.velocityY;
  }  
  drawSprites();
}