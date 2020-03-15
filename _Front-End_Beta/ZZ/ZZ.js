var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var a = 1;

/*var msgObj = document.getElementById("msg");
var msg2Obj = document.getElementById("msg2");
var firstResult=document.getElementById("firstResult");*/
var xPos, yPos, circX, circY, clickInfo = [];
var mousedown=false;
var nextIndex;
var interval;

var lastX;
var lastY;

var userArray=[];

document.writeln("<pre>");
document.writeln("hello world");



window.onload= generateCir();
function generateCir()
{
    alert("hello world");
    randX = Math.floor(Math.random()* 900 + 40);
    randY = Math.floor(Math.random()* 600 + 40);

    rngCircle =
    {
        index: 1,
        x: Math.floor(randX),
        y: Math.floor(randY),
        radius: 25,
    }

    circles.push(rngCircle);

    ctx.lineWidth = "2";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(10, 10, 980, 700);
    
    ctx.strokeStyle = "black";
    ctx.strokeRect(10, 10, 980, 700);

    
    
    ctx.arc(circles[0].x, circles[0].y, circles[0].radius , Math.PI * 2, 0, false);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();


    
}/*
  function draw(e) 
  {
    // stop the function if they are not mouse down
    if(!isDrawing)   return;
    //listen for mouse move event
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];


    
    
  }
//mouse down
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    var i, xDiff, yDiff, dist, result, cX, cY, startLength;
    xPos = null; yPos = null; circX = null; circY = null;
   
    xPos = e.offsetX || e.pageX;
    yPos = e.offsetY || e.pageY;
    // check posn against centres
    startLength = clickInfo.length;
    for (i = 0; i < circles.length; i++) {
        cX = circles[i].x; cY = circles[i].y;
        xDiff = Math.abs(cX - xPos);
        yDiff = Math.abs(cY - yPos);
        dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        // add info on clicked circle to array       
        if (dist <= 30) {
         //   clickInfo[clickInfo.length] = { label: circles[i].index, circX: circles[i].x, circY: circles[i].y, xPos: xPos, yPos: yPos };
           var clickCir =
   		 	{
        		index: circles[i].index,
        		x: xPos,
        		y: yPos,
    		}
            clickInfo.push(clickCir);
        }
    }
    // get the selected circle index from variable no;
    var no=0;
    if(clickInfo.length != startLength)
    {
  	    if(clickInfo[0].index!=1)
        {
            alert("Please start from 1");
            clickInfo.length = 0;
        }
        else
        {
            //loop through the arrayto color the selected circle
            for(i=0;i<circles.length;i++)
            {
                if(clickInfo[clickInfo.length-1].index==circles[i].index)
                {   
                    var cxpos=circles[i].x;
                    var cypos=circles[i].y;
                    var crad=circles[i].radius;
                    //must begin path if not the circle being colored will be 25 on default
                    ctx.beginPath();
                    ctx.arc(cxpos, cypos, crad, Math.PI * 2, 0, false);
                    ctx.fillStyle = "#00ff00";
                    ctx.fill();
                    ctx.closePath();
                    if(clickInfo[clickInfo.length-1].index <= 9)
                    {
                        ctx.fillStyle = "black"
                        ctx.font = '30px Arial';
                        ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos -9, cypos +10);
                    }
                    else
                    {
                        ctx.fillStyle = "black"
                        ctx.font = '30px Arial';
                        ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos -17, cypos +10);
                    }
                }
            }
           
            nextIndex=clickInfo[clickInfo.length - 1].index +1;
            result="You draw from circle " + clickInfo[clickInfo.length - 1].index;
        }
   }
   else
   {
        alert("Try to click on a circle")
   }
   //show result
    msgObj.innerHTML = result;
    //start the coordinates drawing
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
  });

  canvas.addEventListener('mousemove', draw);
  
  //mouseUp
  canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    
     var i, xDiff, yDiff, dist, result, cX, cY, startLength;
    xPos = null; yPos = null; circX = null; circY = null;
   
    xPos = e.offsetX || e.pageX;
    yPos = e.offsetY || e.pageY;
    // check posn against centres
    startLength = clickInfo.length;
    for (i = 0; i < circles.length; i++) {
        cX = circles[i].x; cY = circles[i].y;
        xDiff = Math.abs(cX - xPos);
        yDiff = Math.abs(cY - yPos);
        dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        // add info on clicked circle to array       
        if (dist <= 30) {
           var clickCir =
   		 	{
        		index: circles[i].index,
        		x: xPos,
        		y: yPos,
    		}
            clickInfo.push(clickCir);
        }
    }
	if(clickInfo[clickInfo.length - 1].index !=nextIndex)
     {
        alert("Wrong,You suppose to link from "+clickInfo[clickInfo.length-2].index+" to "+nextIndex);

        clickInfo.length = 0;
     }
    else
    {
        result="You draw from circle " + clickInfo[clickInfo.length - 2].index+ "to "+ clickInfo[clickInfo.length - 1].index+ "Array Size:"+clickInfo.length;
      //loop through the arrayto color the selected circle
      for(i=0;i<circles.length;i++)
      {
          if(clickInfo[clickInfo.length-1].index==circles[i].index)
          {   
              var cxpos=circles[i].x;
              var cypos=circles[i].y;
              var crad=circles[i].radius;
              //must begin path if not the circle being colored will be 25 on default
              ctx.beginPath();
              ctx.arc(cxpos, cypos, crad, Math.PI * 2, 0, false);
              ctx.fillStyle = "#00ff00";
              ctx.fill();
              ctx.closePath();
              if(clickInfo[clickInfo.length-1].index <= 9)
                    {
                        ctx.fillStyle = "black"
                        ctx.font = '30px Arial';
                        ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos -9, cypos +10);
                    }
                    else
                    {
                        ctx.fillStyle = "black"
                        ctx.font = '30px Arial';
                        ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos -17, cypos +10);
                    }
          }
      }
    }

    // get the selected circle index from variable no;
   //show result
    msgObj.innerHTML = result;
    
    if(clickInfo[clickInfo.length - 1].index==25)
     {
    
     stopTest();
     
     }
    //start the coordinates drawing
     //[lastX, lastY] = [e.offsetX, e.offsetY];
  });
  //when u no longer touching the mouse
  canvas.addEventListener('mouseout', () => isDrawing = false);*/