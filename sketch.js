const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy;

function preload(){
    
}

function setup(){
   createCanvas(1000,1000);
   engine = Engine.create();
   world = engine.world;

   boy=new umbrella(500,800);
}

function draw(){
    Engine.update(engine);
    boy.display();
}   

