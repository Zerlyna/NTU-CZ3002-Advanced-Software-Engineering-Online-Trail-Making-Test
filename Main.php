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
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <div class="wrap_Main">
                    <span class = "Main_test"><a href = "TestA.php"><img src="Assets/Img/Test_Logo.png" alt="Test_Logo" class="Test_Logo">  </a></span>
                    <span class = "Main_rec"><a href = "Record.php"><img src="Assets/Img/Record_Logo.png" alt="Record_Logo" class="Rec_Logo"></a></span>
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