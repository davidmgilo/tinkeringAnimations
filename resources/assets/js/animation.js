var x
var y

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
    drawCircle(95,50)
}

document.addEventListener('DOMContentLoaded',function (event) {
    init()
} )
// Can be done with $(document).ready


//
// while(1){
//
// }