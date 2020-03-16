<?php
include('header.php');
?>
<html>
   <!-- <head>
        <title>Test Set A</title>-->
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
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
                    <div class = "test_r1"><h3>Test A</h3></div>
                    <div class = "test_r2">-->
                        <canvas id="canvas" width="990px" height="710px"></canvas>
                    </div>
                    <div id = "layout_consent">
                        <div class = "con_r1"><p1>ConTItiel</p1></div>
                        <div class = "con_r2"><p1>ConInformation</p1></div>
                        <div class = "con_r3">buttonto layoutinstA</div>
                    </div>
                    <div id = "layout_insA"></div>
                        <div class = "insA_r1"><p1>InsTItiel</p1></div>
                        <div class = "insA_r2"><p1>InsInformation</p1></div>
                        <div class = "insA_r3">buttontotestB</div>
                    
                    <div class = "test_r3">
                        <form action="TestB.php"> <!-- Use as a placeholder to go next navigate next page -->
                            <button type="submit" name = "nextA" class="login_form_btn">Next</button>
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
    <script type= "text/javascript" src="js/algo.js"></script>
    <script type= "text/javascript" src="js/bgrd.js"></script>
</html>
<?php
include('footer.php');
?>