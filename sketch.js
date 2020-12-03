
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball1,ball2,ball3,ball4,ball5;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,100,300,20);

    ball1 = new Bob(290,350);
    ball2 = new Bob(344,350);
    ball3 = new Bob(398,350);
    ball4 = new Bob(452,350);
    ball5 = new Bob(506,350);

   /* rope1 = new Rope(ball1.body,{x:290,y:100})
    rope2 = new Rope(ball2.body,{x:344,y:100})
    rope3 = new Rope(ball3.body,{x:398,y:100})
    rope4 = new Rope(ball4.body,{x:452,y:100})
    rope5 = new Rope(ball5.body,{x:506,y:100})
    */

   rope1=new Rope(ball1.body,roof.body,-100,0);
   rope2=new Rope(ball2.body,roof.body,-50,0);
   rope3=new Rope(ball3.body,roof.body,0,0);
   rope4=new Rope(ball4.body,roof.body,50,0);
   rope5=new Rope(ball5.body,roof.body,100,0);


	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background('blue');
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position, {x:-100,y:-20});
  }
}



