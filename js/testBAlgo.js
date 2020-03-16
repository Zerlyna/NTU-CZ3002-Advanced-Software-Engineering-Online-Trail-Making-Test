var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13];
var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L"];
var numIndex=0;
var alphaIndex=0;

var a = 1;

//var msgObj = document.getElementById("msg");
//var msg2Obj = document.getElementById("msg2");
var firstResult=document.getElementById("firstResult");
var xPos, yPos, circX, circY, clickInfo = [];
var mousedown=false;
var nextIndex;
var interval;

var numOfAttempt=3;
var dataURL;

//new
var los = true;
var chk1_l1o1 ;
var chk2_l1o1 ;
var chk1_l1o2 ;
var chk2_l1o2 ;
var chk1_l2o1 ;
var chk2_l2o1 ;
var chk1_l2o2 ;
var chk2_l2o2 ;
var chk1_l2ob ;
var chk2_l2ob ;
var chk1_l1ob ;
var chk2_l1ob ;
var chk1_l1od1 ;
var chk2_l1od1 ;
var chk1_l2od1 ;
var chk2_l2od1 ;
var chk1_l1od2 ;
var chk2_l1od2 ;
var chk1_l2od2 ;
var chk2_l2od2 ;
var chk1_ld1od1 ;
var chk2_ld1od1 ;
var chk1_ld2od1 ;
var chk2_ld2od1 ;
var chk1_ld1od2 ;
var chk2_ld1od2 ;
var chk1_ld2od2 ;
var chk2_ld2od2 ;
var chk1;
var chk2;
var rngCircle;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var overcounter = 0;
var randX;
var randY;
var valid = true;
var overlapping = false;
var other;
var dy;
var dx;
var rr;
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
var isDrawing;
var lastX;
var lastY;
var toggle = true;

