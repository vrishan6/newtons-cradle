class  slingshot{
    constructor(body1,body2,point2){
        this.chain =  Constraint.create({
            bodyA: body1 ,
            bodyB: body2,
            pointB: point2,
            stiffness: 0.1,
            length: 300
        })

        World.add(world,this.chain)
    }

    display(){
        // null means false, and a value means true
        if(this.chain.bodyA){
            var body1 = this.chain.bodyA.position
            var body2 = this.chain.bodyB.position
            var point2 = this.chain.pointB
            push()
            stroke("brown")
            strokeWeight(7)
            line(body1.x,body1.y,body2.x + point2.x, body2.y+point2.y)
            pop()
        }
    }

   
}