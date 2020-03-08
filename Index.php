<?php
include('header.php');
?>

    <!-- resizing-->
    <link rel="stylesheet" href="css/frame.css">
    <!-- styling -->
    <link rel="stylesheet" href="css/style.css">
    <!-- background effect -->
    <!--<script src="./js/background.js"></script>-->
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
    </body>
    
</html>

<?php
include('footer.php');
?>
