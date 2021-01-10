import canvas from './init.js'
import Circle from './circle.js'
import MultipleCirclesAnimation from './multiplecircle.js'
let gravity = 1
let friction = 0.9

function Gravity(x,y,dx,dy,radius,color,gravity,friction){

        Circle.call(this,x,y,dx,dy,radius,color)
        this.friction = friction
        this.gravity = gravity

}
Gravity.prototype = Object.create(Circle.prototype)
Gravity.prototype.constructor =  Gravity


Gravity.prototype.update = function(){

    if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy * this.friction

    }
    else{
        this.dy += this.gravity 
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
}

function MultipleGravity(count,maxRadiusForCircle,maxSpeed,gravity,friction){

    MultipleCirclesAnimation.call(this,count,maxRadiusForCircle,maxSpeed)
    
}
MultipleGravity.prototype = Object.create(MultipleCirclesAnimation.prototype)
MultipleGravity.prototype.constructor = MultipleGravity


MultipleGravity.prototype.update = function(){

    if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy * friction

    }
    else{
        this.dy += gravity 
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
    //console.log(this)
}

function init(){
    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let gravityballs = new Gravity(100,200,1,3,30,'red',1,0.9)
        gravityballs.startAnimation()
    })
}

init()
let gravityballs = new MultipleGravity(50,50,3,1,0.8)
console.log(gravityballs)
gravityballs.startMultipleAnimation()