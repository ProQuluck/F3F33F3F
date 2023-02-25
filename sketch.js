var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var boy_running
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

  boy_running = loadAnimation("boystop.gif");

  ground = loadImage("ground.gif")
}


function setup() {
  createCanvas(600, 200);
  ground = createSprite(300,300);
  ground.addImage("ground",ground);
  ground.velocityY = 1;
  
  boy = createSprite(50,160,20,50);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.5

}


function draw() {
  background(200);
  
  if(ground.y > 400){
      ground.y = 300
    }

    if(keyDown("space")&& boy.y >= 120) {
      boy.velocityY = -12;
    }
    drawSprites()
}
