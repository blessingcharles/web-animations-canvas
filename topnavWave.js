let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(c)

let xControlPoint = 0
let yControlPoint = innerHeight/4 
let flag = 5
let renderTimes = 0
let yXtraDeviation = 10

function draw(){
    c.moveTo(0, 0);
    c.quadraticCurveTo(xControlPoint, yControlPoint, innerWidth, 0);
    c.fillStyle = 'blue'
    c.fill()
}

function update(){
    c.clearRect(0,0,innerWidth,innerHeight)
    c.beginPath()
    if(xControlPoint + flag+100 > innerWidth || xControlPoint < 0){
        flag = -flag
    }
    if(renderTimes === 150){
       console.log(flag,renderTimes)
        flag = 2
    }
    xControlPoint += flag
    yControlPoint += flag/5 
    renderTimes += 1
    draw()
}

function animate(){
    window.requestAnimationFrame(animate)
    update()
}
    console.log(innerWidth ,innerHeight)

animate()