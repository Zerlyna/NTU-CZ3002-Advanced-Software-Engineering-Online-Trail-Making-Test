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

<div id="TestResult" class="overlay">
	<div class="popup">
		<h2 style="text-align:center;">Your test result</h2>
		<a class="close" href="#popup2">&times;</a>
		<div class="content">
		<div class="flex-wrapper">
			<div class="single-chart">
				<p style="text-align:center;">TMT_A</p>
				<svg viewBox="0 0 36 36" class="circular-chart orange">
				<path class="circle-bg"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path class="circle"
					stroke-dasharray="100, 100"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<text id="tmtAResult" x="18" y="20.35" class="percentage"></text>
				</svg>
			</div>
			
			<div class="single-chart">
				<p style="text-align:center;">TMT_B</p>
				<svg viewBox="0 0 36 36" class="circular-chart green">
				<path class="circle-bg"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path class="circle"
					stroke-dasharray="100, 100"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<text id="tmtBResult" x="18" y="20.35" class="percentage"></text>
				</svg>
			</div>

			<div class="single-chart">
			<p style="text-align:center;">Total</p>
				<svg viewBox="0 0 36 36" class="circular-chart blue">
				<path class="circle-bg"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path class="circle"
					stroke-dasharray="100, 100"
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<text id="totalResult" x="18" y="20.35" class="percentage"></text>
				</svg>
			</div>
		
		</div>
		<p id="risk" style="text-align:center;"></p>
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