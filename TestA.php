<?php
include('header.php');
?>
<html>
   <!-- <head>
        <title>Test Set A</title>-->
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <link rel="stylesheet" href="_Front-End_Beta/test_wrap.css">
        <link rel="stylesheet" href="css/TestA.css">
        <!-- -->
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
</head>
    <body>
    <div class = "bgrd">
    
        <div class="limiter">
        
            <div class="container">
        
                <!-- Do rescale your class "wrap_(your identifier)" -->

                <div id="timerCountDown" class="timerDIV">Time left=<span id="timer"></span></div>
                <div style="text-align:center">
                  <button class="button" onclick="startTest()">Start</button>
                </div>

                <div style="text-align:center;">
                    <canvas id="canvas" width="990px" height="710px"></canvas>
                </div> 
                <!-- Must put this -->
                <p id="firstResult" style="text-align:center;"></p>
                <!-- Link to second test -->
                <div id="secondTestRules" class="overlay2">
                    <div class="popup">
                        <h2 style="text-align:center;">Congrats, You have Finish Your First Test</h2>
                        <div class="content">
                            <p style="margin-top:5%;"></p>
                            <h2 style="text-align:center;">Second Test Rules</h2>
                            <p style="margin-top:5%;"></p>
                            <p style="text-align:center;"><strong>GOALS:</strong><br>Connect 25 circles within the specific time frame to pass the test.<br></p>
                            <p style="margin-top:5%;"></p>
                            <p style="text-align:center;"><strong>How to connect?</strong> <br>Press on the dots and release on the next dot</p>
                            <p style="margin-top:5%;"></p>
                            <p style="text-align:center;"><strong>What is the sequence?</strong><br>The sequence of this test is numbers follow by alphabets.<br> Eg: Connect 1 to A<br> then A to 2<br>then 2 to B</p>
                            <p style="margin-top:5%;"></p>
                            <p style="text-align:center;color:red;"><strong>Note:</strong><br>The first test will start after you click on Start button.<br> Please take this test seriously as it will affect the analysis of your result</p>
                        </div>
                        <div class="box">
                            <a class="button" href="TestB.php">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    <!-- link .js here -->

    <!-- -->
    <script src= "/external/jquery/jquery-3.4.1.js"></script>
    <script type= "text/javascript" src="js/algo.js"></script>
    <!-- <script type= "text/javascript" src="js/testAAlgo.js"></script> -->
</html>
<?php
include('footer.php');
?>