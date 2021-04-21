const World = Matter.world;
const Engine = Matter.engine;
const Bodies = Matter.bodies;

var engine, world, umbrella, rand, night;
var drops = [];
var maxDrops = 100;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame = 0;


function preload(){
    // the link for images is not working so I could not upload them
}

function setup(){
   var canvas = createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
       drops.push(new createDrops(random(0,500), random(0,500)))
   }
}

function draw(){
    background(night);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30),10,10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break;
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }
    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

