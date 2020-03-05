var canvas = document.getElementById("test2Canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(10, 10, 980, 480);
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 980, 480);

var Test2circles = [];//circle array
var clickInfo = [];// array that stored the clicked data
var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13];
var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L"];
var numIndex=0;
var alphaIndex=0;
var currentIndex,interval;
var mousedown=false;
var msgObj = document.getElementById("msg");
var msg2Obj = document.getElementById("msg2");

window.onload=generateCir();

function generateCir()
{
    while (Test2circles.length < 25) {
        var rngCircle2 =
        {
            index: 0,
            x: Math.floor(Math.random() * 900 + 40),
            y: Math.floor(Math.random() * 400 + 40),
            radius: 25,
        }
        var overlapping = false;
        //circles.push(rngCircle);
        for (var i = 0; i < Test2circles.length; i++) {
            var other = Test2circles[i];
            var dx = rngCircle2.x - other.x;
            var dy = rngCircle2.y - other.y;
            //rr is use to ensure all the circle is not too near apart
            var rr = 80;
            //if no overlapping
            if (dx * dx + dy * dy < rr * rr) {
                overlapping = true;
                break;
            }
        }
        if (!overlapping) {
             if(Test2circles.length==0)
                {
                    rngCircle2.index=numbers[numIndex];
                    Test2circles.push(rngCircle2);
                    overlapping=true;
                    numIndex++;
                }
                else
                {
                    //get current array index to know whether is numbers or alphabet
                    var prevIndex=Test2circles[Test2circles.length-1].index;
                    for(n=0;n<numbers.length;n++)
                    {
                        //if is numbers then store alphabet as index
                        if(prevIndex==numbers[n])
                        {
                            rngCircle2.index=alphabet[alphaIndex];
                            alphaIndex++;
                        }
                    }
                    for(a=0;a<alphabet.length;a++)
                    {
                        //if is alphabet then store numbers as index
                        if(prevIndex==alphabet[a])
                        {
                            rngCircle2.index=numbers[numIndex];
                            numIndex++;
                        }
                    }
                    Test2circles.push(rngCircle2);
                    overlapping=true;
                }
        }
    }
    for (i = 0; i < Test2circles.length; i++) {
        ctx.beginPath();
        ctx.arc(Test2circles[i].x, Test2circles[i].y, Test2circles[i].radius, Math.PI * 2, 0, false);
        ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
        ctx.fill();
        ctx.fillStyle = "white"
        ctx.font = '15px serif';
        ctx.fillText(Test2circles[i].index, Test2circles[i].x - 8, Test2circles[i].y + 3);
        ctx.closePath();
    }
}

//when u no longer touching the mouse
canvas.addEventListener('mouseout', () => isDrawing = false);
//move ur mouse
canvas.addEventListener('mousemove', draw);
//draw function
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
    for (i = 0; i < Test2circles.length; i++) {
        cX = Test2circles[i].x; cY = Test2circles[i].y;
        xDiff = Math.abs(cX - xPos);
        yDiff = Math.abs(cY - yPos);
        dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        // add info on clicked circle to array       
        if (dist <= 30) {
         //   clickInfo[clickInfo.length] = { label: circles[i].index, circX: circles[i].x, circY: circles[i].y, xPos: xPos, yPos: yPos };
           var clickCir =
   		 	{
        		index: Test2circles[i].index,
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
            currentIndex=clickInfo[clickInfo.length - 1].index;
            //get the index that they suppose to link to
            for(i=0;i<Test2circles.length;i++)
            {
                if(currentIndex==Test2circles[i].index)
                {
                    nextIndex=Test2circles[i+1].index;
                }
            }
            result="You draw from circle " + clickInfo[clickInfo.length - 1].index;
        } 
   }
   else
   {
   	alert("Try to click on a circle");
   }
   //show result
   msgObj.innerHTML = result;
    //start the coordinates drawing
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
  });
    //mouseUp
    canvas.addEventListener('mouseup', (e) => {
        isDrawing = false;
        
         var i, xDiff, yDiff, dist, result, cX, cY, startLength;
        xPos = null; yPos = null; circX = null; circY = null;
       
        xPos = e.offsetX || e.pageX;
        yPos = e.offsetY || e.pageY;
        // check posn against centres
        startLength = clickInfo.length;
        for (i = 0; i < Test2circles.length; i++) 
        {
            cX = Test2circles[i].x; cY = Test2circles[i].y;
            xDiff = Math.abs(cX - xPos);
            yDiff = Math.abs(cY - yPos);
            dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
            // check if the user is really clicking on a circle    
            if (dist <= 30)
            {
               var clickCir =
                {
                    index: Test2circles[i].index,
                    x: xPos,
                    y: yPos,
                }
                clickInfo.push(clickCir);
            }
        }
        if(clickInfo[clickInfo.length - 1].index !=nextIndex)
        {
            alert("Wrong, You suppose to link from "+clickInfo[clickInfo.length-2].index+" to "+nextIndex);
            clickInfo.length = 0;
        }
        else
        {
            result="You link from " + clickInfo[clickInfo.length - 2].index+ "to "+ clickInfo[clickInfo.length - 1].index;
        }
    
        // get the selected circle index from variable no;
       //show result
        msgObj.innerHTML = result;
        
        if(clickInfo[clickInfo.length - 1].index==13)
         {
         alert("Congrates u have completed the test");
         stopTest();
         }
 
    });

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
document.getElementById("timerCountDown").style.visibility="visible";
countdown( "timer", 3,00 );
}
function stopTest()
{
 clearInterval(interval);
 msgObj.innerHTML =  document.getElementById("timer").innerHTML;
}
