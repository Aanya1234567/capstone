class Ball {
    constructor(x,y) {
      var options = {
          'restitution':0.3,
          'frictionAir':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,40, options);
      this.radius=40
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill("purple");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  