class umbrella{
    constructor(x,y){
        var option={
            isStatic=true
        }
     this.body = Bodies.rectangle(x,y,width,height,option);
      this.width =20;
      this.image=loadImage("boy.png");
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
       
      }
}