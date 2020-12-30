const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    Ground = new ground(400,390,10,400)
}

function draw() {
  background(0); 
  Engine.update(engine);
  
 Ground.display();
  
  drawSprites();
}