<?php
    session_start();
    include_once "connect.php";

	if(isset($_SESSION['NRIC'])){
        $nric = $_SESSION['NRIC'];
    }else{
        header('Location: Index.php');
    }

    $data = new stdClass();
    $data->date_arr = array();
    $data->time_A_arr = array();
    $data->time_B_arr = array();

    ##get user data -- 
    $query = "SELECT * FROM test WHERE NRIC='".$nric."' ORDER BY id";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)){
        #pass into array
        $datetime = $row['Year'] ."-". $row['Month'] ."-". $row['Day'];
        array_push($data->date_arr, $datetime); 
        array_push($data->time_A_arr, $row['time_A']);
        array_push($data->time_B_arr, $row['time_B']); 
    }
    ##the data the chart need
    $data_json = json_encode($data);

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
                                <label class = "rec_c1l">Mr/Ms</label>
                            </div>
                            <div class = "rec_c1r2">
                                <p1>Elon Musk</p1>
                            </div>
                            <div class = "rec_c1r3">
                                <i> gender icon </i>
                            </div>
                            <div class = "rec_c1r4">
                            <form action="Doctor.php"> <!-- patient/doctor should access from Report.php or Doctor.php respectively-->
                                <button type="submit" name = "back" class="login_form_btn">Back</button>
                            </form>
                            </div>
                        </div>
                        
                        <div class = "rec_c2">
                            <canvas> line graph ??? </canvas> 
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