class Drops{
    constructor(x,y,width,height){
var options ={
friction = 0.1
}
}
    }
    display(){
        this.body = Bodies.rectangle(x, y, width, height,options)
        this.width = width
        this.height = height
        World.add(world, this.body)
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
}