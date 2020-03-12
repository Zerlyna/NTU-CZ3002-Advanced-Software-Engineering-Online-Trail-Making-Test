
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var C_CordX = [25];
var C_CordY = [25];
ctx.clearRect(0,0,800,800);
ctx.font = "18px Arial";
for(i=1; i<=5; i++) {
    var x = Math.floor(Math.random()*700+50);
    var y = Math.floor(Math.random()*700+50);
    var radius = Math.floor(20);

       if(i > 2) // check if got conflict line overlap
       {    
           
        

       }

    

        ctx.beginPath();
        ctx.arc(x,y,radius,Math.PI*2,0,false);
        ctx.strokeStyle = "green";  // Green path
        ctx.lineWidth = "5";
    
    
    
    
        ctx.fillStyle = "rgba(" + 255 + "," + 0 + "," + 0 + ",1)";
        ctx.fill();
    
        ctx.fillStyle = "rgba(" + 0 + "," + 0 + "," + 0 + ",1)";
        ctx.fillText(i, x-10, y+10);
        ctx.closePath();
           
        

        C_CordX[i-1] = x;
        C_CordY[i-1] = y;

        if(i > 1){
            //check for overlap
            ctx.beginPath();
            ctx.lineWidth = "5";
            if(i == 2)
            {
              ctx.strokeStyle = "green";  // Green path
            }
            if(i == 3)
            {
              ctx.strokeStyle = "yellow";  // Green path
            }
            if(i == 4)
            {
              ctx.strokeStyle = "blue";  // Green path
            }
            if(i == 5)
            {
              ctx.strokeStyle = "orange";  // Green path
            }
            
            ctx.moveTo(C_CordX[i-2],C_CordY[i-2]);
            ctx.lineTo(C_CordX[i-1],C_CordY[i-1]);
            ctx.stroke();  // Draw it
            
        }
        
    


    
}
//print
/*document.getElementById("x0").innerHTML = C_CordX[0] ;
document.getElementById("y0").innerHTML = C_CordY[0] ;
document.getElementById("x1").innerHTML = C_CordX[1] ;
document.getElementById("y1").innerHTML = C_CordY[1] ;
document.getElementById("x2").innerHTML = C_CordX[2] ;
document.getElementById("y2").innerHTML = C_CordY[2] ;
document.getElementById("x3").innerHTML = C_CordX[3] ;
document.getElementById("y3").innerHTML = C_CordY[3] ;
document.getElementById("x4").innerHTML = C_CordX[4] ;
document.getElementById("y4").innerHTML = C_CordY[4] ;*/


/*P1 :  C_CordX[0] C_CordY[0] , P2 : C_CordX[1] , C_CordY[1] , P3 C_CordX[2] C_CordY[2], P4 : C_CordX[3] C_CordY[3] , P5 : C_CordX[4] C_CordY[4]*/

var chk1 
var chk2

//Formula

var xA = C_CordX[0] ;
var yA = C_CordY[0] ;
var xB = C_CordX[1] ;
var yB = C_CordY[1] ;
var xC = C_CordX[2] ;
var yC = C_CordY[2] ;
var xD = C_CordX[3] ;
var yD = C_CordY[3] ;
/*document.getElementById("x4").innerHTML = C_CordX[4] ;
document.getElementById("y4").innerHTML = C_CordY[4] ;
https://math.stackexchange.com/questions/410568/verify-that-two-line-segments-do-not-cross-or-projected-intersection-is-not-on*/

 chk1 = ((xA-xC)*(yD-yC)-(yA-yC)*(xD-xC))*((xB-xC)*(yD-yC)-(yB-yC)*(xD-xC));
 chk2 = ((xC-xA)*(yB-yA)-(yC-yA)*(xB-xA))*((xD-xA)*(yB-yA)-(yD-yA)*(xB-xA));

if(chk1 < 0 && chk2 < 0){
  document.getElementById("1_3").innerHTML = "L1 and L3  Intersect - Green vs Blue";

}
else {
  document.getElementById("1_3").innerHTML = "L1 and L3 No Intersect - Green vs Blue";
}

xA = C_CordX[0] ;
yA = C_CordY[0] ;
xB = C_CordX[1] ;
yB = C_CordY[1] ;
xC = C_CordX[1] ;
yC = C_CordY[1] ;
xD = C_CordX[2] ;
yD = C_CordY[2] ;

chk1 = ((xA-xC)*(yD-yC)-(yA-yC)*(xD-xC))*((xB-xC)*(yD-yC)-(yB-yC)*(xD-xC));
chk2 = ((xC-xA)*(yB-yA)-(yC-yA)*(xB-xA))*((xD-xA)*(yB-yA)-(yD-yA)*(xB-xA));

