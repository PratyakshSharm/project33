const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var backgroundImage;
var engine,world,snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9;
var snow10;
var snow11;
var snow12;
var snow13;
var snow14;
var snow15;
var snow16;
var snow17;
var snow18;
var snow19;
var snow20;
var snowParticles=[];
function preload(){
  backgroundImage=loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  
  world=engine.world;
//   snow1=new Snow(100,50,20);
//  snow2=new Snow(120,40,20);
//  snow3=new Snow(140,90,20);
//   snow4=new Snow(80,20,20);
//  snow5=new Snow(100,200,20);
//   snow6=new Snow(150,45,20);
//   snow7=new Snow(95,80,20);
//  snow8=new Snow(50,65,20);
//  snow9 = new Snow(550,80,20)
//  snow10=new Snow(500,350,20);
//  snow11=new Snow(400,100,20);
//  snow12=new Snow(300,150,20);
//  snow13=new Snow(290,180,20);
//  snow14=new Snow(700,390,20);
//  snow15=new Snow(200,300,20);
//  snow16=new Snow(230,330,20);
//  snow17=new Snow(390,30,20);
// snow18=new Snow(340,10,20);
//  snow19=new Snow(75,65,20);
//  snow20=new Snow(85,95,20);


 for (var count=1;count<=40;count++){

  
  snowParticles[count-1] = new Snow(random(50,700),random(20,400),random(10,20));


 }


 
  


 
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  for (var count=1;count<=40;count++){

  
    snowParticles[count-1] .display();
    snowParticles[count-1] .update();
  //console.log(count);
  
   }
   
   
  
  //drawSprites();
  // snow1.display();
  // snow2.display();
  // snow3.display();
  // snow4.display();
  // snow5.display();
  // snow6.display();
  // snow7.display();
  // snow8.display();
  // snow9.display();
  // snow10.display();
  // snow11.display();
  // snow12.display();
  // snow13.display();
  // snow14.display();
  // snow15.display();
  //  snow16.display();
  //  snow17.display();
  //  snow18.display();
  //  snow19.display();
  //  snow20.display();
}