<?php
    include_once 'connect.php';

    //check if form is submitted
    if(isset($_POST['login'])){
        //normal patient
        if(isset($_POST['doctorcheckbox'])){
            $doctorid = mysqli_real_escape_string($conn,$_POST['NRIC']);
            $password = mysqli_real_escape_string($conn,$_POST['password']);
            $result=mysqli_query($conn,"SELECT * FROM doctor WHERE id = '" . $doctorid. "' and password = '" . $password . "'");
            if ($row = mysqli_fetch_array($result)){
                $_SESSION['doctorid'] = $row['id'];
                header("Location: doctor.php");
            } else {
                $errormsg="Incorrect Doctor ID or Password. Please try again.";
            }
        }else{
            $NRIC = mysqli_real_escape_string($conn,$_POST['NRIC']);
            $password = mysqli_real_escape_string($conn,$_POST['password']);
            $result=mysqli_query($conn,"SELECT * FROM patient WHERE NRIC = '" . $NRIC. "' and password = '" . $password . "'");
            if ($row = mysqli_fetch_array($result)){
                $_SESSION['NRIC'] = $row['NRIC'];
                header("Location: Main.php");
            } else {
                $errormsg="Incorrect NRIC or Password. Please try again.";
            }
        }
    }
    include_once 'header.php';
    include_once 'dc.php';
?>
<!--
For now:
    Patient NRIC: S123456789
    password: a1a2a3a4a5

    Doctor NRIC: 1
    password: 1
-->
<html>
    <head>
        <title>Login</title>
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
                    <div class="wrap">
                        <!--<form class="login100-form validate-form">-->
                        <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="loginform">
                            <div class = "login_logo"><img src="Assets/Img/Title_Logo.png" alt="LarkDetect_Logo" class="LD_Logo"></div>
                            <div class = "login_title"><label for="title"><b>Welcome to LarkDetect</b></label></div>
                            
                            <div class="login_id">
                                <input  id="loginID" name = "NRIC" class="form__field" placeholder="Enter NRIC" required>
                                <label for="nric" class="form__label">Enter NRIC</label>
                            </div>

                            <!--<div class = "login_pw"><input type="password" placeholder="Enter Password" name="password" required></div>-->
                            <div class="login_pw">
                                <input type="password" id="loginID" name = "password" class="form__field" placeholder="Enter Password" required>
                                <label for="pw" class="form__label">Enter Password</label>
                            </div>

                            <div class = "login_doctor_fpw">
                                <span class="login_doctor">
                                    <input type="checkbox" id="doctor" name="doctorcheckbox"/>
                                    <label for="doctor" class = "checkDoctor">For Doctor Used</label>
                                </span>
                                <span class = "login_fpw"><a href="ForgetPW.php">Forget Password?</a></span>
                            </div>

                            <div class = "login_btn">
                                <div class="wrap_btn">
                                    <div class="form_bgbtn"></div>
                                        <button type="submit" name = "login" class="login_form_btn">Login</button>
                                </div>
                            </div>

                            <div class = "login_reg"><a href="Registration.php">Don't have an account? Sign Up</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src= "/external/jquery/jquery-3.4.1.js"></script> 
    <script type= "text/javascript" src="js/bgrd.js"></script>
</html>
<?php
    include_once ('footer.php');
?>
