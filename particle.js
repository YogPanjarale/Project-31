class Particle{
    constructor(x, y,isstatic = false,w=20) {
        var options = {
            isStatic:isstatic,
            'restitution':0.8,
            'friction':0.3,
            'density':0.1,
            
        }
        this.body = Bodies.circle(x, y,w/2, options);
        this.width = width;
        this.height = height;
        this.w = w;
        this.bool = isstatic
        if(!this.bool){
          var r = random(100,255);
          var  g = random(100,200); 
          var  b = random(100,200); 
          var  a = random(200,255); 
         
           this.color =[r,g,b,a];
           }
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
       
        if(this.bool){fill(255)}
        else{
          
          fill(this.color[0],this.color[1],this.color[2],this.color[3])
        }
        ellipse(0, 0, this.w)
        pop();
      }
}