let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;


let amount = 500
let barx = 500
let ballx = -50
let loopfunc = 1
let wavex = -400
let rockx = -90
let animate = false
let waveanimate = false
let rockanimate = false

requestAnimationFrame(drawstuff)

function drawstuff() {

    ctx.font = "30px Arial"
    ctx.fillStyle = "blue"
    ctx.fillText(amount, 330, 40)

    ctx.fillStyle = "blue"
    ctx.fillRect(100, 80, barx, 60)

    ctx.fillStyle = "blue"
    ctx.fillRect(wavex, 300, 400, 300)

    ctx.fillStyle = "#CC5500"
    ctx.beginPath()
    ctx.arc(ballx, 400, 50, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#808080"
    ctx.beginPath()
    ctx.arc(rockx, 550, 50, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#808080"
    ctx.beginPath()
    ctx.arc(rockx - 110, 550, 50, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#808080"
    ctx.beginPath()
    ctx.arc(rockx - 220, 550, 50, 0, 2 * Math.PI)
    ctx.fill()



    if (animate) {
        ballx += 5
        if (ballx > 750) {
            animate = false
            ballx = -50

        }

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

        ctx.font = "30px Arial"
        ctx.fillStyle = "blue"
        ctx.fillText(amount, 330, 40)

        ctx.fillStyle = "blue"
        ctx.fillRect(100, 80, barx, 60)

        ctx.fillStyle = "blue"
        ctx.fillRect(wavex, 300, 60, 300)

        ctx.fillStyle = "#CC5500"
        ctx.beginPath()
        ctx.arc(ballx, 400, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 110, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 220, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        console.log(ballx)

    }

    if (waveanimate) {
        wavex += 5
        if (wavex > 850) {
            waveanimate = false
            wavex = -400
        }

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

        ctx.font = "30px Arial"
        ctx.fillStyle = "blue"
        ctx.fillText(amount, 330, 40)

        ctx.fillStyle = "blue"
        ctx.fillRect(100, 80, barx, 60)

        ctx.fillStyle = "blue"
        ctx.fillRect(wavex, 300, 400, 300)

        ctx.fillStyle = "#CC5500"
        ctx.beginPath()
        ctx.arc(ballx, 400, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 110, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 220, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        console.log(ballx)

    }

    if (rockanimate) {
        rockx += 5
        if (rockx > 980) {
            rockanimate = false
            rockx = -90
        }

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

        ctx.font = "30px Arial"
        ctx.fillStyle = "blue"
        ctx.fillText(amount, 330, 40)

        ctx.fillStyle = "blue"
        ctx.fillRect(100, 80, barx, 60)

        ctx.fillStyle = "blue"
        ctx.fillRect(wavex, 300, 400, 300)

        ctx.fillStyle = "#CC5500"
        ctx.beginPath()
        ctx.arc(ballx, 400, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 110, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = "#808080"
        ctx.beginPath()
        ctx.arc(rockx - 220, 550, 50, 0, 2 * Math.PI)
        ctx.fill()

        console.log(ballx)

    }





    requestAnimationFrame(drawstuff)
}


document.getElementById("fire").addEventListener("click", shootfire)
document.getElementById("water").addEventListener("click", tidalwave)
document.getElementById("rock").addEventListener("click", rollrocks)

function shootfire() {
    if (animate === false) {
        amount -= 10
        barx -= 10
    }
    animate = true
}

function tidalwave() {
    if (waveanimate === false) {
        amount -= 10
        barx -= 10
    }
    waveanimate = true
}

function rollrocks() {
    if (rockanimate === false) {
        amount -= 10
        barx -= 10
    }

    rockanimate = true
}