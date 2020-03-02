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

    include_once 'dc.php';
    include_once 'header.php';
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
    <!-- resizing-->
    <link rel="stylesheet" href="css/style.css">

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

</html>
<?php
    include_once ('footer.php');
?>
