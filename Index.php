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

    <!-- resizing-->
    <link rel="stylesheet" href="css/frame.css">
    <!-- styling -->
    <link rel="stylesheet" href="css/style.css">
    <!-- background effect -->
    <script src="./js/background.js"></script>
    <!-- messy code here -->
    <body>
    <style>
    .bgrd {
        --x: 0px;
        --y: 0px;
        background-image: url("./Assets/Img/Account_BG.jpg");
        /*background-size: 1000px;*/
        background-position: var(--x) var(--y);
        background-repeat: no-repeat;
        background-size: contain;
        width: 1000px;
        height: 1000px;
        border: 1px solid black;}
    </style>
        <!-- background -->
    <div class="bgrd" id="bgrd"></div>

    <!-- Title Logo -->
    <img src="Assets/Img/Title_Logo.png" alt="LarkDetect_Logo" class="LD_Logo">

    <!-- Title -->
    <label for="title"><b>Welcome to LarkDetect</b></label>

    <!--form-->
    <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="loginform">
        <div>
            <label for="NRIC">NRIC</label>
            <input type="text" name="NRIC" id="NRIC" placeholder="Enter NRIC" required autofocus class="form-control" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter Password" required class="form-control" />
        </div>
        <div>
            <input type="checkbox" name="doctorcheckbox"> For Docter Use
        </div>
        <div>
            <span class="fpw"> <a href="ForgetPW.php">Forget Password?</a></span>
        </div>
        <div>
            <input type="submit" name="login" value="Login"/>
        </div>
    </form>

    <!-- Registration -->
    <span class="reg"> <a href="Registration.php">Don't have an account? Sign Up</a></span>
    </body>
    
</html>
<?php
    include_once ('footer.php');
?>
