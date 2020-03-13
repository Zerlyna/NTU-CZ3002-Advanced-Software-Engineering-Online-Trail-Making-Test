<?php
    session_start();
    include_once "connect.php";

    ##login session -- whr to 
	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }

    ##get user data
    $query = "SELECT * FROM test WHERE NRIC='".$nric."' ORDER BY id DESC LIMIT 1";
    $result = mysqli_query($conn, $query);
    if($row = mysqli_fetch_array($result)){
        $time_A = $row['time_A'];
        $time_B = $row['time_B'];
        $recorded_time = time();
        $day = $row['Year'];
        $month = $row['Month'];
        $year = $row['Day'];
    }

    ##get average data -- $test_A. $test_B
    $query = "SELECT * FROM global";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)){
        $var_name = $row['average'];
        ${$var_name} = $row['time'];
    }

    include_once "dc.php";
    include_once 'header.php';
?>
<html>
    <head>
        <title>Report</title>
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <!-- link .css here (a demo test_wrap.css) -->
        <link rel="stylesheet" href="_Front-End_Beta/test_wrap.css">
        <!-- -->
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <!-- Do rescale your class "wrap_(your identifier)" -->
                <div class="wrap_XXX"> <!-- Do customize them with seperated .css or .js to prevent code conflict --> 
                <!-- fill your content -->
                    <!-- Minimum HTML, please alter according to your content freely --> 
                    <div class = "r1"><h3>Result</h3></div>
                    <div class = "r2">
                        <div class = "c1">
                            <div class = "c1_1"></div>
                            <div class = "c1_2"></div>
                            <div class = "c1_3"></div>
                        </div>
                        <div class = "c2">
                            <div class = "c2_c1"></div>
                            <div class = "c2_c2"></div>
                            <div class = "c2_c3"></div>
                            <div class = "c2_c4"></div>
                            <div class = "c2_c5">
                                <div class = "c2_c5l">
                                    <button type="submit" name = "records" class="login_form_btn" onclick="window.location.href = 'Record.php';">Records</button> 
                                </div>
                                <div class = "c2_c5r">
                                    <button type="submit" name = "end" class="login_form_btn" onclick="window.location.href = 'Main.php';">End</button>
                                </div>
                            </div>
                        </div>
                        <div class = "c3">
                            <div class = "c3r1">
                                <div class = "c3r1_c1"></div>
                                <div class = "c3r1_c2"></div>
                            </div>
                            <div class = "c3r2">
                                <div class = "c3r2_c1"></div>
                                <div class = "c3r2_c1"></div>
                            </div>
                            <div class = "c3r3">
                                <div class = "c3r3_c1"></div>
                                <div class = "c3r3_c1"></div>
                            </div>
                        </div>
                    </div>

                <!-- end of content -->
                </div> 
            </div>
        </div>
    </div>
    </body>
    <!-- link .js here -->

    <!-- -->
    <script src= "/external/jquery/jquery-3.4.1.js"></script> 
    <script type= "text/javascript" src="js/bgrd.js"></script>
</html>
<?php
include('footer.php');
?>