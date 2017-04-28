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

    // usage:
    // instead of setInterval(render, 16) ....

    (function animloop(){
        requestAnimFrame(animloop);
        update();
    })();
} )
// Can be done with $(document).ready

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();