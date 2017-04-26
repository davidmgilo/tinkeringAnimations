var x = 95
var y = 50

function init() {
    //Draw first frame
    var c = document.getElementById("animation");
    if(c){
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x,y,40,0,2*Math.PI);
        ctx.stroke();
    }
}

document.addEventListener('DOMContentLoaded',function (event) {
    init()
} )
// Can be done with $(document).ready


//
// while(1){
//
// }