const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var scenaryImg
var particle=[]
function preload(){

scenaryImg=loadImage("images/scenary.jpg")

}
function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
// Create Bodies here down
  ground1=new Ground(600,650,650,20)
  stand1=new Ground(915,390,20,500)
  stand2=new Ground(285,390,20,500)
  row1=new Ground(400,590,10,100)
  row2=new Ground(500,590,10,100)
  row3=new Ground(600,590,10,100)
  row4=new Ground(700,590,10,100)
  row5=new Ground(800,590,10,100)
}

function draw() {
  background(scenaryImg); 
   fill("black")
  text(mouseX + ',' + mouseY, 30, 45); 
  drawSprites();
ground1.display()
stand1.display()
stand2.display()
row1.display()
row2.display()
row3.display()
row4.display()
row5.display()

//particle creation
if (frameCount%30===0)
{
particle.push(new Particle())
}
//particle display
for(var i=0;i<particle.length;i++)
{
particle[i].display()

}

}