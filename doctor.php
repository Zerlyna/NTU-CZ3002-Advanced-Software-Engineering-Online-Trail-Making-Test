<?php
include('header.php');
?>
<html>
    <head>
        <title>Doctor</title>
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
                    <div class = "doc_r1"><h3>Patient Records</h3></div>
                    <div class = "doc_r2">
                        <select id="searchbar" value = "EMPTY">
                            <option value="" disabled selected hidden>(Search Bar)</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                        <select id="searchby" value = "EMPTY">
                            <option value="" disabled selected hidden>(Search By)</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                        <i> sorting icon </i>
                    </div>
                    <div class = "doc_r3">
                        <table class = "doc_table" style="width:100%">
                        <tr>
                            <th>ID</th>
                            <th>NRIC</th> 
                            <th>FULL NAME</th>
                            <th>Gender</th>
                            <th>Total Time Taken</th>
                            <th>Test A</th>
                            <th>Test B</th>
                            <th><a href = "Record.php">Records</a></th>
                        </tr>
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