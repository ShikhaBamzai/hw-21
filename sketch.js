
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Box1 = new Box(200,610,10,100);
	Box2 = new Box(500,610,10,100);
	Box3 = new Box(350,650,300,10);
    
	ball = new Ball(100,610, 50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  //Box1.display();
 // Box2.display();
  Box3.display();
  ball.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x: 30
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			, y:-100})
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
   
	   
	 }
   }



