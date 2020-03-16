<?php
    session_start();
    include_once "connect.php";

	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }

    $data = new stdClass();
    $data->year = array();
    $data->month = array();
    $data->day = array();
    $data->time_A_arr = array();
    $data->time_B_arr = array();

    $query = "SELECT * FROM patient WHERE NRIC='".$nric."'";
    $result = mysqli_query($conn, $query);
    if($row = mysqli_fetch_array($result)){
        $name = $row["Name"];
        $gender = $row["gender"];
    }

    ##get user data -- 
    $query = "SELECT * FROM test WHERE NRIC='".$nric."' ORDER BY id";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)){
        #pass into array
        array_push($data->year, $row['Year']);
        array_push($data->month, $row['Month']);
        array_push($data->day, $row['Day']);
        array_push($data->time_A_arr, $row['time_A']);
        array_push($data->time_B_arr, $row['time_B']); 
    }
    ##the data the chart need
    include_once "dc.php";
    include_once 'header.php';
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
                    <div class = "test_r1"><h3>Records</h3></div>
                    <div class = "rec_r2">
                        <div class = "rec_c1"> 
                            <div class = "rec_c1r1">
                                <label class = "rec_c1l">Mr</label>
                            </div>
                            <div class = "rec_c1r2">
                                <p1><?php echo $name;?></p1>
                            </div>
                            <div class = "rec_c1r3">
                                <i><?php echo $gender;?></i>
                            </div>
                            <div class = "rec_c1r4">
                            <form action="Doctor.php"> <!-- patient/doctor should access from Report.php or Doctor.php respectively-->
                                <button type="submit" name = "back" class="login_form_btn">Back</button>
                            </form>
                            </div>
                        </div>
                        
                        <div class = "rec_c2">
                            <canvas></canvas>
                            <div id="chartContainer" style="height: 370px; width: 100%;">
                                <?php
                                    include_once 'chart.php';
                                ?>
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
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <!-- <script src="./js/chart.js"></script> -->
    <script src="./js/cookie.js"></script>  
</html>
<?php
    include('footer.php');
?>