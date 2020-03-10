<?php
include('header.php');
?>
<html>
    <head>
        <title>Report</title>
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
                    <div class = "r1"><h3>Result</h3></div>
                    <div class = "r2">
                        <div class = "c1">
                            <div class = "c1_1"></div>
                            <div class = "c1_2"></div>
                            <div class = "c1_3"></div>
                        </div>
                        <div class = "c2">
                            <div class = "c2_c1"></div>
                            <div class = "c2_c2"></div>
                            <div class = "c2_c3"></div>
                            <div class = "c2_c4"></div>
                            <div class = "c2_c5">
                                <div class = "c2_c5l">
                                <form action="Record.php">
                                        <button type="submit" name = "records" class="login_form_btn">Records</button> 
                                </form> 
                                </div>
                                <div class = "c2_c5r">
                                    <form action="Main.php">
                                        <button type="submit" name = "end" class="login_form_btn">End</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class = "c3">
                            <div class = "c3r1">
                                <div class = "c3r1_c1"></div>
                                <div class = "c3r1_c2"></div>
                            </div>
                            <div class = "c3r2">
                                <div class = "c3r2_c1"></div>
                                <div class = "c3r2_c1"></div>
                            </div>
                            <div class = "c3r3">
                                <div class = "c3r3_c1"></div>
                                <div class = "c3r3_c1"></div>
                            </div>
                        </div>
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
    <script type= "text/javascript" src="js/bgrd.js"></script>
</html>
<?php
include('footer.php');
?>