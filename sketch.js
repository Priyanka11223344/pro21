var bullet;
var speed;
var weight;
var damage;
var thickness;
var wall;

function setup() {
  createCanvas(1600,400);
  
 bullet = createSprite(50,150,20,10);
 bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}
  
 function draw() {
  background("brown");

  bullet.velocityX = speed;
  //bulllet.collide(wall);
  hasCollided(wall,bullet);
  Damage();
  drawSprites();
}


function Damage() {
   if(hasCollided(wall,bullet)){
     bullet.velocityX = 0;
   damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/Thickness*Thickness *Thickness;
   if(damage > 10) {
  wall.shapeColor = "red";
   }
   if(damage < 10){
  wall.shapeColor = "green";
   }
  }
}

function hasCollided(object1,object2){
  if (object1.x - object2.x < object1.width /2 + object2.width /2 
    &&object2.x - object1.x < object1.width /2 + object2.width /2 < 
      object1.y - object2.y < object1.height/2 + object2.height/2 
    &&object2.y - object1.y < object1.height/2 + object2.height/2){
     return true
    }
    return false
}