console.log("fireball loaded");

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerHeight* 0.6;

const ctx = canvas.getContext("2d");

const fireball = new Image();
fireball.src = "images/fireBall.png";

/*
fireball.addEventListener(
    "load",
    ()=>ctx.drawImage(
    fireball,
    250, 0,
    100,100,
    0,0,
    100,100
)
)
*/

let frameNumber;

const ondaEnergetica = {
  animating: true,
  img: fireball,
  x: 0,
  y: 0,
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //this.x += canvas.width / 600, this.y += canvas.height / 600;

    
    ctx.drawImage(this.img, 250, 0, 100, 100, this.x, this.y, 100, 100);
    
 frameNumber = requestAnimationFrame(this.draw.bind(this));
    
  },
};

// canvas.addEventListener(
//     "click",
//     ()=>{
//         console.log("canvas clicked")
//         ondaEnergetica.animating = !ondaEnergetica.animating
//         ondaEnergetica.draw()
//     }
//     )

    canvas.addEventListener(
        "mousemove",
        (event)=>{
            console.log("mouse coordinates: ", event.clientX, event.clientY)
            ondaEnergetica.x = event.clientX
            ondaEnergetica.y = event.clientY
            //ondaEnergetica.animating = !ondaEnergetica.animating
            ondaEnergetica.draw()
            
        }
    )

    