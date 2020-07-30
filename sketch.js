const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var display = []
var plinkos =[]
var divisions = []
var p1,g1,g2
function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  p1= newparticle(200,100);
  g1= newGround(200,600,400,20)
  g2 = newGround(0,height/2,20,height)
  g3 = newGround(width,height/2,20,height)
  createPlinkos()
  Engine.run(engine);
}

function draw() {
  background(0);  
  displayAll(display);
  showDivisions();
  
}
function keyPressed(){
  if(keyCode== 32){
  newparticle(random(50,width-50),50)
  }
}
