
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chaum;
var block1,block2;
var rotator1,rotator2,rotator3;
var angle1=60;
var angle2=60;
var angle3=60;
var bolinha1,bolinha2,bolinha3,bolinha4,bolinha5;

function preload(){
	
}

function setup() {
	createCanvas(550, 600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var bolinha_options={
		restitution:0.4,
		friction:0.02
	}
	//Crie os Corpos aqui.
	var plane_options={
		isStatic:true
	}
	chaum=Bodies.rectangle(600,height,1200,20,plane_options);
	World.add(world,chaum);

	block1=Bodies.rectangle(100,400,150,20,plane_options);
	World.add(world,block1);
	block2=Bodies.rectangle(400,400,150,20,plane_options);
	World.add(world,block2);

	rotator1=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator1);
	rotator2=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator2);
	rotator3=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator3);

	bolinha1=Bodies.circle(220,10,10,bolinha_options);
	World.add(world,bolinha1);
	bolinha2=Bodies.circle(220,10,10,bolinha_options);
	World.add(world,bolinha2);
	bolinha3=Bodies.circle(225,10,10,bolinha_options);
	World.add(world,bolinha3);
	bolinha4=Bodies.circle(230,10,10,bolinha_options);
	World.add(world,bolinha4);
	bolinha5=Bodies.circle(230,10,10,bolinha_options);
	World.add(world,bolinha5);




	rectMode(CENTER);
	fill("pink");
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");

  Engine.update(engine);
  
  rect(chaum.position.x,chaum.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20); 

  ellipse(bolinha1.position.x,bolinha1.position.y,10);
  ellipse(bolinha2.position.x,bolinha2.position.y,10);
  ellipse(bolinha3.position.x,bolinha3.position.y,10);
  ellipse(bolinha4.position.x,bolinha4.position.y,10);
  ellipse(bolinha5.position.x,bolinha5.position.y,10);

  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=8;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=9;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=7;


}