var m, cx , cy, cr, cf, ca, cb, cc; //cf , cb and cc are classify as common formula
var P1_x, P1_y, P2_x, P2_y , P3_x , P3_y , P4_x , P4_y;
var Pi1_x, Pi1_y, Pi2_x, Pi2_y , Pi3_x , Pi3_y , Pi4_x , Pi4_y;

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
        }
        else if (circles.length >= 1)
        {
            do{
                
                randX = Math.floor(circles[a-2].x + 60 + Math.random()* 980 - 490);
                randY = Math.floor(circles[a-2].y + 60 + Math.random()* 700 - 350);
                if(counter3 > 1000)
                {
                    regenerate(); //regenerate circle;

                }
                counter3++;

                
                 
            
            }while(randX > 940 || randY > 660 || randX < 40 || randY < 40); 

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
                regenerate(); //regenerate circle;
                
            }
            counter++;

         
        }
        
        //check if line of sequence is line of sight
        if(a > 2)
        {
            for (var j = 0; j < circles.length -1 ; j++) {

       
                chk1 = ((rngCircle.x-circles[j].x)*(circles[j+1].y-circles[j].y)-(rngCircle.y-circles[j].y)*(circles[j+1].x-circles[j].x))*((circles[a-2].x-circles[j].x)*(circles[j+1].y-circles[j].y)-(circles[a-2].y-circles[j].y)*(circles[j+1].x-circles[j].x));
                chk2 = ((circles[j].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j].y-rngCircle.y)*(circles[a-2].x-rngCircle.x))*((circles[j+1].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j+1].y-rngCircle.y)*(circles[a-2].x-rngCircle.x));

                if(chk1 < 0 && chk2 < 0 ){
                /*if (chk1_l1o1 < 0 && chk2_l1o1 < 0 || chk1_l1o2 < 0 && chk2_l1o2 < 0 || chk1_l2o1 < 0 && chk2_l2o1 < 0 || chk1_l2o2 < 0 && chk2_l2o2 < 0 
                    || chk1 < 0 && chk2 < 0 
                    || chk1_l1ob < 0  && chk2_l1ob < 0 || chk1_l2ob < 0 && chk2_l2ob < 0 
                    || chk1_l1od1 < 0 && chk2_l1od1< 0 || chk1_l2od1 < 0&& chk2_l2od1 < 0|| chk1_l1od2< 0 & chk2_l1od2< 0 || chk1_l2od2 < 0 && chk2_l2od2< 0
                    || chk1_ld1od1 < 0 && chk2_ld1od1< 0 || chk1_ld2od1 < 0&& chk2_ld2od1 < 0|| chk1_ld1od2< 0 & chk2_ld1od2< 0 || chk1_ld2od2 < 0 && chk2_ld2od2< 0){*/
                    los = false;
                    if(counter2 > 1000)
                    {
                     
                        regenerate(); //regenerate circle;
                    }
                    counter2 ++;
                    break;
                }
              
            }
            
        }
      
        if (!overlapping && los) { 
            if(circles.length==0)
            {
                rngCircle.index=numbers[numIndex];
                numIndex++;
            }
            else
            {
                var prevIndex=circles[circles.length-1].index;
                for(var n=0;n<numbers.length;n++)
                {
                    if(prevIndex==numbers[n])
                    {
                        rngCircle.index=alphabet[alphaIndex];
                        alphaIndex++;
                    }
                }
                for(var b=0;b<alphabet.length;b++)
                {
                    if(prevIndex==alphabet[b])
                    {
                        rngCircle.index=numbers[numIndex];
                        numIndex++;
                    }
                }

            }
            circles.push(rngCircle);
            overlapping = false;
            los = true;
            a++;
        } 
    }
    if(toggle && circles.length == 25) 
    {
        toggle = false;
        ctx.lineWidth = "5";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(10, 10, 980, 700);
        ctx.strokeStyle = "black";
        ctx.strokeRect(10, 10, 980, 700);
        ctx.lineWidth = "2";
        for (i = 0; i < circles.length; i++) {
                
                ctx.beginPath();
                ctx.arc(circles[i].x, circles[i].y, circles[i].radius , Math.PI * 2, 0, false);
                ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                ctx.stroke();
                ctx.closePath();
                if(i < 9)
                {
                    
                    /*ctx.fillStyle = "rgba(255, 255, 255, 1)";
                    ctx.fill();*/
                    ctx.fillStyle = "black"
                    ctx.font = '30px Arial';
                    ctx.fillText(circles[i].index, circles[i].x - 9 , circles[i].y + 10);
                }
                else
                {
                    ctx.fillStyle = "black"
                    ctx.font = '30px Arial';
                    ctx.fillText(circles[i].index, circles[i].x - 17 , circles[i].y + 10);
                }
                ctx.closePath();
                
            }
            ctx.lineWidth = "3";
            ctx.strokeStyle = "#666666";
    }
    if(overcounter == 30){
        /*document.write('<pre>');
        document.write("Overflow");*/
        return;
    }
    overcounter++;
}
function regenerate(){
    numIndex=0;
    alphaIndex=0;
    a = 1;
    circles = [];
    counter = 0;
    counter2 = 0;
    counter3 = 0;
    overlapping = false;
    los = true;
    generateCir();

    
}



// function generateCir()
// {
  
