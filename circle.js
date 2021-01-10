import { c} from './init.js'
import Utils from './utils.js'

function Circle(x,y,dx,dy,radius,color){
    Utils.call(this)
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

}

Circle.prototype = Object.create(Utils.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.draw = function(){
    c.beginPath()
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    c.fillStyle = this.color
    c.fill()
}

Circle.prototype.update = function(){
    if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy
    }
    console.log(this)
    this.x += this.dx
    this.y += this.dy
    this.draw()
}


Circle.prototype.startAnimation = function(){
    c.clearRect(0,0,innerWidth,innerHeight)
   requestAnimationFrame(this.startAnimation.bind(this))
    this.update()
}


export default Circle ;