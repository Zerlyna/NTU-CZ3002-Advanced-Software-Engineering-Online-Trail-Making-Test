<?php?>
<html>

<body>
<!-- Popup model -->

<div id="timerCountDown" class="timerDIV">Time left=<span id="timer"></span></div>
<div style="text-align:center;">
<button id="btnStart2" onclick="startTest()" class="btnStart">Start</button>
</div>

<div style="text-align:center;">
<canvas id="test2Canvas" width="1000px" height="796px"></canvas>
<p id="TMTBResult"><p>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h2 style="text-align:center;">Welcome</h2>
		<a class="close" href="#popup2">&times;</a>
		<div class="content">
        <p>Your Result</p>
		<p id="testA"></p>
		<p id="testB"></p>
		</div>

		<div class="box">
		<a class="button" href="TestHome.php">Home</a>
		</div>
	</div>
</div>
<p id="msg" class="blue"></p>
<p id="msg2"><br>&nbsp;</p>
</div>
<link rel="stylesheet" href="ExecutiveTest.css">
<script type="text/javascript" src="ExecutiveAlgo.js"></script> 
</body>
</html>