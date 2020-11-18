class Side{
 constructor(x,y,width,height){
    this.side=Bodies.rectangle(x,y,width,height);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world,this.side);
}   


display(){
    Engine.update(engine);
    rectMode(CENTER);
    fill("red");
    rect(this.position.x,this.position.y,this.width,this.height);
}
}