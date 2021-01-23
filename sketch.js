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

	//Create the Bodies Here.
	stoneObj = new Stone(235,420,30);
	block8 = new Block(330,235,30,40);
	block9 = new Block(360,235,30,40);
	block10 = new Block(390,235,30,40);
	block11 = new Block(420,235,30,40);

	//level 3

	block13 = new Block(360,195,30,40);
	block14 = new Block(390,195,30,40);
	block15 = new Block(420,195,30,40);
	//top
	block16 = new Block(390,155,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  slingShot.display();
  

  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		slingShot.attach(this.polygon);
	}
}
