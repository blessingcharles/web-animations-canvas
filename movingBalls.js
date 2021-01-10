let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

let c = canvas.getContext('2d') ;
let maxCursorCoverage = 50 ;
let maxRadius = 50
let colorArray = [
    'red','blue','yellow','green'
]
let mousePosition = {
    x:undefined,
    y:undefined
}

// constructor for circle generation
function AnimateCircle(x,y,dx,dy,radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]
}

AnimateCircle.prototype.draw = function(){
    c.beginPath()
    this.x = Math.max(1, Math.floor(this.x));
    this.y = Math.max(1, Math.floor(this.y));
   // this.radius =  Math.max(1, Math.floor(this.radius));
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    c.fillStyle = this.color
    c.fill()
}
AnimateCircle.prototype.update = function(){
    if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy
    }

    this.x += this.dx ;
    this.y += this.dy ;
    //checking the cursor position for live update
    if(this.x-mousePosition.x > -maxCursorCoverage &&
        this.x - mousePosition.x <50 &&
        this.y -mousePosition.y > -50 &&
        this.y - mousePosition.y <50)
    {
            if(this.radius < maxRadius)  this.radius += 1
        }
    else if(this.radius > this.minRadius){
        this.radius -= 1
    }

    this.draw()
    }

//constructor for multiple circle animation

function MultipleCirclesAnimation(count,maxRadiusForCircle,maxSpeed ){

     this.circleArray = []
     this.maxRadiusForCircle = maxRadiusForCircle
     this.maxSpeed = maxSpeed
    for(let i=0;i<count;i++){

        let radius = Math.floor(Math.random()*this.maxRadiusForCircle)
        let x = Math.floor(Math.random() * (innerWidth - 2*radius) + radius)
        let y = Math.floor(Math.random() * (innerHeight - 2*radius) + radius)
        let dx = Math.floor((Math.random() - 0.5) * this.maxSpeed)
        let dy =  Math.floor((Math.random() - 0.5) * this.maxSpeed)
        this.circleArray.push(new AnimateCircle(x,y,dx,dy,radius))

    }
}

MultipleCirclesAnimation.prototype.startAnimation = function(){
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(this.startAnimation.bind(this))
    this.circleArray.forEach((circle)=>{
        circle.update()
    })
}



function init(){
    //on window resizing
    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        multipleCirlces = new MultipleCirclesAnimation(300,20,5)
        multipleCirlces.startAnimation()
        //console.log('window resizing')
    })

    // on cursor movement 

    window.addEventListener('mousemove',(event)=>{
        mousePosition.x = event.x ;
        mousePosition.y = event.y

    })

}

init()

let multipleCirlces = new MultipleCirclesAnimation(300,20,5)

multipleCirlces.startAnimation()