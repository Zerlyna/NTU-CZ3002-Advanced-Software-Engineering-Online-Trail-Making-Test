var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(10, 10, 980, 480);
ctx.strokeStyle = "#FF0000";
ctx.strokeRect(10, 10, 980, 480);

var circles = [];
var a = 1;

var msgObj = document.getElementById("msg");
var msg2Obj = document.getElementById("msg2");
var xPos, yPos, circX, circY, clickInfo = [];
var mousedown=false;
var nextIndex;
var interval;
while (circles.length < 25) {
    var rngCircle =
    {
        index: 1,
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
        //rr is use to ensure all the circle is not too near apart
        var rr = 80;
        //overlapping theory
        //Distance between centers C1 and C2 is calculated as
		// C1C2 = sqrt((x1 - x2)2 + (y1 - y2)2).
		//There are three condition arises.
		//1. If C1C2 == R1 + R2
		//		Circle A and B are touch to each other.
		//2. If C1C2 > R1 + R2
		//     Circle A and B are not touch to each other.
		//3. If C1C2 < R1 + R2
		//      Circle intersects each other.
        
        //if no overlapping
        if (dx * dx + dy * dy < rr * rr) {
            overlapping = true;
            break;
        }
 
    }
    if (!overlapping) {
        rngCircle.index = a;
        circles.push(rngCircle);
        overlapping = false;
        a++;
    }
}
for (i = 0; i < circles.length; i++) {
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, circles[i].radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.fill();
    ctx.fillStyle = "white"
    ctx.font = '15px serif';
    ctx.fillText(circles[i].index, circles[i].x - 8, circles[i].y + 3);
    ctx.closePath();
}


//mousedown
//
function clickIt(evt) {
    
    var i, xDiff, yDiff, dist, result, cX, cY, startLength;
    xPos = null; yPos = null; circX = null; circY = null;
    evt = evt || event;
    xPos = evt.offsetX || evt.pageX;
    yPos = evt.offsetY || evt.pageY;
    // check posn against centres
    startLength = clickInfo.length;
    for (i = 0; i < circles.length; i++) {
        cX = circles[i].x; cY = circles[i].y;
        xDiff = Math.abs(cX - xPos);
        yDiff = Math.abs(cY - yPos);
        dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        // add info on clicked circle to array       
        if (dist <= 30) {
            clickInfo[clickInfo.length] = { label: circles[i].index, circX: circles[i].x, circY: circles[i].y, xPos: xPos, yPos: yPos };
        }
    }
    
    result = (clickInfo.length != startLength) ? "You hit circle " + clickInfo[clickInfo.length - 1].label+ "" : alert("Try to click on a circle") ;
    msgObj.innerHTML = result;
    // show click co-ordinates
    var firstClickInfo, secondClickInfo;
    if (clickInfo.length == 2) {
        firstClickInfo = "label: " + clickInfo[0].label + "; circX:" + clickInfo[0].circX + "; circY:" + clickInfo[0].index + "; xPos:" + clickInfo[0].xPos + "; yPos:" + clickInfo[0].yPos + "<br>";
        secondClickInfo = "label: " + clickInfo[1].label + "; circX:" + clickInfo[1].circX + "; circY:" + clickInfo[1].circY + "; xPos:" + clickInfo[1].xPos + "; yPos:" + clickInfo[1].yPos + "";
        msg2Obj.innerHTML = firstClickInfo + secondClickInfo;
    }
  
}


  function draw(e) {
    // stop the function if they are not mouse down
    if(!isDrawing) return;
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
    alert("Please start from one mother fker");
    clickInfo.length = 0;
    }
    else
    {
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
     alert("他妈的！ 你是猪吗！给我滚！");
     clickInfo.length = 0;
     }
     else
     {
     result="You draw from circle " + clickInfo[clickInfo.length - 2].index+ "to "+ clickInfo[clickInfo.length - 1].index+ "Array Size:"+clickInfo.length;
     }

    // get the selected circle index from variable no;
   
   //show result
    msgObj.innerHTML = result;
    
    if(clickInfo[clickInfo.length - 1].index==25)
     {
     alert("Congrates u have completed the test");
     stopTest();
     }
    //start the coordinates drawing
     //[lastX, lastY] = [e.offsetX, e.offsetY];
  });
  //when u no longer touching the mouse
  canvas.addEventListener('mouseout', () => isDrawing = false);

//elementName is the id of the countdown
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
            if(clickInfo[clickInfo.length - 1].index!=25 || clickInfo.length<=0)
            {
            alert("haiz u have fail");
            }
            else
            {
            alert("congrats");
            stopTest();
            }
           
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            interval= setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );  
        }
    }
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

function startTest()
{
countdown( "ten-countdown", 3,00 );
}
function stopTest()
{
 clearInterval(interval);
 msgObj.innerHTML =  document.getElementById("ten-countdown").innerHTML;
}
   
// function startTest(age)
// {
//     //for age 40 to 50 
//     //3mins and 30 sec
//     if(age=="a")
//     {
//         countdown("ten-countdown",3,30);
//     }
//     //for age 50 and above
//     //4 minutes
//     else if(age="b")
//     {
//         countdown("ten-countdown",4,00);
//     }
//     //below 40
//     //3 minutes
//     else 
//     {
//         countdown("ten-countdown",3,00)
//     }

// }
// function stopTest()
// {
//  clearInterval(interval);
//  msgObj.innerHTML =  document.getElementById("ten-countdown").innerHTML;
// }
