<?php
    session_start();
    include_once "connect.php";

	if(isset($_SESSION['NRIC'])) {
        $nric = $_SESSION['NRIC'];
    }elseif (isset($_SESSION['doctorid'])) {
        $nric = $_GET["nric_view"];
    }
    else{
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

    $query = "SELECT * FROM global";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)){
        $var_name = $row['average'];
        ${$var_name} = $row['time'];
    }
    
    if(isset($_POST['back'])){
        if(isset($_SESSION['doctorid'])) {
            header("Location: doctor.php");
        }elseif(isset($_SESSION['NRIC'])) {
            header("Location: Report.php");
        }
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
        
        <link rel="stylesheet" href="css/record.css">
        <!-- -->
        <meta name="viewport" content="width=device-width, initial-scale=1">  
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <!-- Do rescale your class "wrap_(your identifier)" -->
                <div class="recordWrapper"> <!-- Do customize them with seperated .css or .js to prevent code conflict --> 
                <!-- fill your content -->
                    <!-- Minimum HTML, please alter according to your content freely --> 
                    <div class = "heading"><h3>Records</h3></div>
                    <div class = "rec_r2">
                        <div class = "rec_c1"> 
                            <div class = "rec_c1r2">
                                <p1>Name: <?php echo $name;?></p1>
                            </div>
                            <div class = "rec_c1r3">
                                <h3>Gender: <?php echo $gender;?></h3>
                           
                                
                            </div>
                            <div class = "rec_c1r4">
                                <h3>Last Test Taken: <?php echo $data->year[count($data->year) - 1] ."-". $data->month[count($data->month) - 1] ."-".  $data->day[count($data->day) - 1];?></h3>

                                <!-- Start of the Circular progress bar -->
                                <div class="flex-wrapper">
                                <div class="single-chart">
                                    <p style="text-align:center; font-weight:bold;">TMT_A</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="tmtAResult" x="18" y="20.35" class="percentage"><?php echo $data->time_A_arr[count($data->time_A_arr) - 1] . " Sec";?></text>
                                    </svg>
                                </div>
                                
                                <div class="single-chart">
                                    <p style="text-align:center;font-weight:bold;">TMT_B</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart green">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="tmtBResult" x="18" y="20.35" class="percentage"><?php echo $data->time_B_arr[count($data->time_B_arr) - 1] . " Sec";?></text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                <p style="text-align:center;font-weight:bold;">Total</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="totalResult" x="18" y="20.35" class="percentage"><?php echo (intval($data->time_A_arr[count($data->time_A_arr) - 1]) + intval($data->time_B_arr[count($data->time_B_arr) - 1])). " Sec";?></text>
                                    </svg>
                                </div>
                            
                                </div>

                                <h3>Average Time For All User</h3>

                                <!-- Start of the Circular progress bar -->
                                <div class="flex-wrapper">
                                <div class="single-chart">
                                    <p style="text-align:center; font-weight:bold;">TMT_A</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="tmtAResult" x="18" y="20.35" class="percentage"><?php echo $test_A ." Sec";?></text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                    <p style="text-align:center;font-weight:bold;">TMT_B</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart green">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="tmtBResult" x="18" y="20.35" class="percentage"><?php echo $test_B ." Sec";?></text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                <p style="text-align:center;font-weight:bold;">Total</p>
                                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="100, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text id="totalResult" x="18" y="20.35" class="percentage"><?php echo (intval($test_A)+intval($test_B)) ." Sec";?></text>
                                    </svg>
                                </div>

                                </div>
                                <h3 id="RESULT" style="text-align:center;">Test Result: Pass</h3>
                                 <h3 id="risk" style="text-align:center;magin-top:1%;">Risk Of Dementia: MEDIUM</h3>
                                 <!-- End of the circular progress bar -->
                                <div class="container_btn">
                                    <div class="wrap_btn">
                                        <div class="form_bgbtn"></div>
                                        <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post"><!-- patient/doctor should access from Report.php or Doctor.php respectively-->
                                            <button type="submit" name = "back" class="form_btn">Back</button>
                                        </form>
                                        </div>
					                </div>
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