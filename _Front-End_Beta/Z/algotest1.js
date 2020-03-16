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
var chk1_l1o1 ; /*chk1_l1o1, " " , chk2_l1o1, " | ", chk1_l1o2 , " " , chk2_l1o2 , " | " , chk1_l2o1, " " , chk2_l2o1, " | ", chk1_l2o2 , " " , chk2_l2o2 , " | " , chk1 ," " , chk2 " "*/
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
/*var counter4 = 0;*/
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
var divs;
var nP1_x, nP1_y, nP2_x,nP2_y,nP3_x,nP3_y,nP4_x,nP4_y;
var nPi1_x, nPi1_y, nPi2_x,nPi2_y,nPi3_x,nPi3_y,nPi4_x,nPi4_y;

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
                if(counter3 > 5000)
                {
                    document.writeln(randX, " ", randY);
                    document.writeln("Max Neighbour");
                    document.writeln(chk1_l1o1, " " , chk2_l1o1, " | ", chk1_l1o2 , " " , chk2_l1o2 , " | " , chk1_l2o1, " " , chk2_l2o1, " | ", chk1_l2o2 , " " , chk2_l2o2);
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
            if(counter > 1000)
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

                

                cr = 25; // radius value 

               /* document.write('<pre>');
                document.writeln("Value A at = ", a-2, " ");
                document.writeln("Compare Last Line P2 :" , circles[a-2].x, " ", circles[a-2].y, " ");
                document.writeln("Compare Last Line P1 :" , rngCircle.x, " ", rngCircle.y, " ");
                document.writeln("Compare Line P1     " , j ,":",circles[j].x, " ", circles[j].y, " ");
                document.writeln("Compare Line P2     ", j ,":", circles[j+1].x, " ", circles[j+1].y, " ");*/
                
                /*document.write(a-1);
                /*check();
                

                return;*/
                /*Math.pow(xDiff, 2)*/
                /*
                Point Bx = rngCircle.x      /x2  
                Point By = rngCircle.y      /y2
                Point Ax = circles[a-2].x   /x1
                Point Ay = circles[a-2].y   /y1
                */
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

                /*
                Point Bx = rngCircle.x      /x2  
                Point By = rngCircle.y      /y2
                Point Ax = circles[a-2].x   /x1
                Point Ay = circles[a-2].y   /y1
                */
                /*
                Cx = P1_x nCx = nP1_x
                Cy = P1_y
                Ex = P2_x
                Ey = P2_y
                Dx = P3_x
                Dy = P3_y 
                Fx = P4_x
                Fy = P4_y nFy = nP4_y
                */
                divs = 1;
                nP1_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((P1_x- circles[a-2].x )+(P1_y - circles[a-2].y)) + circles[a-2].x);
                nP1_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(P1_x- circles[a-2].x )+(P1_y - circles[a-2].y)) + circles[a-2].y);

                nP2_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[a-2].x- P2_x)-(circles[a-2].y - P2_y)) + circles[a-2].x);
                nP2_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[a-2].x- P2_x)+(circles[a-2].y - P2_y)) + circles[a-2].y);

                nP3_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((P3_x- rngCircle.x )-(P3_y - rngCircle.y)) + rngCircle.x);
                nP3_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((P3_x- rngCircle.x )+(P3_y - rngCircle.y)) + rngCircle.y);

                nP4_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((rngCircle.x- P4_x)+(rngCircle.y - P4_y)) + rngCircle.x);
                nP4_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(rngCircle.x- P4_x)+(rngCircle.y - P4_y)) + rngCircle.y);



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

                nPi1_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi1_x- circles[j].x )+(Pi1_y - circles[j].y)) + circles[j].x);
                nPi1_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(Pi1_x- circles[j].x )+(Pi1_y - circles[j].y)) + circles[j].y);

                nPi2_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[j].x- Pi2_x)-(circles[j].y - Pi2_y)) + circles[j].x);
                nPi2_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[j].x- Pi2_x)+(circles[j].y - Pi2_y)) + circles[j].y);

                nPi3_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi3_x- circles[j+1].x )-(Pi3_y - circles[j+1].y)) + circles[j+1].x);
                nPi3_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi3_x- circles[j+1].x )+(Pi3_y - circles[j+1].y)) + circles[j+1].y);

                nPi4_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[j+1].x- Pi4_x)+(circles[j+1].y - Pi4_y)) + circles[j+1].x);
                nPi4_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(circles[j+1].x- Pi4_x)+(circles[j+1].y - Pi4_y)) + circles[j+1].y);





                /* 1--> 3 2-->4*/
                /*chk1_l1o1 = Math.floor(((P1_x-Pi1_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P3_x-Pi1_x)*(Pi3_y-Pi1_y)-(P3_y-Pi1_y)*(Pi3_x-Pi1_x))); // P1 P3 , Pi1 Pi3
                chk2_l1o1 = Math.floor(((Pi1_x-P1_x)*(P3_y-P1_y)-(Pi1_y-P1_y)*(P3_x-P1_x))*((Pi3_x-P1_x)*(P3_y-P1_y)-(Pi3_y-P1_y)*(P3_x-P1_x)));

                chk1_l1o2 = Math.floor(((P1_x-Pi2_x)*(Pi4_y-Pi2_y)-(P1_y-Pi2_y)*(Pi4_x-Pi2_x))*((P3_x-Pi2_x)*(Pi4_y-Pi2_y)-(P3_y-Pi2_y)*(Pi4_x-Pi2_x))); // P1 P3 , Pi2 Pi4
                chk2_l1o2 = Math.floor(((Pi2_x-P1_x)*(P3_y-P1_y)-(Pi2_y-P1_y)*(P3_x-P1_x))*((Pi4_x-P1_x)*(P3_y-P1_y)-(Pi4_y-P1_y)*(P3_x-P1_x)));

                chk1_l2o1 = Math.floor(((P2_x-Pi1_x)*(Pi3_y-Pi1_y)-(P2_y-Pi1_y)*(Pi3_x-Pi1_x))*((P4_x-Pi1_x)*(Pi3_y-Pi1_y)-(P4_y-Pi1_y)*(Pi3_x-Pi1_x))); // P2 P4 , Pi1 Pi3
                chk2_l2o1 = Math.floor(((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x))*((Pi3_x-P2_x)*(P4_y-P2_y)-(Pi3_y-P2_y)*(P4_x-P2_x)));

                chk1_l2o2 = Math.floor(((P2_x-Pi2_x)*(Pi4_y-Pi2_y)-(P2_y-Pi2_y)*(Pi4_x-Pi2_x))*((P4_x-Pi2_x)*(Pi4_y-Pi2_y)-(P4_y-Pi2_y)*(Pi4_x-Pi2_x))); // P2 P4 , Pi2 Pi4
                chk2_l2o2 = Math.floor(((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi4_x-P2_x)*(P4_y-P2_y)-(Pi4_y-P2_y)*(P4_x-P2_x)));

                chk1_l1ob = Math.floor(((P3_x-Pi2_x)*(Pi1_y-Pi2_y)-(P3_y-Pi2_y)*(Pi1_x-Pi2_x))*((P1_x-Pi2_x)*(Pi1_y-Pi2_y)-(P1_y-Pi2_y)*(Pi1_x-Pi2_x))); // P1 P3 , Pi1 Pib
                chk2_l1ob = Math.floor(((Pi2_x-P3_x)*(P1_y-P3_y)-(Pi2_y-P3_y)*(P1_x-P3_x))*((Pi1_x-P3_x)*(P1_y-P3_y)-(Pi1_y-P3_y)*(P1_x-P3_x)));

                chk1_l2ob = Math.floor(((P2_x-Pi2_x)*(Pi1_y-Pi2_y)-(P2_y-Pi2_y)*(Pi1_x-Pi2_x))*((P4_x-Pi2_x)*(Pi1_y-Pi2_y)-(P4_y-Pi2_y)*(Pi1_x-Pi2_x))); // P2 P4 , Pib Pib
                chk2_l2ob = Math.floor(((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x)));


                chk1_l1od1 = Math.floor(((P1_x-Pi1_x)*(Pi4_y-Pi1_y)-(P1_y-Pi1_y)*(Pi4_x-Pi1_x))*((P3_x-Pi1_x)*(Pi4_y-Pi1_y)-(P3_y-Pi1_y)*(Pi4_x-Pi1_x))); //P1 P3 Pi4 Pi1
                chk2_l1od1 = Math.floor(((Pi1_x-P1_x)*(P3_y-P1_y)-(Pi1_y-P1_y)*(P3_x-P1_x))*((Pi4_x-P1_x)*(P3_y-P1_y)-(Pi4_y-P1_y)*(P3_x-P1_x)));
                chk1_l2od1 = Math.floor(((P1_x-Pi2_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P3_x-Pi2_x)*(Pi3_y-Pi2_y)-(P3_y-Pi2_y)*(Pi3_x-Pi2_x))); //P1 P3 Pi2 Pi3
                chk2_l2od1 = Math.floor(((Pi2_x-P1_x)*(P3_y-P1_y)-(Pi2_y-P1_y)*(P3_x-P1_x))*((Pi3_x-P1_x)*(P3_y-P1_y)-(Pi3_y-P1_y)*(P3_x-P1_x)));

                chk1_l1od2 = Math.floor(((P2_x-Pi1_x)*(Pi4_y-Pi1_y)-(P2_y-Pi1_y)*(Pi4_x-Pi1_x))*((P4_x-Pi1_x)*(Pi4_y-Pi1_y)-(P4_y-Pi1_y)*(Pi4_x-Pi1_x))); //P2 P4 Pi4 Pi1
                chk2_l1od2 = Math.floor(((Pi1_x-P2_x)*(P4_y-P2_y)-(Pi1_y-P2_y)*(P4_x-P2_x))*((Pi4_x-P2_x)*(P4_y-P2_y)-(Pi4_y-P2_y)*(P4_x-P2_x)));
                chk1_l2od2 = Math.floor(((P2_x-Pi2_x)*(Pi3_y-Pi2_y)-(P2_y-Pi2_y)*(Pi3_x-Pi2_x))*((P4_x-Pi2_x)*(Pi3_y-Pi2_y)-(P4_y-Pi2_y)*(Pi3_x-Pi2_x))); //P2 P4 Pi2 Pi3
                chk2_l2od2 = Math.floor(((Pi2_x-P2_x)*(P4_y-P2_y)-(Pi2_y-P2_y)*(P4_x-P2_x))*((Pi3_x-P2_x)*(P4_y-P2_y)-(Pi3_y-P2_y)*(P4_x-P2_x)));

                chk1_ld1od1 = Math.floor(((P1_x-Pi1_x)*(Pi4_y-Pi1_y)-(P1_y-Pi1_y)*(Pi4_x-Pi1_x))*((P4_x-Pi1_x)*(Pi4_y-Pi1_y)-(P4_y-Pi1_y)*(Pi4_x-Pi1_x))); //P1 P4 Pi4 Pi1
                chk2_ld1od1 = Math.floor(((Pi1_x-P1_x)*(P4_y-P1_y)-(Pi1_y-P1_y)*(P4_x-P1_x))*((Pi4_x-P1_x)*(P4_y-P1_y)-(Pi4_y-P1_y)*(P4_x-P1_x)));
                chk1_ld2od1 = Math.floor(((P1_x-Pi2_x)*(Pi3_y-Pi1_y)-(P1_y-Pi1_y)*(Pi3_x-Pi1_x))*((P4_x-Pi2_x)*(Pi3_y-Pi2_y)-(P4_y-Pi2_y)*(Pi3_x-Pi2_x))); //P1 P4 Pi2 Pi3
                chk2_ld2od1 = Math.floor(((Pi2_x-P1_x)*(P4_y-P1_y)-(Pi2_y-P1_y)*(P4_x-P1_x))*((Pi3_x-P1_x)*(P4_y-P1_y)-(Pi3_y-P1_y)*(P4_x-P1_x)));

                chk1_ld1od2 = Math.floor(((P2_x-Pi1_x)*(Pi4_y-Pi1_y)-(P2_y-Pi1_y)*(Pi4_x-Pi1_x))*((P3_x-Pi1_x)*(Pi4_y-Pi1_y)-(P3_y-Pi1_y)*(Pi4_x-Pi1_x))); //P2 P3 Pi4 Pi1
                chk2_ld1od2 = Math.floor(((Pi1_x-P2_x)*(P3_y-P2_y)-(Pi1_y-P2_y)*(P3_x-P2_x))*((Pi4_x-P2_x)*(P3_y-P2_y)-(Pi4_y-P2_y)*(P3_x-P2_x)));
                chk1_ld2od2 = Math.floor(((P2_x-Pi2_x)*(Pi3_y-Pi2_y)-(P2_y-Pi2_y)*(Pi3_x-Pi2_x))*((P3_x-Pi2_x)*(Pi3_y-Pi2_y)-(P3_y-Pi2_y)*(Pi3_x-Pi2_x))); //P2 P3 Pi2 Pi3
                chk2_ld2od2 = Math.floor(((Pi2_x-P2_x)*(P3_y-P2_y)-(Pi2_y-P2_y)*(P3_x-P2_x))*((Pi3_x-P2_x)*(P3_y-P2_y)-(Pi3_y-P2_y)*(P3_x-P2_x)));*/


                chk1_l1o1 = Math.floor(((nP1_x-nPi1_x)*(nPi3_y-nPi1_y)-(nP1_y-nPi1_y)*(nPi3_x-nPi1_x))*((nP3_x-nPi1_x)*(nPi3_y-nPi1_y)-(nP3_y-nPi1_y)*(nPi3_x-nPi1_x))); // P1 P3 , Pi1 Pi3
                chk2_l1o1 = Math.floor(((nPi1_x-nP1_x)*(nP3_y-nP1_y)-(nPi1_y-nP1_y)*(nP3_x-nP1_x))*((nPi3_x-nP1_x)*(nP3_y-nP1_y)-(nPi3_y-nP1_y)*(nP3_x-nP1_x)));

                chk1_l1o2 = Math.floor(((nP1_x-nPi2_x)*(nPi4_y-nPi2_y)-(nP1_y-nPi2_y)*(nPi4_x-nPi2_x))*((nP3_x-nPi2_x)*(nPi4_y-nPi2_y)-(nP3_y-nPi2_y)*(nPi4_x-nPi2_x))); // P1 P3 , Pi2 Pi4
                chk2_l1o2 = Math.floor(((nPi2_x-nP1_x)*(nP3_y-nP1_y)-(nPi2_y-nP1_y)*(nP3_x-nP1_x))*((nPi4_x-nP1_x)*(nP3_y-nP1_y)-(nPi4_y-nP1_y)*(nP3_x-nP1_x)));

                chk1_l2o1 = Math.floor(((nP2_x-nPi1_x)*(nPi3_y-nPi1_y)-(nP2_y-nPi1_y)*(nPi3_x-nPi1_x))*((nP4_x-nPi1_x)*(nPi3_y-nPi1_y)-(nP4_y-nPi1_y)*(nPi3_x-nPi1_x))); // P2 P4 , Pi1 Pi3
                chk2_l2o1 = Math.floor(((nPi1_x-nP2_x)*(nP4_y-nP2_y)-(nPi1_y-nP2_y)*(nP4_x-nP2_x))*((nPi3_x-nP2_x)*(nP4_y-nP2_y)-(nPi3_y-nP2_y)*(nP4_x-nP2_x)));

                chk1_l2o2 = Math.floor(((nP2_x-nPi2_x)*(nPi4_y-nPi2_y)-(nP2_y-nPi2_y)*(nPi4_x-nPi2_x))*((nP4_x-nPi2_x)*(nPi4_y-nPi2_y)-(nP4_y-nPi2_y)*(nPi4_x-nPi2_x))); // P2 P4 , Pi2 Pi4
                chk2_l2o2 = Math.floor(((nPi2_x-nP2_x)*(nP4_y-nP2_y)-(nPi2_y-nP2_y)*(nP4_x-nP2_x))*((nPi4_x-nP2_x)*(nP4_y-nP2_y)-(nPi4_y-nP2_y)*(nP4_x-nP2_x)));

                chk1_l1ob = Math.floor(((nP3_x-nPi2_x)*(nPi1_y-nPi2_y)-(nP3_y-nPi2_y)*(nPi1_x-nPi2_x))*((nP1_x-nPi2_x)*(nPi1_y-nPi2_y)-(nP1_y-nPi2_y)*(nPi1_x-nPi2_x))); // P1 P3 , Pi1 Pib
                chk2_l1ob = Math.floor(((nPi2_x-nP3_x)*(nP1_y-nP3_y)-(nPi2_y-nP3_y)*(nP1_x-nP3_x))*((nPi1_x-nP3_x)*(nP1_y-nP3_y)-(nPi1_y-nP3_y)*(nP1_x-nP3_x)));

                chk1_l2ob = Math.floor(((nP2_x-nPi2_x)*(nPi1_y-nPi2_y)-(nP2_y-nPi2_y)*(nPi1_x-nPi2_x))*((nP4_x-nPi2_x)*(nPi1_y-nPi2_y)-(nP4_y-nPi2_y)*(nPi1_x-nPi2_x))); // P2 P4 , Pib Pib
                chk2_l2ob = Math.floor(((nPi2_x-nP2_x)*(nP4_y-nP2_y)-(nPi2_y-nP2_y)*(nP4_x-nP2_x))*((nPi1_x-nP2_x)*(nP4_y-nP2_y)-(nPi1_y-nP2_y)*(nP4_x-nP2_x)));


                chk1_l1od1 = Math.floor(((nP1_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP1_y-nPi1_y)*(nPi4_x-nPi1_x))*((nP3_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP3_y-nPi1_y)*(nPi4_x-nPi1_x))); //P1 P3 Pi4 Pi1
                chk2_l1od1 = Math.floor(((nPi1_x-nP1_x)*(nP3_y-nP1_y)-(nPi1_y-nP1_y)*(nP3_x-nP1_x))*((nPi4_x-nP1_x)*(nP3_y-nP1_y)-(nPi4_y-nP1_y)*(nP3_x-nP1_x)));
                chk1_l2od1 = Math.floor(((nP1_x-nPi2_x)*(nPi3_y-nPi1_y)-(nP1_y-nPi1_y)*(nPi3_x-nPi1_x))*((nP3_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP3_y-nPi2_y)*(nPi3_x-nPi2_x))); //P1 P3 Pi2 Pi3
                chk2_l2od1 = Math.floor(((nPi2_x-nP1_x)*(nP3_y-nP1_y)-(nPi2_y-nP1_y)*(nP3_x-nP1_x))*((nPi3_x-nP1_x)*(nP3_y-nP1_y)-(nPi3_y-nP1_y)*(nP3_x-nP1_x)));

                chk1_l1od2 = Math.floor(((nP2_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP2_y-nPi1_y)*(nPi4_x-nPi1_x))*((nP4_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP4_y-nPi1_y)*(nPi4_x-nPi1_x))); //P2 P4 Pi4 Pi1
                chk2_l1od2 = Math.floor(((nPi1_x-nP2_x)*(nP4_y-nP2_y)-(nPi1_y-nP2_y)*(nP4_x-nP2_x))*((nPi4_x-nP2_x)*(nP4_y-nP2_y)-(nPi4_y-nP2_y)*(nP4_x-nP2_x)));
                chk1_l2od2 = Math.floor(((nP2_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP2_y-nPi2_y)*(nPi3_x-nPi2_x))*((nP4_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP4_y-nPi2_y)*(nPi3_x-nPi2_x))); //P2 P4 Pi2 Pi3
                chk2_l2od2 = Math.floor(((nPi2_x-nP2_x)*(nP4_y-nP2_y)-(nPi2_y-nP2_y)*(nP4_x-nP2_x))*((nPi3_x-nP2_x)*(nP4_y-nP2_y)-(nPi3_y-nP2_y)*(nP4_x-nP2_x)));

                chk1_ld1od1 = Math.floor(((nP1_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP1_y-nPi1_y)*(nPi4_x-nPi1_x))*((nP4_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP4_y-nPi1_y)*(nPi4_x-nPi1_x))); //P1 P4 Pi4 Pi1
                chk2_ld1od1 = Math.floor(((nPi1_x-nP1_x)*(nP4_y-nP1_y)-(nPi1_y-nP1_y)*(nP4_x-nP1_x))*((nPi4_x-nP1_x)*(nP4_y-nP1_y)-(nPi4_y-nP1_y)*(nP4_x-nP1_x)));
                chk1_ld2od1 = Math.floor(((nP1_x-nPi2_x)*(nPi3_y-nPi1_y)-(nP1_y-nPi1_y)*(nPi3_x-nPi1_x))*((nP4_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP4_y-nPi2_y)*(nPi3_x-nPi2_x))); //P1 P4 Pi2 Pi3
                chk2_ld2od1 = Math.floor(((nPi2_x-nP1_x)*(nP4_y-nP1_y)-(nPi2_y-nP1_y)*(nP4_x-nP1_x))*((nPi3_x-nP1_x)*(nP4_y-nP1_y)-(nPi3_y-nP1_y)*(nP4_x-nP1_x)));

                chk1_ld1od2 = Math.floor(((nP2_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP2_y-nPi1_y)*(nPi4_x-nPi1_x))*((nP3_x-nPi1_x)*(nPi4_y-nPi1_y)-(nP3_y-nPi1_y)*(nPi4_x-nPi1_x))); //P2 P3 Pi4 Pi1
                chk2_ld1od2 = Math.floor(((nPi1_x-nP2_x)*(nP3_y-nP2_y)-(nPi1_y-nP2_y)*(nP3_x-nP2_x))*((nPi4_x-nP2_x)*(nP3_y-nP2_y)-(nPi4_y-nP2_y)*(nP3_x-nP2_x)));
                chk1_ld2od2 = Math.floor(((nP2_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP2_y-nPi2_y)*(nPi3_x-nPi2_x))*((nP3_x-nPi2_x)*(nPi3_y-nPi2_y)-(nP3_y-nPi2_y)*(nPi3_x-nPi2_x))); //P2 P3 Pi2 Pi3
                chk2_ld2od2 = Math.floor(((nPi2_x-nP2_x)*(nP3_y-nP2_y)-(nPi2_y-nP2_y)*(nP3_x-nP2_x))*((nPi3_x-nP2_x)*(nP3_y-nP2_y)-(nPi3_y-nP2_y)*(nP3_x-nP2_x)));

                /*if(chk1_l1od1 < 0 && chk2_l1od1< 0 || chk1_l2od1 < 0&& chk2_l2od1 < 0|| chk1_l1od2< 0 & chk2_l1od2< 0 || chk1_l2od2 < 0&& chk2_l2od2< 0)*/
                
                /*check2();
                ctx.beginPath();  //Pi1 Pi3 black
                ctx.lineWidth = "5";
                ctx.strokeStyle = "#000000";
                ctx.moveTo(Pi1_x, Pi1_y);
                ctx.lineTo(Pi4_x, Pi4_y);
                ctx.stroke();  // Draw it
                ctx.closePath();*/
                /*ctx.beginPath();  //Pi1 Pi3 black
                ctx.lineWidth = "5";
                ctx.strokeStyle = "#000000";
                ctx.moveTo(Pi3_x, Pi3_y);
                ctx.lineTo(Pi4_x, Pi4_y);
                ctx.stroke();  // Draw it
                ctx.closePath();*/
                /*return;*/

                /*document.writeln(" P1X ", P1_x, " P1Y ", P1_y, " DX " , cx, " DY ", cy , " M " , m, " cf ", cf , " ca ", ca);*/





                

                /*check2();
                ctx.beginPath();
                ctx.arc(P1_x, P1_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
                ctx.fill();
                ctx.fillStyle = "black"
                ctx.font = '10px serif';
                ctx.fillText("C", P1_x, P1_y );
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(P2_x, P2_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
                ctx.fill();
                ctx.fillStyle = "black"
                ctx.font = '10px serif';
                ctx.fillText("E", P2_x, P2_y);
                ctx.closePath();


                ctx.beginPath();
                ctx.arc(nP1_x, nP1_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
                ctx.fill();
                ctx.fillStyle = "black"
                ctx.font = '10px serif';
                ctx.fillText("nC", nP1_x, nP1_y);
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(nP2_x, nP2_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 0, 255, 0.8)";
                ctx.fill();
                ctx.fillStyle = "black"
                ctx.font = '10px serif';
                ctx.fillText("nE", nP2_x, nP2_y);
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(P3_x, P3_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(P4_x, P4_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(nP3_x, nP3_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(nP4_x, nP4_y, 5, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(255, 0, 255, 0.8)";
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.lineWidth = "5";
                ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
                ctx.moveTo(nP1_x,nP1_y);
                ctx.lineTo(nP3_x, nP3_y);
                ctx.stroke();  // Draw it
                ctx.closePath();

                return;
                /*ctx.beginPath();
                ctx.arc(P2_x, P2_y, 10, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(Pi3_x, Pi3_y, 10, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(Pi1_x, Pi1_y, 10, Math.PI * 2, 0, false);
                ctx.fillStyle = "rgba(255, 0, 255, 0.8)";
                ctx.closePath();*/
                
                /*ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = "5";
                ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
                ctx.moveTo(P1_x,P1_y);
                ctx.lineTo(P3_x, P3_y);
                ctx.stroke();  // Draw it
                ctx.closePath();*/
                /*if(chk1_l1o1 < 0 && chk2_l1o1 < 0){ 

                    document.writeln("Collision : green and black line");
                }
                if( chk1_l1o2 < 0  && chk2_l1o2 < 0){
                    document.writeln("Collision : green and blue line");
                }
                if( chk1_l2o1 < 0  && chk2_l2o1 < 0){
                    document.writeln("Collision : yellow and black line");
                }
                if( chk1_l2o2 < 0  && chk2_l2o2 < 0){
                    document.writeln("Collision : yellow and blue line");
                }
                ctx.beginPath();  //Pi1 Pi3 black
                ctx.lineWidth = "5";
                ctx.strokeStyle = "#000000";
                ctx.moveTo(Pi3_x, Pi3_y);
                ctx.lineTo(Pi1_x, Pi1_y);
                ctx.stroke();  // Draw it
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = "5"; //P1 P3 green
                ctx.strokeStyle = "#00ff00";
                ctx.moveTo(P1_x, P1_y);
                ctx.lineTo(P3_x, P3_y);
                ctx.stroke();  // Draw it
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = "5";
                ctx.strokeStyle = "#ffff00"; //P2 P4 yellow
                ctx.moveTo(P2_x, P2_y);
                ctx.lineTo(P4_x, P4_y);
                ctx.stroke();  // Draw it
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = "5";
                ctx.strokeStyle = "#0000ff"; //PI2 Pi4  blue
                ctx.moveTo(Pi2_x, Pi2_y);
                ctx.lineTo(Pi4_x, Pi4_y);
                ctx.stroke();  // Draw it
                ctx.closePath();*/
                
                

                chk1 = ((rngCircle.x-circles[j].x)*(circles[j+1].y-circles[j].y)-(rngCircle.y-circles[j].y)*(circles[j+1].x-circles[j].x))*((circles[a-2].x-circles[j].x)*(circles[j+1].y-circles[j].y)-(circles[a-2].y-circles[j].y)*(circles[j+1].x-circles[j].x));
                chk2 = ((circles[j].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j].y-rngCircle.y)*(circles[a-2].x-rngCircle.x))*((circles[j+1].x-rngCircle.x)*(circles[a-2].y-rngCircle.y)-(circles[j+1].y-rngCircle.y)*(circles[a-2].x-rngCircle.x));

                /*chk1 = ((xA-xC)*(yD-yC)-(yA-yC)*(xD-xC))*((xB-xC)*(yD-yC)-(yB-yC)*(xD-xC));
                chk2 = ((xC-xA)*(yB-yA)-(yC-yA)*(xB-xA))*((xD-xA)*(yB-yA)-(yD-yA)*(xB-xA));*/
                /*document.writeln("Count ", counter4," ",chk1, " " , chk2);*/

                /*if (chk1_l1o1 < 0 && chk2_l1o1 < 0 && chk1_l1o2 < 0 && chk2_l1o2 < 0 && chk1_l2o1 < 0 && chk2_l2o1 < 0 && chk1_l2o2 < 0 && chk2_l2o2 < 0)
                {*/
                /*if (chk1_l1o1 < 0 && chk2_l1o1 < 0 || chk1_l1o2 < 0 && chk2_l1o2 < 0 || chk1_l2o1 < 0 && chk2_l2o1 < 0 || chk1_l2o2 < 0 && chk2_l2o2 < 0)
                {*/
                if (/*chk1_l1o1 < 0 && chk2_l1o1 < 0 || chk1_l1o2 < 0 && chk2_l1o2 < 0 || chk1_l2o1 < 0 && chk2_l2o1 < 0 || chk1_l2o2 < 0 && chk2_l2o2 < 0 
                    ||*/ chk1 < 0 && chk2 < 0 
                    /*|| chk1_l1ob < 0  && chk2_l1ob < 0 || chk1_l2ob < 0 && chk2_l2ob < 0*/
                    /*|| chk1_l1od1 < 0 && chk2_l1od1< 0 || chk1_l2od1 < 0&& chk2_l2od1 < 0|| chk1_l1od2< 0 & chk2_l1od2< 0 || chk1_l2od2 < 0&& chk2_l2od2< 0*/
                    /*|| chk1_ld1od1 < 0 && chk2_ld1od1< 0 || chk1_ld2od1 < 0&& chk2_ld2od1 < 0|| chk1_ld1od2< 0 & chk2_ld1od2< 0 || chk1_ld2od2 < 0&& chk2_ld2od2< 0*/){
                    los = false;
                     /*counter4++;*/
                    if(counter2 > 1000)
                    {

                        document.writeln("Max Comparison")
                        /*check();*/
                        sessionStorage.clear();
                        regenerate(); //regenerate circle;
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
        /*if(Number.isNaN(chk1_l1o1)) //temp fixed
        {*/
            /*document.write('<pre>');
            document.write("NaN Detected");*/
            /*los = false;*/
           /* chk1_l1o1 = 0;
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
            document.write('<pre>');
            document.writeln("Success Insert " , a ,"  == ", chk1_l1o1, " " , chk2_l1o1, " | ", chk1_l1o2 , " " , chk2_l1o2 , " | " , chk1_l2o1, " " , chk2_l2o1, " | ", chk1_l2o2 , " " , chk2_l2o2 , " | " , chk1 ," " , chk2, " | ", chk1_l1ob , " " , chk2_l1ob , " | " , chk1_l2ob , " " , chk2_l2ob, " | ", overlapping , los);
            rngCircle.index = a; 
            circles.push(rngCircle);
            overlapping = false;
            los = true;
            a++;
            
        } 
    }
    if(toggle && circles.length == 25 ) 
    {
        toggle = false;
        ctx.lineWidth = "5";
        ctx.fillStyle = "#FFFFFF";
        /*ctx.fillRect(10, 10, 980, 700);*/
        ctx.strokeStyle = "black";
        ctx.strokeRect(10, 10, 980, 700);
        ctx.lineWidth = "2";
        for (i = 0; i < circles.length; i++) {

                /*check();*/
                check2();
                return;
                

                
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
                
                ctx.closePath();

                /*ctx.beginPath();*/
                /*'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';*/  // Green path
                
            }
            ctx.lineWidth = "3";
            ctx.strokeStyle = "#666666";
    }
    if(overcounter == 30){
        document.write('<pre>');
        document.write("Overflow");
        return;
    }
    overcounter++;
}


  function draw(e) 
  {
    // stop the function if they are not mouse down
    if(!isDrawing) {[lastX, lastY] = [e.offsetX, e.offsetY]; return;}
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
        /*generateCir();*/
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
        ctx.moveTo(circles[i-1].x,circles[i-1].y);
        ctx.lineTo(circles[i].x,circles[i].y);
        ctx.stroke();  // Draw it
        ctx.closePath();

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


function check2(){
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

            cr = 15;
            cx = circles[i-1].x - circles[i].x;
            cy = circles[i-1].y - circles[i].y;
            
            m = cy / cx;
            cf = (cr*(Math.pow(Math.pow(cx, 2) + Math.pow(cy, 2),0.5)))/cx;
            ca = circles[i].x*m ;
            cc = circles[i-1].x*m;
            cb = (m + (1/m));
            Pi1_x = Math.floor(((circles[i].x/m) + ca - cf) / cb);
            Pi1_y = Math.floor(((-(1/m)*((circles[i].x/m) + ca - cf)) /cb) + (circles[i].x/m) + circles[i].y);

            Pi2_x = Math.floor(((circles[i].x/m) + ca + cf) / cb);
            Pi2_y = Math.floor(((-(1/m)*((circles[i].x/m) + ca + cf)) /cb) + (circles[i].x/m) + circles[i].y);

            Pi3_x = Math.floor(((circles[i-1].x/m) + cc - cf) / cb);
            Pi3_y = Math.floor(((-(1/m)*((circles[i-1].x/m) + cc - cf)) /cb) + (circles[i-1].x/m) + circles[i-1].y);

            Pi4_x = Math.floor(((circles[i-1].x/m) + cc + cf) / cb);
            Pi4_y = Math.floor(((-(1/m)*((circles[i-1].x/m) + cc + cf)) /cb) + (circles[i-1].x/m) + circles[i-1].y);

            nPi1_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi1_x- circles[i].x )+(Pi1_y - circles[i].y)) + circles[i].x);
            nPi1_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(Pi1_x- circles[i].x )+(Pi1_y - circles[i].y)) + circles[i].y);

            nPi2_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[i].x- Pi2_x)-(circles[i].y - Pi2_y)) + circles[i].x);
            nPi2_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[i].x- Pi2_x)+(circles[i].y - Pi2_y)) + circles[i].y);

            nPi3_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi3_x- circles[i-1].x )-(Pi3_y - circles[i-1].y)) + circles[i-1].x);
            nPi3_y = Math.floor((Math.pow(2,0.5)/(2*divs))*((Pi3_x- circles[i-1].x )+(Pi3_y - circles[i-1].y)) + circles[i-1].y);

            nPi4_x = Math.floor((Math.pow(2,0.5)/(2*divs))*((circles[i-1].x- Pi4_x)+(circles[i-1].y - Pi4_y)) + circles[i-1].x);
            nPi4_y = Math.floor((Math.pow(2,0.5)/(2*divs))*(-(circles[i-1].x- Pi4_x)+(circles[i-1].y - Pi4_y)) + circles[i-1].y);


            
            //check for overlap
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(nPi3_x,nPi3_y);
            ctx.lineTo(nPi1_x,nPi1_y);
            ctx.stroke();  // Draw it
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(nPi4_x,nPi4_y);
            ctx.lineTo(nPi2_x,nPi2_y);
            ctx.stroke();  // Draw it
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(nPi4_x,nPi4_y);
            ctx.lineTo(nPi1_x,nPi1_y);
            ctx.stroke();  // Draw it
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(nPi3_x,nPi3_y);
            ctx.lineTo(nPi2_x,nPi2_y);
            ctx.stroke();  // Draw it
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(nPi3_x,nPi3_y);
            ctx.lineTo(nPi4_x,nPi4_y);
            ctx.stroke();  // Draw it
            ctx.closePath();

            /*ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = 'rgb(' + Math.floor(Math.random()* 256) +', ' + Math.floor(Math.random()* 256) + ',' + Math.floor(Math.random()* 256) +')';  // Green path
            ctx.moveTo(circles[i-1].x,circles[i-1].y);
            ctx.lineTo(circles[i].x,circles[i].y);
            ctx.stroke();  // Draw it
            ctx.closePath();*/
            
        }
        ctx.beginPath();
        ctx.arc(rngCircle.x, rngCircle.y, circles[i].radius, Math.PI * 2, 0, false);
        ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
        ctx.fill();
        ctx.closePath();
    }}
