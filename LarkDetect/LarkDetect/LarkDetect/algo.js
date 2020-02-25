var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(10, 10, 980, 480);


var circles = [];

while (circles.length < 25) {
    var rngCircle =
    {
        x: Math.floor(Math.random() * 900 + 40),
        y: Math.floor(Math.random() * 400 + 40),
        radius: 25,
    }
    var overlapping = false;
    //circles.push(rngCircle);
    for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        var dx = rngCircle.x - other.x;
        var dy = rngCircle.y - other.y;
        var rr = 50;
        if (dx * dx + dy * dy < 2*(rr * rr)) {
            overlapping = true;
            break;
        }
        //   var d= (Math.sqrt(Math.pow(other.x-rngCircle.x)+Math.pow(other.y-rngCircle.y)));
        //  if(d<rngCircle.radius+(other.radius))
        //  {
        //   overlapping=true;
        //   break;
        // }
    }
    if (!overlapping) {
        circles.push(rngCircle);
        overlapping = false;
    }
}
for (i = 0; i < circles.length; i++)
{
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, circles[i].radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.fill();
    ctx.fillStyle = "white"
    ctx.font = '15px serif';
    ctx.fillText(i + 1, circles[i].x - 8, circles[i].y + 3);
    ctx.closePath();

}
//window.onmousedown = function (e)
//{
//    var x = e.pageX - canvas.getBoundingClientRect().left;
//    var y = e.pageY - canvas.getBoundingClientRect().top;

//    for (i = 0; i < this.circles.length; i++)
//    {
//        var dx = x - circles[0].x,
//            dy = y - circles[0].y,
//            dist = Math.sqrt(dx * dx + dy * dy);
            
//            var coords = "X coords: " + x + ", Y coords: " + y;
//            document.getElementById("demo").innerHTML = coords;

//        if (dist < 25) {
//            alert("good");
//            break;
//            //if (i == 0) {
//            //    if (x < this.circles[0].x + 20) {
//            //        alert("Please start from one!");

//            //    }
//            //}
//            //else {
//            //    if (x < this.circles[i].x + 20) {
//            //        alert("Please choose the correct circle!");
//            //    }
//            }
//        }
       
//    }
   

