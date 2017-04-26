function init() {
    //Draw first frame
    var c = document.getElementById("animation");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
}
