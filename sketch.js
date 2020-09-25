const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageBody,ground
var rect1,rect2,rect3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(100,650, 40,40);
	packageSprite.shapeColor = color("blue");

	rect1 = new Box(520,610,20,100);

	rect2 = new Box(660,610,20,100);

	rect3 = new Box(590,655,150,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(100 , 650 , 50 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  moveForward();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();

}

function moveForward(){
	if(keyDown("UP_ARROW")){
		Body.setStatic(packageBody,false);
		Matter.Body.applyForce(packageBody.x,packageBody.y,position,{x:85,y:85})
	}
}


