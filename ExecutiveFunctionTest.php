<?php?>
<html>

<body>

<!-- Popup model -->
<!-- <div class="box">
	<a class="button" href="#popup1">Let me Pop up</a>
</div> -->
<div id="timerCountDown" class="timerDIV">Time left=<span id="timer"></span></div>
<button id="btnStart2" onclick="startTest()" class="btnStart">Start</button>
<div id="popup1" class="overlay">
	<div class="popup">
		<h2 style="text-align:center;">RULES</h2>
		<a class="close" href="ExecutiveFunctionTest.php">&times;</a>
		<div class="content">
        <p style="text-align:center;"><strong>GOALS:</strong><br>Connect 25 nummber dots withing the specific time frame to pass the test</p>
     
        <p style="text-align:center;"><strong>How to connect?</strong> <br>Press on the dots and release on the next dot</p>
        <p style="text-align:center;color:red;"><strong>Note:</strong><br> Please connect the dots in sequence! You only have 3 try!</p>
		</div>
	</div>
</div>
<canvas id="test2Canvas" width="1000px" height="796px" style="margin-left:15%;"></canvas>
<p id="msg" class="blue"></p>
  <p id="msg2"><br>&nbsp;</p>
</div>
<link rel="stylesheet" href="ExecutiveTest.css">
<script type="text/javascript" src="ExecutiveAlgo.js"></script> 
</body>
</html>