const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  circle1,ground,ground2;	
var engine,world,sling;
var score=0;
var backgroundImg, bg;

function preload(){
  getTime();
}

function setup() {

 var canvas = createCanvas(1600,700);
engine = Engine.create();
  world = engine.world;

  ground2 = new Ground(width/2+1, height/2+350, 1600, 60);

ground=new Ground(400,400,280,20)
 	World.add(world, ground);

  
 	box1=new Box(310,370,30,40)

box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)

box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40)


circle1=new Circle(100,250,30)

	
	sling =new Slingshot (circle1.body,{x:120,y:180})

Engine.run(engine);
	
  
}


function draw() {
  if(backgroundImg)

  background(backgroundImg);  
Engine.update(engine);
fill("blue");
textSize (30);
text("Drag the mouse and then release to destroy the blocks",400,40);
text("GOOD LUCK!!",550,100);
fill("yellow");
text("press space for a second chance!!",900,590);
text("SCORE:"+score,width-400,200);


  circle1.display();
  sling.display();
  fill ("red")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  fill("orange")
  box8.display()
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box8.score()
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  fill("yellow")
  box13.display();
  box14.display();
  box15.display();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  fill("lime");
  box16.display();
  ground.display();
  //circle1.display();
  ground2.display();
  drawSprites();

 
}

 
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }
  function keyPressed(){
    if(keyCode===32){
    sling.attach(circle1.body)
    }
  }
  async function getTime(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
  
    if(hour >= 06 && hour <= 18){
      bg = ("purple");
    } else{
      bg = ("black");
    }
  
    backgroundImg = bg;
  }