<?php?>
<html>


<body>

    </style>

<div id="ten-countdown"></div>

<button class="btnStart" onclick="startTest()">Start</button>
  <p id="msg" class="blue"></p>
  <p id="msg2"><br>&nbsp;</p>
<canvas id="canvas" width="1920" height="796" ></canvas>

<div class="bts-popup" role="alert">
    <div class="bts-popup-container">
 
          	<p>RULES</p>
        <p>GOALS:Connect 25 number dots withing the specific time frame to pass the test</p>
     
        <p>How to connect? Press on the dot and release on the next dot</p>
        <p style="color:red;text-align:center;">Note: Please connect the dots in sequence! You only have 3 tries!</p>
				<div class="bts-popup-button">
		       <a href="#0">Enter</a>
         </div>
        <a href="#0" class="bts-popup-close img-replace"></a>
    </div>
</div>

<!-- must put below -->
<link rel="stylesheet" href="Test.css" type="text/css">
<script type="text/javascript" src="algotest1.js"></script>

</body>
</html>
