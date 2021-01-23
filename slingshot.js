class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:100, y:200});
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
       
    }
    
}