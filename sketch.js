const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world , object;
var particles = [];
var plinkos = [];
var divisions=[];
var ground;
var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState =  "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text ("500" , 20 , 550);
  text ("500" , 100 , 550);
  text ("500" , 180 , 550);
  text ("200" , 260 , 550);
  text ("100" , 340 , 550);
  text ("100" , 420 , 550);
  text ("200" , 500 , 550);
  text ("500" , 580 , 550);
  text ("500" , 660 , 550);
  text ("500" , 740 , 550);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   if (particle!= null){
      particle.display(); 
       if (particle.body.position.y>780){
           if (particle.body.position.x<220 && particle.body.position.x>0 ){
             score=score+500;
             particle=null;
           }
           else if (particle.body.position.x>221 && particle.body.position.x<300 ){
            score=score+200;
            particle=null;
           }
           else if (particle.body.position.x>301 && particle.body.position.x<460 ){
            score=score+100;
            particle=null;
          }
          else if (particle.body.position.x>461 && particle.body.position.x<540 ){
            score=score+200;
            particle=null;
          }
          else if (particle.body.position.x>541 && particle.body.position.x<800 ){
            score=score+500;
            particle=null;
          }
       }  
      
   }

   if (count>=5){
     gameState="end";
   }

   if (gameState==="end"){
     textSize(50);
     fill("red")
     text("GAME OVER" , 250,450);
   }
   
}

function mousePressed(){
  
  if (gameState==="play"){
    count++;
    particle=new Particle(mouseX,10,10,10);
    //console.log("hi")
  }
}

