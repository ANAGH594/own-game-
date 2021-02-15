var car,carimage 
var track,trackimage
var obstaclesGroup
var score=0

function preload(){
  carimage=loadImage("Images/hub.png")
  trackimage=loadImage("Images/track.jpg")
  obstacle1=loadImage("Images/ob1.jpg")
  obstacle2=loadImage("Images/ob3.png")
  obstacle3=loadImage("Images/ob4.png")

}

function setup() {
  createCanvas(1200,1200);
  track=createSprite(500,500,50,50)
  track.addImage(trackimage)
  
  
  car=createSprite(500,1000,20,20)
  car.addImage(carimage)
  car.scale=0.3
 
 

}






function draw() {
  background(255,255,255);
   if(keyDown(UP_ARROW)){
    // car.velocityY=-3
    track.y+=3
   }
   if (keyDown(DOWN_ARROW)){
     car.velocityY=3
   }
   if (keyDown(RIGHT_ARROW)){
     car.velocityX=3
   }
   if (keyDown(LEFT_ARROW)){
    car.velocityX=-3
  }
   if (track.y < 0){
    track.y = track.width/2;

   
  }
  spawnObstacle();
  drawSprites();
  textSize(30)
  fill("red") 
  text("Score: "+ score, 900,50);
  score = score + Math.round(getFrameRate()/60);
}

function spawnObstacle(){
    if (frameCount % 60 === 0){
    var posx = Math.round(random(100,700))
    var posy = Math.round(random(60,600))
      var obstacle = createSprite(posx,posy,10,40);

   var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
        
              break;
     
      case 2: obstacle.addImage(obstacle2);
        
              break;
      case 3: obstacle.addImage(obstacle3);
      
              break;
      default: break;
    }
    obstacle.scale=0.2
    obstacle.lifetime = 200;
    //obstaclesGroup.add(obstacle);
}
}