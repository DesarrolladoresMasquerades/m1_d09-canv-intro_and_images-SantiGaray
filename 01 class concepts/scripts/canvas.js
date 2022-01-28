const canvas = document.querySelector("canvas")

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

canvas.width = 900
canvas.height = 600

const ctx = canvas.getContext("2d")
// Squares

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (100, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (200, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (300, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (400, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (500, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (600, 100, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (700, 100, 100, 100)


ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (100, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)" // "red"
ctx.fillRect (200, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (300, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (400, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (500, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (600, 400, 100, 100)

ctx.fillStyle = "rgb(173, 216, 230)"
ctx.fillRect (700, 400, 100, 100)

// ctx.fillStyle = "yellow"
// ctx.fillRect (350, 250, 100, 100)



// Line

ctx.beginPath();
ctx.moveTo(100,100)
ctx.lineTo(800, 100)
ctx.strokeStyle = "black"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(100,500)
ctx.lineTo(800, 500)
ctx.strokeStyle = "black"
ctx.stroke()


//arc /circle

// ctx.beginPath()
// ctx.arc (450,300, 70, 0, Math.PI * 2, false)
// ctx.strokeStyle = "yellow"
// ctx.stroke()

// ctx.beginPath()
// ctx.arc (450,300, 70, 0, Math.PI * 2, false)
// ctx.strokeStyle = "yellow"
// ctx.stroke()

// ctx.beginPath()
// ctx.arc (450,300, 50, 0, Math.PI * 2, false)
// ctx.strokeStyle = "yellow"
// ctx.stroke()

// ctx.beginPath()
// ctx.arc (450,300, 30, 0, Math.PI * 2, false)
// ctx.strokeStyle = "yellow"
// ctx.stroke()

// ctx.beginPath()
// ctx.arc (450,300, 10, 0, Math.PI * 2, false)
// ctx.strokeStyle = "yellow"
// ctx.stroke()


// A lot of circles


for (let i = 0; i < 89; i++) {

    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height



    ctx.beginPath()
    ctx.arc (x, y, 10, 0, Math.PI * 2, false)
    ctx.strokeStyle = "yellow"
    ctx.stroke()
    

    ctx.beginPath()
    ctx.arc (x, y, 20, 0, Math.PI * 2, false)
    ctx.strokeStyle = "yellow"
    ctx.stroke()

    ctx.beginPath()
    ctx.arc (x, y, 30, 0, Math.PI * 2, false)
    ctx.strokeStyle = "yellow"
    ctx.stroke()

    ctx.beginPath()
    ctx.arc (x, y, 40, 0, Math.PI * 2, false)
    ctx.strokeStyle = "yellow"
    ctx.stroke()
}