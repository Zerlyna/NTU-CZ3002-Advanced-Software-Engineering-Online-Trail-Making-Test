var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var a = 1;

var msgObj = document.getElementById("msg");
var msg2Obj = document.getElementById("msg2");
var firstResult=document.getElementById("firstResult");
var xPos, yPos, circX, circY, clickInfo = [];
var mousedown=false;
var nextIndex;
var interval;

//new
var los = true;
var chk1;
var chk2;
var rngCircle;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
/*var counter4 = 0;*/
var randX;
var randY;
var valid = true;
var overlapping = false;
var other;
var dy;
var dx;
var rr;
//
var isDrawing;
var lastX;
var lastY;

var userArray=[];

window.onload=generateCir();

function generateCir()
{

    while (circles.length < 25) {

        los = true;
        overlapping = false;
        
        //limit
        if(circles.length < 1 && circles.length >= 0)
        {
            randX = Math.floor(Math.random()* 900 + 40);
            randY = Math.floor(Math.random()* 600 + 40);
            /*randY = Math.floor(Math.random()* 600 + 40);*/
        }
        else if (circles.length >= 1)
        {
            do{
                
                randX = Math.floor(circles[a-2].x + 60 + Math.random()* 980 - 490);
                randY = Math.floor(circles[a-2].y + 60 + Math.random()* 700 - 350);
                /*if(randX < circles[a-2].x + 60 && randX >=  circles[a-2].x -60 && randY < circles[a-2].y + 60 && randY >= circles[a-2].y - 60){
                    randX = randX + 60;
                }*/

                /*rng2();*/
                if(counter3 > 1000)
                {
                    document.writeln(randX, " ", randY);
                    document.writeln("Max Neighbour");
                    document.writeln(chk1, " " , chk2);
                    document.writeln(circles[a-2].x , " " ,circles[a-2].y);
                    document.writeln(los, " ", overlapping);
                    
                    regenerate(); //regenerate circle;
                    /*check();*/
                    sessionStorage.clear();
                    
                    /*return;*/
                }
                counter3++;

                
                 
            
            }while(randX > 940 || randY > 660 || randX < 40 || randY < 40); 

            /*rng();*/ 

            
        

        }
        
        rngCircle =
        {
            index: 1,
            x: Math.floor(randX),
            y: Math.floor(randY),
            radius: 25,
        }
        
        for (var j = 0; j < circles.length; j++) {
            other = circles[j];
            dx = rngCircle.x - other.x;
            dy = rngCircle.y - other.y;
            //rr is use to ensure all the circle is not too near apart
            rr = 70;
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
            if (dx * dx + dy * dy < rr * rr)
            {
                overlapping = true;;
                break;
            }
            if(counter > 10000)
            {
                document.writeln(dx*dx, " " , dy*dy , " ");
                document.writeln(dx, " " , dy , " ");
                document.writeln("Max YX")
                /*check();*/
                regenerate(); //regenerate circle;
                sessionStorage.clear();
                /*return;*/
            }
            counter++;

         
        }
        
        //check if line of sequence is line of sight
        if(a > 2)
        {
            for (var j = 0; j < circles.length -1 ; j++) {

                //get current circle and last circle coordinate //current (rngCircle.x,rngCircle.y) , last circle (circles[a].x, circle[a].y)


               /* document.write('<pre>');
                document.writeln("Value A at = ", a-2, " ");
                document.writeln("Compare Last Line P2 :" , circles[a-2].x, " ", circles[a-2].y, " ");
                document.writeln("Compare Last Line P1 :" , rngCircle.x, " ", rngCircle.y, " ");
                document.writeln("Compare Line P1     " , j ,":",circles[j].x, " ", circles[j].y, " ");
                document.writeln("Compare Line P2     ", j ,":", circles[j+1].x, " ", circles[j+1].y, " ");*/
                
                /*document.write(a-1);
                /*check();
                

                return;*/
                chk1 = ((rngCircle.x-circles[j].x)*(circles[j+1].y-circles[j].y)-(rngCircle.y-circles[j].y)*(circles[j+1].x-circles[j].x))*((circles[a-2].x-circles[j].x)*(circles[j+1].y-circles[j].y)-(circles[a-2].y-circles[j].y)*(circles[j+1].x-circles[j].x));
                chk2 = ((circles[j].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j].y-rngCircle.y)*(circles[a-2].x-rngCircle.x))*((circles[j+1].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j+1].y-rngCircle.y)*(circles[a-2].x-rngCircle.x));

                /*chk1 = ((xA-xC)*(yD-yC)-(yA-yC)*(xD-xC))*((xB-xC)*(yD-yC)-(yB-yC)*(xD-xC));
                chk2 = ((xC-xA)*(yB-yA)-(yC-yA)*(xB-xA))*((xD-xA)*(yB-yA)-(yD-yA)*(xB-xA));*/
                /*document.writeln("Count ", counter4," ",chk1, " " , chk2);*/

                if (chk1 < 0 && chk2 < 0)
                {
                    los = false;
                     /*counter4++;*/
                    
                    if(counter2 > 1000)
                    {
                        document.writeln("Max Comparison")
                        /*check();*/
                        regenerate(); //regenerate circle;
                        sessionStorage.clear();
                        /*return;*/
                    }
                    counter2 ++;
                    /*document.writeln("Result = ", los, " ");*/
                    break;
                }
               /* document.writeln("Result = ", los, " ");*/
              
            }
            
        }

        //
        if (!overlapping && los) {

            /*document.writeln("Success Insert " , a);*/
            rngCircle.index = a; 
            circles.push(rngCircle);
            overlapping = false;
            los = true;
            a++;
            
        } 
    }
    if(circles.length == 25)
    {
    for (i = 0; i < circles.length; i++) {

            /*check();
            return;*/
            ctx.fillStyle = "#FFFFFF";
            /*ctx.fillRect(10, 10, 980, 700);*/
            ctx.strokeStyle = "black";
            ctx.strokeRect(10, 10, 980, 700);

            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.arc(circles[i].x, circles[i].y, circles[i].radius , Math.PI * 2, 0, false);
            ctx.strokeStyle = "rgba(0, 0, 0, 1)";
            ctx.stroke();
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fill();
            ctx.fillStyle = "black"
            ctx.font = '30px Arial';
            ctx.fillText(circles[i].index, circles[i].x - 17 , circles[i].y + 10);
            
            /*if(i==0)
            {
                ctx.fillStyle = "black"
                ctx.font = '15px serif';
                ctx.fillText("Start", circles[i].x - 15, circles[i].y + 40);
        
            }
            if(i==24)
            {
                ctx.fillStyle = "black"
                ctx.font = '15px serif';
                ctx.fillText("End", circles[i].x - 13, circles[i].y + 40);
            }*/
            
            

            /*ctx.beginPath();*/
            ctx.lineWidth = "5";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.closePath();
        }
    }
}


  function draw(e) 
  {
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
                    ctx.fillStyle = "black"
                    ctx.font = '30px Arial';
                    ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos -17, cypos +10);
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
        generateCir();
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
              ctx.fillStyle = "black"
              ctx.font = '30px Arial';
              ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos - 17, cypos + 10);
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
        if ( msLeft < 1000 ) 
        {
            element.innerHTML = "Time is up!";
            if(clickInfo[clickInfo.length - 1].index!=25 || clickInfo.length==null)
            {
                alert("haiz u have fail");
                stopTest();
            }
        } 
        else 
        {
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
countdown("timer", 3,00 );
}
function stopTest()
{
    clearInterval(interval);
    msgObj.innerHTML =  document.getElementById("timer").innerHTML;
    var timeleft=msgObj.innerHTML;
    //store the timeleft timing to the array
    var TLeftArray=timeleft.split(":");
    var minDiff=2-TLeftArray[0];
    var secDiff=60-TLeftArray[1];
    var testResult;
    if(minDiff==0)
    {
        document.getElementById("firstResult").innerHTML="You used "+secDiff+ "Seconds for the first test";
         testResult='0:'+secDiff;
    }
    else
    {
        document.getElementById("firstResult").innerHTML="You used "+minDiff +"Minutes "+secDiff+ "Seconds for the first test";
        testResult=minDiff+':'+secDiff;
    }
    StoreUserTestResult(testResult);
    location.href = "#popupResult"; 
}

