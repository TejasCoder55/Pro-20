var cat;
var garden;
var mouse;
var catImg;
var gardenImg1;
var gardenImg2;
var gardenImg3;
var mouseImg1;
var mouseImg2;
var mouseImg3;




function preload() {

gardenImg = loadImage("images/garden.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3 = loadAnimation("images/mouse4.png");
catImg1=loadAnimation("images/cat1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600);
    cat.addAnimation("CatSleeping",catImg1);
    cat.scale=0.1;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;

 
    //create tom and jerry sprites here

    

}

function draw() {

    background(gardenImg);

    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
cat.velocityX=0;
cat.addAnimation("catWalking",catImg3);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("catWalking");
mouse.addAnimation("mouselast",mouseImg2);
mouse.scale=0.1;
mouse.changeAnimation("mouselast");

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseteasing",mouseImg2);
mouse.frameDelay=25;
mouse.changeAnimation("mouseteasing");


    }
  //For moving and changing animation write code here


}
