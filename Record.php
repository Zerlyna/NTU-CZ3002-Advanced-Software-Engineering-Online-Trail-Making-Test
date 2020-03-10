<?php
include('header.php');
?>
<html>
    <head>
        <title>Record</title>
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
                    <div><h3>Records</h3></div>
                    <span> 
                        <div> </div>
                            <label>Mr/Ms</label>
                            <p1>Elon Musk</p1>
                            <i> gender icon </i>
                        </div>
                        <div>
                            <form action="Doctor.php"> <!-- patient/doctor should access from Report.php or Doctor.php respectively-->
                                <div class = "login_btn">
                                    <div class="wrap_btn">
                                        <div class="form_bgbtn"></div>
                                            <button type="submit" name = "back" class="login_form_btn">Back</button>
                                    </div>
                                </div> 
                            </form>
                         </div>
                    </span>
                    <span>
                        <canvas> line graph ??? </canvas> 
                    </span>
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