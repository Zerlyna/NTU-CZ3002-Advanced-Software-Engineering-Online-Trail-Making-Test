<?php
    session_start();
    include_once 'connect.php';

	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }

    if(isset($_POST['finish'])){
        $time_A = $_COOKIE['test_A'];
        $time_B = $_COOKIE['test_B'];
        $recorded_time = time();
        $day = date("j", $recorded_time);
        $month = date("n", $recorded_time);
        $year = date("Y", $recorded_time);
        $result = mysqli_query($conn,"INSERT INTO test(NRIC,Year,Month,Day,time_A,time_B) 
        VALUES('" . $nric . "', '" . $year . "', '" . $month . "', '" . $day . "', '" . $time_A . "', '" . $time_B . "')");
        if ($result == TRUE){
            header("Location: Report.php");
        } else {
            header("Location: wrong_test_submission.php");
        }
    }

    include_once 'dc.php';
    include_once 'header.php';
?>

<html>
    <head>
        <title>Test Set B</title>
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <!-- link .css here (a demo test_wrap.css) -->
        <link rel="stylesheet" href="_Front-End_Beta/test_wrap.css">
        <link rel="stylesheet" href="css/TestB.css">
        
        <!-- -->
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <div class="wrapContainer">
                <div class = "row1"><h3>Test B</h3></div>
                <div class="row2">
                        <div id="timerCountDown" class="timerDIV">Time left=<span id="timer"></span></div>
                    
                        <canvas id="canvas" width="990px" height="710px"></canvas>
                        <div class="row2">
                            <a class="button" style="width:10%;text-align:center; margin-left:45%;margin-top:1%;" onclick="startTest()">Start</a>
                        </div>
                    </div>

                    <div id="TestResult" class="overlay">
                    <div class="popup">
                        <h2 style="text-align:center;">Your test result</h2>
                        
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
                        <p id="RESULT" style="text-align:center;"></p>
                        <p id="risk" style="text-align:center;magin-top:1%;"></p>
                        <div class="box">
                            <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                                <button class="button" type="submit" name = "finish">FINISH</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                <!-- Do rescale your class "wrap_(your identifier)"
                <div id="timerCountDown" class="timerDIV">Time left=<span id="timer"></span></div>
                <div style="text-align:center;">
                    <button id="btnStart2" onclick="startTest()" class="btnStart">Start</button>
                </div>

                <div style="text-align:center;">
                    <canvas id="canvas" width="990px" height="710px"></canvas>
                </div> -->
                
     
                <p id="msg" class="blue"></p>
                <p id="msg2"><br>&nbsp;</p>
                </div>
        </div>
    </div>
    </body>
    <!-- link .js here -->

    <!-- -->
    <script src= "/external/jquery/jquery-3.4.1.js"></script> 
    <script type= "text/javascript" src="js/bgrd.js"></script>
    <script type= "text/javascript" src="js/cookie.js"></script>
    <script type="text/javascript" src="js/testBAlgo.js"></script>

</html>

<?php
    include('footer.php');
?>