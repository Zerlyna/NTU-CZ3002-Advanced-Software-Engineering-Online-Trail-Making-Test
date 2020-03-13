<?php
    session_start();
    include_once 'connect.php';

	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }

    if(isset($_POST['finish_test'])){
        $time_A = $_COOKIE['time_A'];
        $time_B = $_COOKIE['time_B'];
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
                    <div class = "test_r1"><h3>Test B</h3></div>
                    <div class = "test_r2">
                        <canvas> Test B </canvas>
                    </div>
                    
                    <div class = "test_r3">
                        <!--submit the user result to database-->
                        <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="submittest">
                            <button type="submit" name = "finish_test" class="login_form_btn">Next</button>
                        </form>
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