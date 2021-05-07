class Snow{
    constructor(x,y,r){

        this.x=x;
        this.y=y;
        this.r=r;
        var options={
            friction:0.5,
            density:0.8
           // isStatic:true
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image= loadImage("snow5.webp");

    }
    display(){

        imageMode (CENTER);
    image (this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }

    update(){
        if (this.body.position.y>=400){
            //this.body.y = random(20,400);
        //this.body.x = random(20,790);
        Matter.Body.setPosition(this.body,{x:random(50,750),y:random(20,400)})
        }

       

    }

}