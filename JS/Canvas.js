const canvasBtn = document.getElementById("canvas-btn");
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas-el");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2,canvas.height/2);

canvasBtn.addEventListener("click", function(){
    // color for filling rectangle
    ctx.fillStyle = "#FF0000";
    // a rectangle
    ctx.fillRect(0, 0, 150, 75);
    ctx.moveTo(0,0);
    // a line
    ctx.lineTo(400,400);
    ctx.stroke();
    // a circle
    ctx.beginPath();
    ctx.arc(300, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
})

// classes are versatile and i like them i want to understand them.
// i tried this without a class and adding this to an array and calling them was hard without the use of a class
class ball{
    // if i understand this is just data i feed it. like a car needs wheels engine roof color and such.
    constructor(){
        this.x = 0,
        this.y = 0,
        this.size = 10,
        this.spdx = 3 * (Math.random() * 3 - 1.5),
        this.spdy = 5 * (Math.random() * 3 - 1.5)
    }
    // this is a behavior i can call i can probably place this outside and feed it arguments or have it in here and call it directly i think.
    // i culd probably have functions outside and feed it var from this i think i can see a scenario that works.
    moveball(){
        this.x += this.spdx;
        this.y += this.spdy;
        if (this.x > canvas.width/2){
            this.spdx *= -1;
        }
        if (this.x < -canvas.width/2){
            this.spdx *= -1;
        }
        this.y += this.spdy;
        if (this.y > canvas.height/2){
            this.spdy *= -1;
        }
        if (this.y < -canvas.height/2){
            this.spdy *= -1;
        }
    }
    drawball(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = "#ff66ff";
        ctx.fill();
    }
}

let balls = [];
function createballs(){
    for (let i = 0; i < 10; i++){
        balls.push(new ball());
    }
}
createballs();
function handleballs(){
    for (let i =0 ; i < balls.length;i++){
        balls[i].moveball();
        balls[i].drawball();
    }
}

function update(){
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
    handleballs();
    requestAnimationFrame(update);
}
let start = false
canvasBtn.addEventListener("click", function(event){
    update();
})
