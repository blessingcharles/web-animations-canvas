import Circle from './circle.js'
import {c} from './init.js'
import {colorArray} from './utils.js'
function MultipleCirclesAnimation(count,maxRadiusForCircle,maxSpeed ){
    
    this.circleArray = []
    this.maxRadiusForCircle = maxRadiusForCircle
    this.maxSpeed = maxSpeed
   for(let i=0;i<count;i++){

       let radius = Math.floor(Math.random()*this.maxRadiusForCircle)
       let x = Math.floor(Math.random() * (innerWidth - 2*radius) + radius)
       let y =100 || Math.floor(Math.random() * (innerHeight - 2*radius) + radius)
       let dx = 0
       let dy =  Math.floor((Math.random() - 0.5) * this.maxSpeed)
       let color = colorArray[Math.floor(Math.random()*colorArray.length)]
       this.circleArray.push(new Circle(x,y,dx,dy,radius,color))
   }
   
}


MultipleCirclesAnimation.prototype.startMultipleAnimation = function(){
   c.clearRect(0,0,innerWidth,innerHeight)
   requestAnimationFrame(this.startMultipleAnimation.bind(this))
   this.circleArray.forEach((circle)=>{
       //console.log(this)
       this.update.call(circle)
   })
}

export default MultipleCirclesAnimation