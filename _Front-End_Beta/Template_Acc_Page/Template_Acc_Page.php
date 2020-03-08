<?php
/*include('header.php');*/
?>
<html>
    <!-- styling-->
    <!--<link rel="stylesheet" href="css/style.css">-->
    <!-- background -->
    <!--<div class="bgrd" id="bgrd"></div>-->
    <head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body, html {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}


* {
  box-sizing: border-box;
}

.bgrd {
  /* The image used */
  background-image: url("/Assets/Img/Account_BG.jpg");

  width: 100%;
  height: 100%;

  /* Center and scale the image nicely */
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  position: relative;
  --x: 0px;
  --y: 0px;
  /*background-size: 1000px;*/
  background-position: var(--x) var(--y);
  /*width: 300px;
  height: 300px;
  border: 1px solid white;*/
}

/* Add styles to the form container */
.container {
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit button */
.btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}
</style>
</head>
<body>

<h2>Form on Hero Image</h2>
<div class="bgrd" id = "bgrd">
  <form action="/action_page.php" class="container">
    <h1>Login</h1>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit" class="btn">Login</button>
  </form>
</div>

<p>This example creates a form on a responsive image. Try to resize the browser window to see how it always will cover the whole width of the screen, and that it scales nicely on all screen sizes.</p>

</body>

    


</html>
<script src="/BG/BG.js"></script>
<?php echo time(); ?>
<?php
/*include('footer.php');*/
?>