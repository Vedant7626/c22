//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 380, 400, 30, options);
    World.add(world, ground);

    var ball_options = {
        restitution: 0.9
    }

   ball=Bodies.circle(200,50,20,ball_options) ;
   World.add(world,ball);
}

function draw(){
    background(0);

    Engine.update(engine);

    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 30);

fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}