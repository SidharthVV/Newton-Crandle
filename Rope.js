class Rope{
    constructor(bodyA,bodyB,XOffset,YOffset){
        this.XOffset=XOffset;
        this.YOffset=YOffset;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.XOffset,y:this.YOffset}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(3);

        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;

        var anchor2X=pointB.x+this.XOffset;
        var anchor2Y=pointB.y+this.YOffset;

    line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
}


/*class Rope {
    constructor(bodyA,pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
        }
         this.pointB = pointB
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
*/