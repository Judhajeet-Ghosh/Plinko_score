const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var division=[];
var ground;
var rows;

score = 0;

var rowsHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  


  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    division.push(new Division(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(255);
  if(frameCount % 100 === 0){
    particle = new Particle(random(150, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  text("SCORE: "+ score,10,30)

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<division.length;k++){
    division[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


 if(particles.x === 15){
score = score + 500
}

if(particles.x === 95){
  score = score + 500
}

if(particles.x === 95+80){
score = score + 500
}

if(particles.x === 95+160){
score = score + 100
}

if(particles.x === 95+240){
score = score + 100
}

if(particles.x === 95+240+80){
score = score + 100
}

if(particles.x === 95+240+160){
score = score + 100
}

if(particles.x === 95+320+160){
 score = score + 200
 }

 textSize(32);
 text("500",15,400);
 text("500",95,400);
 text("500",95+80,400);
 text("100",95+160,400);
 text("100",95+240,400);
 text("100",95+240+80,400);
 text("100",95+240+160,400);
 text("200",95+320+160,400);

 



//rows.display();
 ground.display();

  drawSprites();
}

