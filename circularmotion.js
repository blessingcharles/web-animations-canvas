import Circle from './circle.js'
import {randInt , randomColors , mousePosition , addMouseCapturingEvents}from './utils.js'
import canvas , {c} from './init.js'

let particles = []

function Particle(x,y,dx,dy,radius,color){
    Circle.call(this,x,y,dx,dy,radius,color)
    this.radians = Math.random() * Math.PI * 2
    this.velocity = 0.05
    this.initialPosition = {x:x
                        ,y:y}
    this.lastPosition = {x:x
        ,y:y}
    this.randomDistance = randInt(10,50)
}

Particle.prototype.update = function(){

    this.radians += this.velocity

    //storing the value before updating
    this.lastPosition.x = this.x
    this.lastPosition.y = this.y

    this.x =  mousePosition.x + Math.cos(this.radians)*this.randomDistance
    this.y =  mousePosition.y + Math.sin(this.radians)*this.randomDistance
    //console.log(mousePosition)
    this.draw()

}

Particle.prototype.draw = function(){

    c.beginPath()
    c.strokeStyle = this.color
   // c.lineWidth = this.radius
    c.moveTo(this.lastPosition.x,this.lastPosition.y)
    c.lineTo(this.x,this.y)
    c.stroke()
    // c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    // c.fillStyle = this.color
    // c.fill()

}

function createParticles(count,maxRadius,maxVelocity){
 
    for(let i=0;i<count;i++){
        let radius = randInt(2,maxRadius)
        let x = innerWidth/2
        let y = innerHeight/2
        let color = randomColors() 

        particles.push(new Particle(x,y,0,0,radius,color))
    }

}

function particlesAnimation(){
    c.fillStyle = 'rgba(0,0,0,0.08)'
    c.fillRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(particlesAnimation)
    particles.forEach((particle)=>{
        particle.update()
    })
}

addMouseCapturingEvents()
createParticles(100,5,10)
particlesAnimation()
