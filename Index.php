<?php
    include_once 'connect.php';

    //check if form is submitted
    if(isset($_POST['login'])){
        $NRIC = mysqli_real_escape_string($conn,$_POST['NRIC']);
        $password = mysqli_real_escape_string($conn,$_POST['password']);
        $result=mysqli_query($conn,"SELECT * FROM patient WHERE NRIC = '" . $NRIC. "' and password = '" . $password . "'");
        if ($row = mysqli_fetch_array($result)){
            $_SESSION['NRIC'] = $row['NRIC'];
        } else {
            $errormsg="Incorrect NRIC or Password. Please try again.";
        }
    }

    include_once 'dc.php';
?>
<html>


    <!-- Title Logo -->
    <img src="xxx.png" alt="LarkDetect_Logo" class="LD_Logo">

    <!-- Title -->
    <label for="title"><b>Welcome to LarkDetect</b></label>

    <!-- NRIC I/P -->
    <input type="text" placeholder="Enter NRIC" name="nric" required>

    <!-- PW I/P -->
    <input type="password" placeholder="Enter Password" name="password" required>

    <!-- Doc/Non-Doc I/P -->
    <input type="checkbox" name="doctorUsed"> For Docter Use

    <!-- Forget Password -->
    <span class="fpw"> <a href="ForgetPW.php">Forget Password?</a></span>

    <!-- Login Button -->
    <!-- login button use name 'login' for php authentication-->
    <form action="Main.php">
        <button type="submit" class="login">Login</button>
    </form>

    <!-- Registration -->
    <span class="reg"> <a href="Registration.php">Don't have an account? Sign Up</a></span>


</html>
