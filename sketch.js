var prefondo
var buton
var postfondo
var retrybuton
var fondo
var shooter
var gun 
var enemy
var barrera
var shot
var gameState=0
var shutsound

var score=0
var vidas=5
function preload(){
 
}
function setup(){
  createCanvas(windowWidth, windowHeight)
nave=createSprite(windowWidth/2, windowHeight/2+200)
gunGroup=new Group();
gun=createSprite(nave.x,nave.y,10,20)


}
function draw(){
background('blue')
if(frameCount%5===0){
  gun=createSprite(nave.x,nave.y,10,20)
  
  gun.velocityY=-20
  
  
}
if(gun.y>windowHeight/2+200){
  gun.destroy()
}
nave.x=World.mouseX
//shoot();
  drawSprites()
}






