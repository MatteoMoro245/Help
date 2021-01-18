var bob, bobImage, bobR, bobI;
var ground, end, cloud, cloudImage, land1, land2;
var fireCrab, sawHand, eyeBomb;

var score;

//var gameState = MENU;
//var gameState = PLAY;
//var gameState = RESET;

function preload(){
    bobImage = loadImage("bob/sprite_00.png");
    //cloudImage = loadImage("other/sprite_0.png");
    //bobR = loadAnimation("bob/bob01.png","bob/bob02.png","bob/bob03.png");
    //cloud = loadAnimation("Other/sprite_0.png");
}
function setup(){
    createCanvas(800, 800);

    ground = createSprite(400,790,800,40);
    ground.shapeColor="brown";

    land1 = createSprite(600,700,100,10);
    land2 = createSprite(200,700,100,10);

    bob = createSprite(20,750,40,40);
    bob.addImage(bobImage);
}
function draw(){
    background("blue");
    
    if(keyDown(RIGHT_ARROW)){
        bob.velocityX = +10;
    }

    if(keyDown(LEFT_ARROW)){
        bob.velocityX = -10;
    }
    if(keyDown("space") && bob.y >= 159) {
        bob.velocityY = -12;  
    }
        
        bob.velocityY = bob.velocityY + 0.8
        bob.collide(ground);

        //if (ground.x < 0){
        //ground.x = ground.width/2;
    //spawnClouds();
    drawSprites();
    }


function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,100,50);
      cloud.y = Math.round(random(80,120));
      //cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = bob.depth;
      bob.depth = bob.depth + 1;
      
    }
}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(600,165,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -(6 + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                break;
        case 6: obstacle.addImage(obstacle6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
  
  //function reset(){
    //gameState = PLAY;
    //gameOver.visible = false;
    //restart.visible = false;
    
    //obstaclesGroup.destroyEach();
    //cloudsGroup.destroyEach();
    
    //trex.changeAnimation("running",trex_running);
    
    //if(localStorage["HighestScore"]<score){
      //localStorage["HighestScore"] = score;
    //}
    //console.log(localStorage["HighestScore"]);
    
    //score = 0; 
  //}