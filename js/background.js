
/*const el = document.querySelector("#bgrd");
var x = e.clientX;
var y = e.clientY;

el.addEventListener("mousemove", (e) => {
  el.style.setProperty('--x', -e.offsetX/30 + "px");
  el.style.setProperty('--y', -e.offsetY/30 + "px");
});*/
document.getElementById("top-image").innerHTML = "Hello World";


$('.bg').mousemove(funtion(e)
{ 
    var moveX = (e.pageX * -1/20);
    var moveY = (e.pageY * -1/20);
    $(this).css('background-position', moveX + 'px  ' + moveY + 'px  ')
})