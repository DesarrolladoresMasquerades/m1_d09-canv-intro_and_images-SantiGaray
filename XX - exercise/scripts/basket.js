const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


canvas.width = 900
canvas.height = 600


// cancha (#B49860)

ctx.fillStyle = "#B49860" 
ctx.fillRect (0, 0, 900, 500)


// area 1 (#DE944D)

ctx.fillStyle = "#DE944D"
ctx.fillRect (0, 190, 200, 120)

ctx.lineWidth = 20;
ctx.strokeStyle = "white"
ctx.strokeRect(0, 190, 80, 100)

// area 2 (#DE944D)

ctx.fillStyle = "#DE944D"
ctx.fillRect (700, 190, 200, 120)

ctx.lineWidth = 20;
ctx.strokeStyle = "white"
ctx.strokeRect(700, 20, 200, 100)

// Court Lines


ctx.beginPath();

ctx.moveTo(450,0)
ctx.lineTo(450, 600)
ctx.lineWidth = 5
ctx.strokeStyle = "white"
ctx.stroke()

