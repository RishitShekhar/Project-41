class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic' : true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("images/Walking Frame/Walking_1.png","images/Walking Frame/Walking_2.png","images/Walking Frame/Walking_3.png", "images/Walking Frame/Walking_4.png","images/Walking Frame/Walking_5.png", "images/Walking Frame/Walking_6.png", "images/Walking Frame/Walking_7.png","images/Walking Frame/Walking_8.png")
        World.add(world,tis.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y + 70,300,300);
    }
}