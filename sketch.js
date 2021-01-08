
var monkey , monkey_running,ground;
var banana ,bananaImg, obs, obsImage;
var bananaGroup, obsGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg  = loadImage("banana.png");
  obsImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(500,500);
  
  monkey=createSprite(150,390,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(250,450,700,10);
  ground.velocityX=-4;
  
  bananaGroup=createGroup();
  
}


function draw() {
  background("white");
  
  
  
  
  survivalTime=Math.round(frameCount%frameRate())
  textSize(20);
  fill("black")
  text("Survival Time: "+survivalTime,200,20)
  
  if(ground.x<200){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  obstacles();
  food();
  drawSprites();
}


function food(){
  
  if(frameCount%80===0){
    banana=createSprite(500,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImg);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
  }
  
 // bananaGroup.add(banana);
}

function obstacles(){
  if(frameCount%100===0){
    obs=createSprite(500,415,10,10);
    obs.addImage(obsImage);
    obs.velocityX=-4;
    obs.scale=0.2;
    obs.lifetime=100;
    
  }
}

