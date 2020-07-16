const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    TowerBase = new Ground(400,250,100,20);

    stone = new Rock(200,200);

    brick1 = new Tower(410,240,20,20);
    brick2 = new Tower(430,240,20,20);
    brick3 = new Tower(450,240,20,20);
    brick4 = new Tower(470,240,20,20);
    brick5 = new Tower(490,240,20,20);

    brick11 = new Tower(420,220,20,20);
    brick12 = new Tower(440,220,20,20);
    brick13 = new Tower(460,220,20,20);
    brick15 = new Tower(480,220,20,20);

    brick21 = new Tower(430,200,20,20);
    brick22 = new Tower(450,200,20,20);
    brick23 = new Tower(470,200,20,20);
    
    brick31 = new Tower(440,180,20,20);
    brick32 = new Tower(460,180,20,20);

    brick41 = new Tower(450,160,20,20);

    catapult = new Catapult(stone,{x:200,y:180})
     






    
}

function draw(){
    background(0, 255, 246);
    Engine.update(engine);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50);

    TowerBase.display();
    stone.display();

    brick1.display();
    brick1.score();
    brick2.display();
    brick2.score();
    brick3.display();
    brick3.score();
    brick4.display();
    brick4.score();
    brick5.display();
    brick5.score();
    brick11.display();
    brick11.score();
    brick12.display();
    brick12.score();
    brick13.display();
    brick13.score();
    brick14.display();
    brick14.score();
    brick21.display();
    brick21.score();
    brick22.display();
    brick22.score();
    brick23.display();
    brick23.score();
    brick31.display();
    brick31.score();
    brick32.display();
    brick32.score();
    brick41.display();
    brick41.score();

    catapult.display();
        
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}

function keyPressed(){
    if(keyCode === 32){
        catapult.attach(bird.body);
    }
}

async function backgroundChange ()
{
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var wait = await response.json();
  var datetime = wait.datetime;
  console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour<=19 && hour>=6){
   background(255, 233, 0)
  }

  else
  {
   background(0,0,0);
  }

  

}