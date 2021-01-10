let objects = []

function Object(x,y,dy,dx,radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy =dy
}

Object.prototype.update = function(){
    this.draw()
}

Object.prototype.draw = function(){

}

Object.prototype.animate = function(){
    requestAnimationFrame(this.animate.bind(this))
}