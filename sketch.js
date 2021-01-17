var left, right;

function setup() {
  createCanvas(800,400);
  
  left = createSprite(100, 200, 50, 50);
  left.shapeColor = "green";

  right = createSprite(400, 200, 100, 50);
  right.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  right.x = mouseX;
  right.y = mouseY;
  if(right.x - left.x < left.width/2 && left.x - right.x < right.width/2 && right.y - left.y < left.height/2 && left.y - right.y < right.height/2){
    left.shapeColor = "red";
    right.shapeColor = "red";
}
else{
right.shapeColor = "blue";
left.shapeColor = "green";
}

console.log(right.x);

  drawSprites();
}