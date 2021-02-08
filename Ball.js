class Ball{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
       
        World.add(world, this.body);
        Matter.Body.setDensity(this.body,1.5)
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("purple")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y,this.radius)
        
        pop();
      }
}