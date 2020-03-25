<?php
    session_start();

	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }
    
    include_once 'header.php';
?>

<html>
    <head>
        <title>About Us</title>
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="css/TestB.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <div class="wrap_Main">
                    <div class = "Main_c1">
                        <div class = "Main_t_r1"><a href = "#popup1"><p style="text-align:center;font-size:20px;"></p><img src="Assets/Img/Test_Logo.png" alt="Test_Logo" class="Test_Logo"></a></div>
                        <div class = "Main_t_r2"><h1 class = "Main_txtT">Start Test</h1></div>
                    </div>
                    <div class = "Main_c2">
                        <div class = "Main_r_r1"><a href = "Record.php"><img src="Assets/Img/Record_Logo.png" alt="Record_Logo" class="Rec_Logo"></a></div>
                        <div class = "Main_r_r2"><h1 class = "Main_txtR">View Records</h1></div>
                    </div>
                   <!-- <span class = "Main_test"><a href = "#popup1"><p style="text-align:center;font-size:20px;"></p><img src="Assets/Img/Test_Logo.png" alt="Test_Logo" class="Test_Logo"></a></span>
                    
                    <span class = "Main_rec"><a href = "Record.php"><img src="Assets/Img/Record_Logo.png" alt="Record_Logo" class="Rec_Logo"></a></span>-->
                </div>
                <div id="popup1" class="overlay">
                    <div class="popup">
                        <h1 style="text-align:center;">Welcome</h1>
                        <a class="close" href="#">&times;</a>
                        <div class="content" >
                            <br>
                            <p style="font-size:20px;">This test will take about 10 minutes and it consists of two parts<br>(TMT-A & TMT-B).<br>TMT-A is primarily a measure of processing speed, while TMT-B assesses higher cognitive abilities such as mental flexibility. </p>
                            <br>
                            <p style="text-align:center;font-size:20px;"><strong >General Rules</strong></p>
                            <p style="font-size:20px;">Complete the test as soon as possible within the specific time frame by connecting the circles in sequence.You only have <strong style="color:red;">3</strong> attempt for each test.</p>
                            <br>
                          
                            <p style="text-align:center;color:red;font-size:20px;"><strong>Note:</strong><br> Please take this test seriously as it will affect the analysis of your result.<br>Gentle reminder: The timer will not restart because of the 2nd/3rd attempt.</p>

                        </div>
                        <div class="box">
                            <!-- <a class="button" href="#popup2">Next</a> -->
                            <div class="wrap_btn" >
                                <div class="form_bgbtn"></div>
                                <button name="Agree" type="submit" class="login_form_btn"  onclick="window.location.href = '#popup2';">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="popup2" class="overlay" >
                    <div class="popup" >
                        <h2 style="text-align:center;">Declaration</h2>
                       
                        <div class="content">
                        <p style="margin-top:5%;"></p>
                            <p style="font-size:20px;">I hereby declared that:
                                <br>
                                <br>
                                -I understand that any inaccurate information(eg:idle for 2 mins during the test) will affect 
                                the analysis of test result.
                                <br>
                                <br>
                                -I have understand the general rules of this test and will abide it.
                                <br>
                                <br>
                                -Any attempt of cheating,will affect the accuracy of the result, and I will be responsbile for my own actions.
                            </p>
               
                        </div>
                        <div class="box">
                            <!-- using the report styling to style the button side by side -->
                            <div class = "report_c2_c5l">
                                    <!--<button type="submit" name = "records" class="login_form_btn" onclick="window.location.href = 'Record.php';">Records</button>--> 
                                    <div class="wrap_btn" style="width:100%;">
                                        <div class="form_bgbtn"></div>
                                            <button name="Agree" type="submit" class="login_form_btn" onclick="window.location.href = 'TestA.php';">Agree</button>
                                    </div>
                            </div>
                            <div class = "report_c2_c5r">
                                    <!--<button type="submit" name = "end" class="login_form_btn" onclick="window.location.href = 'Main.php';">End</button>-->
                                    <div class="wrap_btn" style="width:100%;">
                                        <div class="form_bgbtn"></div>
                                            <button name="end" type="submit" class="login_form_btn" onclick="window.location.href = 'Main.php';">Cancel</button>
                                    </div>
                            </div>
                            <!-- <a class="button" style="float:left;width:40%;margin-left:10%;"href="TestA.php">Agree</a><span><a class="button" style="float:left;width:40%;margin-left:2%;" href="Main.php">Cancel</a></span> -->
                        </div>
                    </div>
                </div>
       
            </div>
        </div>
    </div>
    </body>
    <script src= "/external/jquery/jquery-3.4.1.js"></script> 
    <script type= "text/javascript" src="js/bgrd.js"></script>
</html>

<?php
    include('footer.php');
?>