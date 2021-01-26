//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies

//var aengine, world, 
var fairy , star , fairystar

function preload()
{
   fairyImg=loadImage ( "images/fairy1.png")
   starImg=loadImage ("images/starnight.png")
   fairystarImg = loadImage ("images/star.png")
}

function setup() {
  createCanvas(800, 750);
  //aengine=Engine.create()
  //world = aengine.world
                                                                            
  //JSON Format[javascript object notation]
  //var option = { isStatic : true||false   }

  fairy = createSprite(200,390,30,30)
  fairy.scale = 0.3
  fairy.addImage (fairyImg)
  //World.add(world,fairy)
  //var option2 = {restituition:0.0000000000000000000000001,friction:0.8,density:10}
  stars = createSprite(400,200,40,40)
  stars.addImage (starImg)
  fairystar = createSprite(750,50,40,40)
  fairystar.addImage (fairystarImg)
  fairystar.scale = 0.5
  //World.add(world,stars)

}


function draw() {
  background("black");
 //Engine.update (aengine)
 //rectMode(CENTER)
 //image(fairy.image,fairy.position.x,fairy.position.y,30,30)
 //ellipseMode(RADIUS)
 //image(stars.position.x,stars.position.y,40,40)
 fairy.depth = stars.depth+1
 /*if (fairy.x <= 400){
  fairystar.velocityX = -3
  fairystar.velocityY = 4
 }
 if(fairy.x > 400){
   fairystar.velocityY = 4
 }*/
 fairy.setCollider("circle",520,0,100)
 if (keyDown("RIGHT_ARROW")){
   fairy.x = fairy.x+3
 }
 if (keyDown("LEFT_ARROW")){
   fairy.x = fairy.x - 3
 }
 if (keyDown("DOWN_ARROW")){
   fairystar.velocityY = 6
 }
  if (fairystar.isTouching(fairy)){
    fairystar.velocityY = 0
  }

 drawSprites()
}
