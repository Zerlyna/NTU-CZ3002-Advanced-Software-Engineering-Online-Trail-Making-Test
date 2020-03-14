<?php?>
<!DOCTYPE html>
<html>
<body>
<div class="box">
	<a class="button" href="#popup1">Start Test</a>
</div>
<div id="popup1" class="overlay">
	<div class="popup">
		<h2 style="text-align:center;">Welcome</h2>
		<a class="close" href="#popup2">&times;</a>
		<div class="content">
        <p>This test will take about 10 minutes and it consists of two parts<br>(TMT-A & TMT-B).<br>TMT-A is primarily a measure of processing speed, while TMT-B assesses higher cognitive abilities such as mental flexibility. </p>
        <p style="text-align:center;"><strong >General Rules</strong></p>
        <p>Complete the test as soon as possible within the specific time frame by connecting the circles in sequence.</p>
        <p>For each test,you will total of <strong style="color:red;">3</strong> attempt <strong style="color:red;">IF AND ONLY IF </strong>you connected to the wrong circle.</p>
        <p>Otherwise, you only have <strong style="color:red;">1</strong> attempt for each test.</p>
        <p style="text-align:center;color:red;"><strong>Note:</strong><br> Please take this test seriously as it will affect the analysis of your result.<br>Gentle reminder: The timer will not restart because of the 2nd/3rd attempt.</p>

		</div>
	<div class="box">
		<a class="button" href="#popup2">Next</a>
	</div>
	</div>
</div>
<div id="popup2" class="overlay2">
	<div class="popup">
		<h2 style="text-align:center;">First Test</h2>
		<div class="content">
		<p style="text-align:center;"><strong>GOALS:</strong><br>Connect 25 circles within the specific time frame to pass the test.<br></p>
		<p style="text-align:center;"><strong>How to connect?</strong> <br>Press on the dots and release on the next dot</p>
		<p style="text-align:center;"><strong>What is the sequence?</strong><br>The sequence of this test is in numerical order.<br> Eg: Connect 1 to 2<br> then 2 to 3<br>then 3 to 4</p>
		<p style="text-align:center;color:red;"><strong>Note:</strong><br>The first test will start after you click on Start button.<br> Please take this test seriously as it will affect the analysis of your result</p>
		</div>
		<div class="box">
		<a class="button" href="firstTest.php">Start</a>
		</div>
	</div>
	
</div>
<link rel="stylesheet" href="ExecutiveTest.css">
</body>
</html>
