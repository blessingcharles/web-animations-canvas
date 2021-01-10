
export let colorArray = [
        'red','blue','yellow','green'
    ]

export function distance(x1,y1,x2,y2){

    let x = x2-x1
    let y = y2-y1
    //finding the distance using pythogorian theorem

    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

//return a number between min and max
export function randInt(min,max){

    return Math.floor((Math.random()*(max-min+1)) + min)

}
// resizing canvas event listener

export function addResizeEventListener(object){
    
    window.addEventListener('resize',()=>{
        object.height = window.innerHeight
        object.width = window.innerWidth
    })
}
//capturing the mouselocation 
export let mousePosition = {
    x:undefined,
    y:undefined
}

export function addMouseCapturingEvents(){
    
    window.addEventListener('mousemove',function(event){

        mousePosition.x = event.x
        mousePosition.y = event.y
    
    })
    
    window.addEventListener('touchstart',function(event){
        mousePosition.x = event.x
        mousePosition.y = event.y
       console.log(event)
    
    },false)
    
    window.addEventListener('touchmove',function(event){
        mousePosition.x = event.touches[0].clientX
        mousePosition.y = event.touches[0].clientY
    
    },false)
    
}

//onclick events 
export function addCLickEvents(callback){
    window.addEventListener('click',(event)=>{
        mousePosition.x = event.x
        mousePosition.y = event.y
       // console.log(mousePosition)
       if(callback){
           callback()
       }
    })
}

//constructor function

function Utils(){

    this.mousePosition = {
        x:undefined,
        y:undefined
    }
}

//random colors
export function randomColors(){

    return colorArray[randInt(0,colorArray.length-1)]
}

Utils.prototype.distance = distance

Utils.prototype.randInt= randInt

export default Utils