if(chk1 < 0 && chk2 < 0){
 document.getElementById("1_2").innerHTML = "L1 and L2  Intersect - Green vs Yellow";

}
else {
 document.getElementById("1_2").innerHTML = "L1 and L2 No Intersect - Green vs Yellow";
}



xA = C_CordX[0] ;
yA = C_CordY[0] ;
xB = C_CordX[1] ;
yB = C_CordY[1] ;
xC = C_CordX[3] ;
yC = C_CordY[3] ;
xD = C_CordX[4] ;
yD = C_CordY[4] ;

chk1 = ((xA-xC)*(yD-yC)-(yA-yC)*(xD-xC))*((xB-xC)*(yD-yC)-(yB-yC)*(xD-xC));
chk2 = ((xC-xA)*(yB-yA)-(yC-yA)*(xB-xA))*((xD-xA)*(yB-yA)-(yD-yA)*(xB-xA));

if(chk1 < 0 && chk2 < 0){
 document.getElementById("1_4").innerHTML = "L1 and L4  Intersect - Green vs Orange";

}
else {
 document.getElementById("1_4").innerHTML = "L1 and L4 No Intersect - Green vs Orange";
}



/*for(i=0; i<4; i++) {
    if(intersects(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[i+1],C_CordY[i+1],C_CordX[i+2],C_CordY[i+2]) == 1)
    {
        document.getElementById("overlap").innerHTML = "exist" ;

    }
    document.getElementById("overlap").innerHTML = "not exist" ;

    if(intersect(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[i+1],C_CordY[i+1],C_CordX[i+2],C_CordY[i+2]) == 1)
    {
        document.getElementById("overlap2").innerHTML = "exist" ;
    }
    document.getElementById("overlap2").innerHTML = "not exist" ;
}*/
/*var a = [];

a = math.intersect([C_CordX[0], C_CordY[0]], [C_CordX[1], C_CordY[1]], [C_CordX[2], C_CordY[2]], [C_CordX[3],C_CordY[3]])   ;  
document.getElementById("1_2").innerHTML = a[0];
document.getElementById("1_3").innerHTML = a[1];

ctx.beginPath();
ctx.arc(a[0],a[1],radius,Math.PI*2,0,false);
ctx.strokeStyle = "green";  // Green path
ctx.lineWidth = "5";

ctx.fillStyle = "rgba(" + 255 + "," + 255 + "," + 0 + ",1)";
ctx.fill();
ctx.closePath();*/

/*document.getElementById("1_2").innerHTML = math.intersect(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[2],C_CordY[2],C_CordX[3],C_CordY[3]) ;*/
/*document.getElementById("1_3").innerHTML = math.intersect(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[2],C_CordY[2],C_CordX[3],C_CordY[3]) ;
document.getElementById("1_4").innerHTML = math.intersect(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[3],C_CordY[3],C_CordX[4],C_CordY[4]) ;
document.getElementById("1_5").innerHTML = math.intersect(C_CordX[0],C_CordY[0],C_CordX[1],C_CordY[1],C_CordX[4],C_CordY[4],C_CordX[5],C_CordY[5]) ;*/

/*function intersects(a,b,c,d,p,q,r,s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
  };

  function intersect(x1, y1, x2, y2, x3, y3, x4, y4){
	var a1, a2, b1, b2, c1, c2;
	var r1, r2 , r3, r4;
	var denom, offset, num;

	// Compute a1, b1, c1, where line joining points 1 and 2
	// is "a1 x + b1 y + c1 = 0".
	a1 = y2 - y1;
	b1 = x1 - x2;
	c1 = (x2 * y1) - (x1 * y2);

	// Compute r3 and r4.
	r3 = ((a1 * x3) + (b1 * y3) + c1);
	r4 = ((a1 * x4) + (b1 * y4) + c1);

	// Check signs of r3 and r4. If both point 3 and point 4 lie on
	// same side of line 1, the line segments do not intersect.
	if ((r3 !== 0) && (r4 !== 0) && sameSign(r3, r4)){
		return 0; //return that they do not intersect
	}

	// Compute a2, b2, c2
	a2 = y4 - y3;
	b2 = x3 - x4;
	c2 = (x4 * y3) - (x3 * y4);

	// Compute r1 and r2
	r1 = (a2 * x1) + (b2 * y1) + c2;
	r2 = (a2 * x2) + (b2 * y2) + c2;

	// Check signs of r1 and r2. If both point 1 and point 2 lie
	// on same side of second line segment, the line segments do
	// not intersect.
	if ((r1 !== 0) && (r2 !== 0) && (sameSign(r1, r2))){
		return 0; //return that they do not intersect
	}

	//Line segments intersect: compute intersection point.
	denom = (a1 * b2) - (a2 * b1);

	if (denom === 0) {
		return 1; //collinear
	}

	// lines_intersect
	return 1; //lines intersect, return true
}*/