var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
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

                

                /*cr = 15; // radius value 

                cx = rngCircle.x - circles[a-2].x;
                cy = rngCircle.y - circles[a-2].y;
                
                m = cy / cx;
                cf = (cr*(Math.pow(Math.pow(cx, 2) + Math.pow(cy, 2),0.5)))/cx;
                ca = circles[a-2].x*m ;
                cc = rngCircle.x*m;
                cb = (m + (1/m));


                //new line

                P1_x = Math.floor(((circles[a-2].x/m) + ca - cf) / cb);
                P1_y = Math.floor(((-(1/m)*((circles[a-2].x/m) + ca - cf)) /cb) + (circles[a-2].x/m) + circles[a-2].y);

                P2_x = Math.floor(((circles[a-2].x/m) + ca + cf) / cb);
                P2_y = Math.floor(((-(1/m)*((circles[a-2].x/m) + ca + cf)) /cb) + (circles[a-2].x/m) + circles[a-2].y);

                P3_x = Math.floor(((rngCircle.x/m) + cc - cf) / cb);
                P3_y = Math.floor(((-(1/m)*((rngCircle.x/m) + cc - cf)) /cb) + (rngCircle.x/m) + rngCircle.y);

                P4_x = Math.floor(((rngCircle.x/m) + cc + cf) / cb);
                P4_y = Math.floor(((-(1/m)*((rngCircle.x/m) + cc + cf)) /cb) + (rngCircle.x/m) + rngCircle.y);


                cx = circles[j+1].x - circles[j].x;
                cy = circles[j+1].y - circles[j].y;
                
                m = cy / cx;
                cf = (cr*(Math.pow(Math.pow(cx, 2) + Math.pow(cy, 2),0.5)))/cx;
                ca = circles[j].x*m ;
                cc = circles[j+1].x*m;
                cb = (m + (1/m));

                //old line
                Pi1_x = Math.floor(((circles[j].x/m) + ca - cf) / cb);
                Pi1_y = Math.floor(((-(1/m)*((circles[j].x/m) + ca - cf)) /cb) + (circles[j].x/m) + circles[j].y);

                Pi2_x = Math.floor(((circles[j].x/m) + ca + cf) / cb);
                Pi2_y = Math.floor(((-(1/m)*((circles[j].x/m) + ca + cf)) /cb) + (circles[j].x/m) + circles[j].y);

                Pi3_x = Math.floor(((circles[j+1].x/m) + cc - cf) / cb);
                Pi3_y = Math.floor(((-(1/m)*((circles[j+1].x/m) + cc - cf)) /cb) + (circles[j+1].x/m) + circles[j+1].y);

                Pi4_x = Math.floor(((circles[j+1].x/m) + cc + cf) / cb);
                Pi4_y = Math.floor(((-(1/m)*((circles[j+1].x/m) + cc + cf)) /cb) + (circles[j+1].x/m) + circles[j+1].y);

                /* 1--> 3 2-->4*/
                /*chk1_l1o1 = ((P1_x-Pi1_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P3_x-Pi1_x)*(Pi3_y-Pi1_y)-(P3_y-Pi1_y)*(Pi3_x-Pi1_x)); // P1 P3 , Pi1 Pi3
                chk2_l1o1 = ((Pi1_x-P1_x)*(P3_y-P1_y)-(Pi1_y-P1_y)*(P3_x-P1_x))*((Pi3_x-P1_x)*(P3_y-P1_y)-(Pi3_y-P1_y)*(P3_x-P1_x));

                chk1_l1o2 = ((P1_x-Pi2_x)*(Pi4_y-Pi2_y)-(P1_y-Pi2_y)*(Pi4_x-Pi2_x))*((P3_x-Pi2_x)*(Pi4_y-Pi2_y)-(P3_y-Pi2_y)*(Pi4_x-Pi2_x)); // P1 P3 , Pi2 Pi4
                chk2_l1o2 = ((Pi2_x-P1_x)*(P3_y-P1_y)-(Pi2_y-P1_y)*(P3_x-P1_x))*((Pi4_x-P1_x)*(P3_y-P1_y)-(Pi4_y-P1_y)*(P3_x-P1_x));

                chk1_l2o1 = ((P2_x-Pi1_x)*(Pi3_y-Pi1_y)-(P2_y-Pi1_y)*(Pi3_x-Pi1_x))*((P4_x-Pi1_x)*(Pi3_y-Pi1_y)-(P4_y-Pi1_y)*(Pi3_x-Pi1_x)); // P2 P4 , Pi1 Pi3
                chk2_l2o1 = ((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x))*((Pi3_x-P2_x)*(P4_y-P2_y)-(Pi3_y-P2_y)*(P4_x-P2_x));

                chk1_l2o2 = ((P2_x-Pi2_x)*(Pi4_y-Pi2_y)-(P2_y-Pi2_y)*(Pi4_x-Pi2_x))*((P4_x-Pi2_x)*(Pi4_y-Pi2_y)-(P4_y-Pi2_y)*(Pi4_x-Pi2_x)); // P2 P4 , Pi2 Pi4
                chk2_l2o2 = ((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi4_x-P2_x)*(P4_y-P2_y)-(Pi4_y-P2_y)*(P4_x-P2_x));

                chk1_l1ob = ((P3_x-Pi2_x)*(Pi1_y-Pi2_y)-(P3_y-Pi2_y)*(Pi1_x-Pi2_x))*((P1_x-Pi2_x)*(Pi1_y-Pi2_y)-(P1_y-Pi2_y)*(Pi1_x-Pi2_x)); // P1 P3 , Pi1 Pib
                chk2_l1ob = ((Pi2_x-P3_x)*(P1_y-P3_y)-(Pi2_y-P3_y)*(P1_x-P3_x))*((Pi1_x-P3_x)*(P1_y-P3_y)-(Pi1_y-P3_y)*(P1_x-P3_x));

                chk1_l2ob = ((P2_x-Pi2_x)*(Pi1_y-Pi2_y)-(P2_y-Pi2_y)*(Pi1_x-Pi2_x))*((P4_x-Pi2_x)*(Pi1_y-Pi2_y)-(P4_y-Pi2_y)*(Pi1_x-Pi2_x)); // P2 P4 , Pib Pib
                chk2_l2ob = ((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x));


                chk1_l1od1 = ((P1_x-Pi1_x)*(Pi4_y-Pi1_y)-(P1_y-Pi1_y)*(Pi4_x-Pi1_x))*((P3_x-Pi1_x)*(Pi4_y-Pi1_y)-(P3_y-Pi1_y)*(Pi4_x-Pi1_x)); //P1 P3 Pi4 Pi1
                chk2_l1od1 = ((Pi1_x-P1_x)*(P3_y-P1_y)-(Pi1_y-P1_y)*(P3_x-P1_x))*((Pi4_x-P1_x)*(P3_y-P1_y)-(Pi4_y-P1_y)*(P3_x-P1_x));
                chk1_l2od1 = ((P1_x-Pi2_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P3_x-Pi2_x)*(Pi3_y-Pi2_y)-(P3_y-Pi2_y)*(Pi3_x-Pi2_x)); //P1 P3 Pi2 Pi3
                chk2_l2od1 = ((Pi2_x-P1_x)*(P3_y-P1_y)-(Pi2_y-P1_y)*(P3_x-P1_x))*((Pi3_x-P1_x)*(P3_y-P1_y)-(Pi3_y-P1_y)*(P3_x-P1_x));

                chk1_l1od2 = ((P2_x-Pi1_x)*(Pi4_y-Pi1_y)-(P2_y-Pi1_y)*(Pi4_x-Pi1_x))*((P4_x-Pi1_x)*(Pi4_y-Pi1_y)-(P4_y-Pi1_y)*(Pi4_x-Pi1_x)); //P2 P4 Pi4 Pi1
                chk2_l1od2 = ((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x))*((Pi4_x-P2_x)*(P4_y-P2_y)-(Pi4_y-P2_y)*(P4_x-P2_x));
                chk1_l2od2 = ((P2_x-Pi2_x)*(Pi3_y-Pi2_y)-(P2_y-Pi2_y)*(Pi3_x-Pi2_x))*((P4_x-Pi2_x)*(Pi3_y-Pi2_y)-(P4_y-Pi2_y)*(Pi3_x-Pi2_x)); //P2 P4 Pi2 Pi3
                chk2_l2od2 = ((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi3_x-P2_x)*(P4_y-P2_y)-(Pi3_y-P2_y)*(P4_x-P2_x));

                chk1_ld1od1 = ((P1_x-Pi1_x)*(Pi4_y-Pi1_y)-(P1_y-Pi1_y)*(Pi4_x-Pi1_x))*((P4_x-Pi1_x)*(Pi4_y-Pi1_y)-(P4_y-Pi1_y)*(Pi4_x-Pi1_x)); //P1 P4 Pi4 Pi1
                chk2_ld1od1 = ((Pi1_x-P1_x)*(P4_y-P1_y)-(Pi1_y-P1_y)*(P4_x-P1_x))*((Pi4_x-P1_x)*(P4_y-P1_y)-(Pi4_y-P1_y)*(P4_x-P1_x));
                chk1_ld2od1 = ((P1_x-Pi2_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P4_x-Pi2_x)*(Pi3_y-Pi2_y)-(P4_y-Pi2_y)*(Pi3_x-Pi2_x)); //P1 P4 Pi2 Pi3
                chk2_ld2od1 = ((Pi2_x-P1_x)*(P4_y-P1_y)-(Pi2_y-P1_y)*(P4_x-P1_x))*((Pi3_x-P1_x)*(P4_y-P1_y)-(Pi3_y-P1_y)*(P4_x-P1_x));

                chk1_ld1od2 = ((P2_x-Pi1_x)*(Pi4_y-Pi1_y)-(P2_y-Pi1_y)*(Pi4_x-Pi1_x))*((P3_x-Pi1_x)*(Pi4_y-Pi1_y)-(P3_y-Pi1_y)*(Pi4_x-Pi1_x)); //P2 P3 Pi4 Pi1
                chk2_ld1od2 = ((Pi1_x-P2_x)*(P3_y-P2_y)-(Pi1_y-P2_y)*(P3_x-P2_x))*((Pi4_x-P2_x)*(P3_y-P2_y)-(Pi4_y-P2_y)*(P3_x-P2_x));
                chk1_ld2od2 = ((P2_x-Pi2_x)*(Pi3_y-Pi2_y)-(P2_y-Pi2_y)*(Pi3_x-Pi2_x))*((P3_x-Pi2_x)*(Pi3_y-Pi2_y)-(P3_y-Pi2_y)*(Pi3_x-Pi2_x)); //P2 P3 Pi2 Pi3
                chk2_ld2od2 = ((Pi2_x-P2_x)*(P3_y-P2_y)-(Pi2_y-P2_y)*(P3_x-P2_x))*((Pi3_x-P2_x)*(P3_y-P2_y)-(Pi3_y-P2_y)*(P3_x-P2_x));*/
                
                
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
        //
        /*if(Number.isNaN(chk1_l1o1)) //temp fixed
        {
            chk1_l1o1 = 0;
            chk2_l1o1 = 0;
            chk1_l1o2 = 0;
            chk2_l1o2 = 0;
            chk1_l2o1 = 0;
            chk2_l2o1 = 0;
            chk1_l2o2 = 0;
            chk2_l2o2 = 0;
            chk1_l2ob = 0;
            chk2_l2ob = 0;
            chk1_l1ob = 0;
            chk2_l1ob = 0;
            chk1_l1od1 = 0;
            chk2_l1od1 = 0;
            chk1_l2od1 = 0;
            chk2_l2od1 = 0;
            chk1_l1od2 = 0;
            chk2_l1od2 = 0;
            chk1_l2od2 = 0;
            chk2_l2od2 = 0;
            chk1_ld1od1 = 0;
            chk2_ld1od1 = 0;
            chk1_ld2od1 = 0;
            chk2_ld2od1 = 0;
            chk1_ld1od2 = 0;
            chk2_ld1od2 = 0;
            chk1_ld2od2 = 0;
            chk2_ld2od2 = 0;
            chk1 = 0;
            chk2 = 0;
            sessionStorage.clear();
            regenerate();
        }*/
        if (!overlapping && los) { 
            rngCircle.index = a; 
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


  function draw(e) 
  {
    // stop the function if they are not mouse down
    if(!isDrawing) { return;}
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
   // msgObj.innerHTML = result;
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
        clickInfo.pop();
        clickInfo.pop();
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
            alert("You have fail test A");
            location.href = "#secondTestRules";
        }

     }
    else
    {
      //  alert("You draw from circle " + clickInfo[clickInfo.length - 2].index+ "to "+ clickInfo[clickInfo.length - 1].index+ "Array Size:"+clickInfo.length);
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
    if(clickInfo[clickInfo.length - 1].index==25)
     {
    
     stopTest();
     
     }
    //start the coordinates drawing
     //[lastX, lastY] = [e.offsetX, e.offsetY];
      //convert canvas into image url
      dataURL= canvas.toDataURL();
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
                alert("You have fail test A");
               
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
    var msgObj=  document.getElementById("timer").innerHTML;
    var timeleft=msgObj;
    timerCountDown
    //store the timeleft timing to the array
    var TLeftArray=timeleft.split(":");
    var minDiff=2-TLeftArray[0];
    var secDiff=60-TLeftArray[1];
    var testResult;
   

    if(minDiff==0)
    {
       
        document.getElementById("firstResult").innerHTML="You used "+secDiff+ "Seconds for the first test";
        testResult=secDiff;
  

    }
    else
    {
       
        secDiff+=(minDiff*60);
        document.getElementById("firstResult").innerHTML="You used "+secDiff+ "Seconds for the first test";

        testResult=secDiff;
    }
    setCookie("test_A", secDiff, 1)
    window.sessionStorage.setItem("TMT_A", JSON.stringify(testResult));
    location.href = "#secondTestRules";
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


function regenerate(){
    rngCircle.index = 0;
    a = 1;
    circles = [];
    counter = 0;
    counter2 = 0;
    counter3 = 0;
    overlapping = false;
    los = true;
    generateCir();    
}
