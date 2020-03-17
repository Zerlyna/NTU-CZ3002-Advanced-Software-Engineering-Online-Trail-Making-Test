<?php
    include_once "connect.php";
    include_once 'header.php';
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
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NRIC</th> 
                                <th>FULL NAME</th>
                                <th>Gender</th>
                                <th>Test A</th>
                                <th>Test B</th>
                                <th>Total Time Taken</th>
                            </tr>
                        </thead>
                        <?php
                            //below code is a while loop...it will repeat till the table had listed completely...
                            $query = "SELECT id, test.NRIC, Name, gender, time_A, time_B  FROM test INNER JOIN patient ON test.NRIC = patient.NRIC";
                            $result=mysqli_query($conn,$query);
                            while($row=mysqli_fetch_assoc($result)){
                        ?>
                        <tbody>
                            <tr>
                                <th><?php echo $row['id']; ?></th>
                                <th><?php echo $row['NRIC']; ?></th>
                                <th><?php echo $row['Name']; ?></th>
                                <th><?php echo $row['gender']; ?></th>
                                <th><?php echo $row['time_A']; ?></th>
                                <th><?php echo $row['time_B']; ?></th>
                                <th><?php echo ($row['time_A'] + $row['time_B']);?></th>
                            </tr>
                        </tbody>
                        
                        <?php
                            }
                            //free result is not a neccesary code...add syok je... 
                            mysqli_free_result($result); 
                        ?>
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
    include_once 'dc.php';
    include('footer.php');
?>