var x = 95
var y = 50

function drawCircle(x, y) {
    var c = document.getElementById("animation");
    if(c){
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x,y,40,0,2*Math.PI);
        ctx.stroke();
    }
}

function init() {
    //Draw first frame
    drawCircle(x,y)
}

function update() {
    x++
    y++
    drawCircle(x,y)
}

document.addEventListener('DOMContentLoaded',function (event) {
    init()

    setInterval(update,35/1000)
} )
// Can be done with $(document).ready