//     ctx.fillStyle = "#FFFFFF";
//     ctx.fillRect(10, 10, 980, 480);
//     ctx.strokeStyle = "black";
//     ctx.strokeRect(10, 10, 980, 480);
//     while (Test2circles.length < 25) {
//         var rngCircle2 =
//         {
//             index: 0,
//             x: Math.floor(Math.random() * 900 + 40),
//             y: Math.floor(Math.random() * 400 + 40),
//             radius: 25,
//         }
//         var overlapping = false;
//         //circles.push(rngCircle);
//         for (var i = 0; i < Test2circles.length; i++) {
//             var other = Test2circles[i];
//             var dx = rngCircle2.x - other.x;
//             var dy = rngCircle2.y - other.y;
//             //rr is use to ensure all the circle is not too near apart
//             var rr = 80;
//             //if no overlapping
//             if (dx * dx + dy * dy < rr * rr) {
//                 overlapping = true;
//                 break;
//             }
//         }
//         if (!overlapping) {
//              if(Test2circles.length==0)
//                 {
//                     rngCircle2.index=numbers[numIndex];
//                     Test2circles.push(rngCircle2);
//                     overlapping=true;
//                     numIndex++;
//                 }
//                 else
//                 {
//                     //get current array index to know whether is numbers or alphabet
//                     var prevIndex=Test2circles[Test2circles.length-1].index;
//                     for(n=0;n<numbers.length;n++)
//                     {
//                         //if is numbers then store alphabet as index
//                         if(prevIndex==numbers[n])
//                         {
//                             rngCircle2.index=alphabet[alphaIndex];
//                             alphaIndex++;
//                         }
//                     }
//                     for(a=0;a<alphabet.length;a++)
//                     {
//                         //if is alphabet then store numbers as index
//                         if(prevIndex==alphabet[a])
//                         {
//                             rngCircle2.index=numbers[numIndex];
//                             numIndex++;
//                         }
//                     }
//                     Test2circles.push(rngCircle2);
//                     overlapping=true;
//                 }
//         }
//     }
//     for (i = 0; i < Test2circles.length; i++) {
//         ctx.beginPath();
//         ctx.arc(Test2circles[i].x, Test2circles[i].y, Test2circles[i].radius, Math.PI * 2, 0, false);
//         ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
//         ctx.fill();
//         ctx.fillStyle = "white"
//         ctx.font = '15px serif';
//         ctx.fillText(Test2circles[i].index, Test2circles[i].x - 8, Test2circles[i].y + 3);
//         if(i==0)
//         {
//             ctx.fillStyle = "black"
//             ctx.font = '15px serif';
//             ctx.fillText("Start", Test2circles[i].x - 10, Test2circles[i].y + 40);
//         }
//         if(i==24)
//         {
//             ctx.fillStyle = "black"
//             ctx.font = '15px serif';
//             ctx.fillText("End", Test2circles[i].x - 10, Test2circles[i].y + 40);
//         }
//         ctx.closePath();
//     }
    
// }

