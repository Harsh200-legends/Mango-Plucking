const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeImage,tree;
var boyImage,boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var ground1;
var stone1;
var shot;


function preload(){
	boyImage=loadImage("boy.png");
	treeImage=loadImage("tree.png");
}
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    boy=createSprite(250,400,300,300);
	boy.scale=0.1;
	boy.addImage(boyImage);

    tree=createSprite(1000,280,300,300);
	tree.scale=0.5;
	tree.addImage(treeImage);

	ground1=new Ground(650,580,1400,10);
	
	
    mango1=new Mango(1000,100,60,60);
	mango2=new Mango(1000,200,60,60);
	mango3=new Mango(1200,150,60,60);
	mango4=new Mango(870,200,60,60);
	mango5=new Mango(1100,80,60,60);
	mango6=new Mango(1150,210,60,60);

    stone1=new Stone(150,400,50,50);

    shot=new SlingShot(stone1.body,{x: 200, y: 350});
	Engine.run(engine);

}

function draw() {

  background(230);
 
  ground1.display();
 tree.display();
 boy.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 stone1.display();
 shot.display();
 

 
 detectCollision(stone1,mango1);
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 detectCollision(stone1,mango6);

 fill("red");
 text("PRESS SPACE TO GET ONE MORE CHANCE",200,20);
 noFill();
 

}

function mouseDragged(){

   Matter.Body.setPosition(stone1.body,{x:mouseX,y: mouseY});

}

function mouseReleased(){
    
    shot.fly();
   
  
}

function detectCollision(lstone,lmango){
 stoneBodyPosition=lstone.body.position
 mangoBodyPosition=lmango.body.position

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.width+lstone.width){
	 Matter.Body.setStatic(lmango.body,false);
 }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x: 200,y: 380});
		shot.attach(stone1.body);

		
	}
}