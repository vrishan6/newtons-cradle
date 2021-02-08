
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
   roof = new Roof(400,100,800,20)
   ball1 = new Ball(200,600,40)
   chain1 = new slingshot(ball1.body,roof.body,{x:-200,y:0})

   
   ball2 = new Ball(250,600,40)
   chain2 = new slingshot(ball2.body,roof.body,{x:-110,y:0})

   
   ball3 = new Ball(300,600,40)
   chain3 = new slingshot(ball3.body,roof.body,{x:-20,y:0})

   
   ball4 = new Ball(350,600,40)
   chain4 = new slingshot(ball4.body,roof.body,{x:70,y:0})

   
   ball5 = new Ball(400,600,40)
   chain5 = new slingshot(ball5.body,roof.body,{x:160,y:0})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   roof.display()
   ball1.display()
   chain1.display()

   ball2.display()
   chain2.display()
   ball3.display()
   chain3.display()
   ball4.display()
   chain4.display()
   ball4.display()
   chain4.display()
 
}
  
function keyPressed(){
   if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-300,y:-300} )
   }

   if(keyCode === DOWN_ARROW){
      Matter.Body.applyForce(ball4.body, ball1.body.position, {x:300,y:300} )
   }
}



