class Paper {
    constructor(x, y,width) {
      var options = {
  
  isStactic:false,
      
        restitution:0.3,
         friction:0.5,
         density:1.2
      }
      this.body = Bodies.circle(x, y,width, options);
      this.width = width;
      this.x=x;
      this.y=y;
   //   this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipseMode(CENTER);
      fill("red");
      stroke("yellow");
      strokeWeight(2);
     ellipse(0, 0,this.width,this.width);
      pop();
    }
  };