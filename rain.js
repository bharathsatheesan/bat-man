class Rain{
    constructor(x, y){
        var options = {
            'density':0.3,
            'restitution':0.2,
            'friction':1.2
        }
        this.rain = Bodies.circle(x, y, 2.5, options);
        this.x = x;
        this.y = y;
        World.add(world, this.rain);
    }

    display(){
        var pos = this.rain.position;
        push();
        translate(pos.x, pos.y);
        fill("#afc3cc");
        ellipseMode(CENTER);
        ellipse(0, 0, 2.5*2, 2.5*2);
        pop();
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {
                x:random(0,400),
                y:random(0,400)
            });
        }
    }
}