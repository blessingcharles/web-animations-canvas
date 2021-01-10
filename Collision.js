import Circle from './circle.js'
import {c} from './init.js'
function Collision(){

}

Collision.prototype = Object.create(Circle.prototype)
Collision.prototype.constructor = Collision

let distance = function(x1,y1,x2,y2){

    let x = x2-x1
    let y = y2-y1

    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

let circle1 = new Circle(500,200,0,0,100,'blue')
let circle2 = new Circle(200,300,0,0,50,'red')

let circleArray = [circle1,circle2]

circleArray.forEach((circle)=>{
    circle.draw()
})

window.addEventListener('mousemove',(event)=>{
    circle2.x = event.clientX
    circle2.y = event.clientY
    c.clearRect(0,0,innerWidth,innerHeight)

    if(distance(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius + circle2.radius  ){
        circle1.color = 'green'
    }
    else{
        circle1.color = 'blue'
    }
    circleArray.forEach((circle)=>{
        circle.draw()
    })
})