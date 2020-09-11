class Chain {
    constructor(bodyA,bodyB) {
      var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.4
      }
      this.body=Constraint.create(options);
      this.bodyA=bodyA;
      this.bodyB=bodyB;
      World.add(world,this.body);
      
    }
    display(){
      line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
    }
}