
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var paper, paperObject,dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	
 groundSprite=createSprite(width/2,380,width,10);
 groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
 ground = Bodies.rectangle|(width/2,380,width,10,{isStatic:true});
 World.add(world,ground);
 dustbin = new Dustbin(1000,325,50,50);
 paper = new Paper(250,358,20,20)

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("yellow");
  drawSprites();
Engine.update(engine);
dustbin.display();
paper.display();
//ground.display();

 
}


function KeyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	}
  }
  
