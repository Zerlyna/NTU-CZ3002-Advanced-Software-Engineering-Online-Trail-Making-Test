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
                    <div><h3>Result</h3></div>
                    <div>
                        <span>
                            <div></div>
                            <div></div>
                            <div></div>
                        </span>
                        <span>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>
                                <span>
                                <form action="Record.php">
                                    <div class = "login_btn">
                                        <div class="wrap_btn">
                                            <div class="form_bgbtn"></div>
                                                <button type="submit" name = "records" class="login_form_btn">Records</button>
                                        </div>
                                    </div> 
                                </form> 
                                </span>
                                <form action="Main.php">
                                    <div class = "login_btn">
                                        <div class="wrap_btn">
                                            <div class="form_bgbtn"></div>
                                                <button type="submit" name = "end" class="login_form_btn">End</button>
                                        </div>
                                    </div> 
                                </form>
                                <span>
                                </span>
                            </div>
                        </span>
                        <span>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </span>
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