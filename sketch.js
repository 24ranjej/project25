var dustbinB,dustbinL,dustbinR,dustbin,dustbinImage;
var ground;
var paper,paper2,paperImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 700);
	background("grey");

	ground = createSprite(700,680,1400,20);
	ground.shapeColor = color("brown");
	
	dustbin = createSprite(1000,1000,20,20);
	dustbin.addImage(dustbinImage);
	dustbinB = createSprite(1000,680,200,20);
	dustbinL = createSprite(900,650,20,100);
	dustbinR = createSprite(1100,650,20,100);

	paper = ellipse(56, 46, 55, 55);
	paper2 = createSprite(paper.x,paper.y,5,5);
	paper2.addImage(paperImage);
	Matter.Bodies.paper(56, 46, 55, [55], [55]);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinB.display();
  dustbinL.display();
  dustbinR.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

