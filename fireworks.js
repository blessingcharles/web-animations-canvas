import canvas  , {c} from './init.js'
import {addResizeEventListener , addCLickEvents , randomColors, mousePosition} from './utils.js'

let particles = []
let velocity = 20
function Particle(x,y,radius,color,velocity){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
        x:velocity.x,
        y:velocity.y
    }
    this.gravity = 0.5

}
Particle.prototype.draw = function(){
    c.beginPath()
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    c.fillStyle = this.color
    c.fill()
}

Particle.prototype.update = function(){

    this.x += this.velocity.x * velocity
    this.y += this.velocity.y * velocity
    this.y += this.gravity 
    this.draw()
}



function animate(){
    c.fillStyle = 'rgb(0,0,0,0.1)'
    c.fillRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(animate)
    particles.forEach((particle)=>{
        particle.update()
    })
}

function init(count){

    addResizeEventListener(canvas)

    addCLickEvents(()=>{
        particles = []
        mousePosition.x = event.x
        mousePosition.y = event.y
        let radius = 3
        let randomAngle = Math.PI*2/count
        for(let i=0;i<count;i++){
    
            let color = randomColors()
            particles.push(new Particle(mousePosition.x,
                             mousePosition.y,
                             radius,
                             color,{
                                 x:Math.cos(randomAngle*i)*Math.random(),
                                 y:Math.sin(randomAngle*i)*Math.random()
                             }))
        }

    })
}

function fireworksStart(count){
  
    init(count)
    animate()
}

fireworksStart(200)
