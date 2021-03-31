class Box {
  constructor (x,y,width,height) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density :1.0,
        //isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.visiblity =255;
    World.add(world, this.body);
    this.remove=false;
}
score(){
    if(this.visibility<0 && this.visibility>-105){
        score++;
    }
}

display(){
var pos = this.body.position;
var angle = this.body.angle;
if (this.body.speed<7) {
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2)
    rectMode(CENTER);
    rect(0,0, this.width, this.height)
    pop ();
} else {
    World.remove(world, this.body);
    push ();
        World.remove(world,this.body);
        this.visiblity = this.visiblity-5
        tint(255,this.visiblity)
       
    pop();
    if(this.remove===false){
        World.remove(world,this.body)  
        score=score+100;
        this.remove=true;
        }
}



}

}