function StoreUserTestResult(first)
{
    var d = new Date();
     
    var date = d.getDate();
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = d.getFullYear();
     
    var dateStr = date + "/" + month + "/" + year;

    var user =
        {
            name: YongXin,
            Date: dateStr,
            firstTest: first,
            SecondTest:0,
        }
    userArray.push(user);
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



function check(){
for (i = 0; i < circles.length; i++) {
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, circles[i].radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.fill();
    ctx.fillStyle = "white"
    ctx.font = '15px serif';
    ctx.fillText(circles[i].index, circles[i].x - 8, circles[i].y + 3);
    if(i==0)
    {
        ctx.fillStyle = "black"
        ctx.font = '15px serif';
        ctx.fillText("Start", circles[i].x - 10, circles[i].y + 40);

    }
    if(i==24)
    {
        ctx.fillStyle = "black"
        ctx.font = '15px serif';
        ctx.fillText("End", circles[i].x - 10, circles[i].y + 40);
    }
    ctx.closePath();
    if(i > 0){
        //check for overlap
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
        /*document.writeln(circles[i].x);
        document.writeln(circles[i-1].y);*/
        ctx.moveTo(circles[i-1].x,circles[i-1].y);
        ctx.lineTo(circles[i].x,circles[i].y);
        ctx.stroke();  // Draw it
        /*document.writeln(circles[i-1]);*/
        
    }
    ctx.beginPath();
    ctx.arc(rngCircle.x, rngCircle.y, circles[i].radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
    ctx.fill();
    ctx.closePath();
}}

function rng()
{
    ctx.beginPath();
    ctx.arc(randX, randY, 25, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(0, 255, 0, 0.7)";
    ctx.fill();
    ctx.fillStyle = "black"
    ctx.font = '15px serif';
    ctx.fillText(counter4, randX - 8, randY + 3);
    ctx.closePath(); 
}

function rng2()
{
    ctx.beginPath();
    ctx.arc(randX, randY, 25, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
    ctx.fill();
    ctx.fillStyle = "black"
    ctx.font = '15px serif';
    ctx.fillText(a, randX - 8, randY + 3);
    ctx.closePath(); 
}

function rng3()
{
    ctx.beginPath();
    ctx.arc(randX, randY, 25, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(255, 255, 0.7)";
    ctx.fill();
    ctx.fillStyle = "black"
    ctx.font = '15px serif';
    ctx.fillText(a, randX - 8, randY + 3);
    ctx.closePath(); 
}


function regenerate(){
    document.write('<pre>');
    document.writeln("Limit Reach at ", circles.length);
    rngCircle.index = 0;
    a = 1;
    circles = [];
    counter = 0;
    counter2 = 0;
    counter3 = 0;
    overlapping = false;
    los = true;
    document.writeln("New Limit ", circles.length);
    generateCir();

    
}
