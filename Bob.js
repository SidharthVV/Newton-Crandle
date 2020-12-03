class Bob {
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution' : 1,
            'fricton' : 1,
            'density' : 1.2
        }

        this.body = Bodies.circle(x,y,27,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('yellow');
        ellipse(0,0,27,27);
        pop();
    }
}