//when u no longer touching the mouse
canvas.addEventListener('mouseout', () => isDrawing = false);
//move ur mouse
canvas.addEventListener('mousemove', draw);
//draw function
function draw(e) {
    // stop the function if they are not mouse down
    if(!isDrawing)
    {
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
        return;
    } 
    else
    {
        console.log(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    //listen for mouse move event
    
    
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
            currentIndex=clickInfo[clickInfo.length - 1].index;
            //get the index that they suppose to link to
            for(i=0;i<circles.length;i++)
            {
                if(currentIndex==circles[i].index)
                {
                    nextIndex=circles[i+1].index;
                    var cxpos=circles[i].x;
                    var cypos=circles[i].y;
                    var crad=circles[i].radius;
                    //must begin path if not the circle being colored will be 25 on default
                    ctx.beginPath();
                    ctx.arc(cxpos, cypos, crad, Math.PI * 2, 0, false);
                    ctx.fillStyle = "#00ff00";
                    ctx.fill();
                    ctx.closePath();
                    if(i<9)
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
                    // ctx.font = '15px serif';
                    // ctx.fillText(clickInfo[clickInfo.length-1].index,cxpos - 8, cypos + 3);
                    
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
  // msgObj.innerHTML = result;
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
        for (i = 0; i < circles.length; i++) 
        {
            cX = circles[i].x; cY = circles[i].y;
            xDiff = Math.abs(cX - xPos);
            yDiff = Math.abs(cY - yPos);
            dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
            // check if the user is really clicking on a circle    
            if (dist <= 30)
            {
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
            alert("Wrong, You suppose to link from "+clickInfo[clickInfo.length-2].index+" to "+nextIndex);
           //pop twice
            clickInfo.pop();
            clickInfo.pop();
            //load the image into canvas
            var img=new Image;
            img.onload=function()
            {
                ctx.drawImage(img,0,0);
            };
            img.src=dataURL;
            //limit to 3 attempt
            numOfAttempt--;
            if(numOfAttempt==0)
            {
                window.sessionStorage.setItem("TMT_A", JSON.stringify(180));
                alert("You have fail test B");
                location.href = "#TestResult";
            }
            
        }
        else
        {
            result="You link from " + clickInfo[clickInfo.length - 2].index+ "to "+ clickInfo[clickInfo.length - 1].index;
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
                    if(i<9)
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
            dataURL= canvas.toDataURL();
        }
    
        // get the selected circle index from variable no;
       //show result
        //msgObj.innerHTML = result;
        //[lastX, lastY] = [e.offsetX, e.offsetY];
        if(clickInfo[clickInfo.length - 1].index==13)
         {
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
            stopTest();
            }
            // else
            // {
            // alert("congrats");
            // stopTest();
            // }
           
        }
        else {
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
    // alert(msgObj.innerHTML);
    var timeleft=msgObj.innerHTML;
    //store the timeleft timing to the array
    var TLeftArray=timeleft.split(":");
    // alert(TLeftArray[0]);
    // alert(TLeftArray[1]);
    var minDiff=2-TLeftArray[0];
    var secDiff=60-TLeftArray[1];
    var testResult;
    if(minDiff==0)
    {
        document.getElementById("TMTBResult").innerHTML="You used "+secDiff+ "Seconds for the first test";
         testResult=secDiff;
    }
    else
    {
        secDiff+=(minDiff*60);
        document.getElementById("TMTBResult").innerHTML="You used "+secDiff+ "Seconds for the first test";
        testResult=secDiff;
    }
    // var date = d.getDate();
    // var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    // var year = d.getFullYear();
    //suppose to get the username based on the login 
    document.cookie = "username=John Doe";

    document.getElementById("tmtAResult").innerHTML=sessionStorage.getItem("TMT_A") + "Sec";
    document.getElementById("tmtBResult").innerHTML=testResult+"Sec";
    var tmtResultA=sessionStorage.getItem("TMT_A");
    var total=parseInt(tmtResultA);
     total+= parseInt(testResult);
    document.getElementById("totalResult").innerHTML=total+"Sec";
    if(tmtResultA<=78)
    {
        if(testResult<=273)
        {
            document.getElementById("risk").innerHTML="Risk of Dementia: LOW";
        }
        else
        {
            document.getElementById("risk").innerHTML="Risk of Dementia: Medium";
        }
    }
    else
    {
        if(testResult<=273)
        {
            document.getElementById("risk").innerHTML="Risk of Dementia: LOW";
        }
        else
        {
            document.getElementById("risk").innerHTML="Risk of Dementia: HIGH";
        }
    }
    window.sessionStorage.setItem("TMT_B", JSON.stringify(testResult));
    location.href = "#TestResult";
}


//
// function setCookie()
// {
//     var userObject={};
//     var d = new Date();
//     var date = d.getDate();
//     var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
//     var year = d.getFullYear();
//     //get the login username for now
//     userObject.name="Johnson";
//     userObject.testA=sessionStorage.getItem("TMT_A");
//     userObject.testB=sessionStorage.getItem("TMT_B");
//     userObject.Year=year;
//     userObject.month=month;
//     userObject.date=date;

//     var jsonString=JSON.stringify(userObject);
//     document.cookie="cookieObject="+jsonString;
//     var userarray=document.cookie.split("=");
//     alert(userarray[1]);

// }
// function getCookie()
// {
//     var nameValueArray=document.cookie.split("=");
//     var userObject=JSON.parse(nameValueArray[1]);
//     alert(userObject.name);
//     alert(userObject.testA);
//     alert(userObject.testB);
//     alert(userObject.Year);
// }
//
//
// Library
//

