<?php?>
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
    <form action="Main.php">
        <button type="submit" class="login">Login</button>
    </form>

    <!-- Registration -->
    <span class="reg"> <a href="Registration.php">Don't have an account? Sign Up</a></span>


</html>
