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
                                <div class = "rec_c1r2c1">
                                    <div class = "adds">
                                        <?php
                                            if ($gender == "male"){
                                                echo "<h1 >Mr</h1>";
                                                echo "<h2>" . $name . "</h2>";
                                                echo "<h2>" . $nric . "</h2>";
                                            }
                                            else{
                                                echo "<h1>Ms</h1>";
                                                echo "<h2>" . $name . "</h2>";
                                                echo "<h2>" . $nric . "</h2>";
                                            }
                                        ?>
                                    </div>
                                </div>
                                <div class = "rec_c1r2c2">
                                        
                                        <?php
                                        if ($gender == "male"){
                                            echo "<div class='fa-stack fa-3x male2'> 
                                                <font color='#5b92e5'><i class='far fa-2x fa-circle fa-stack-2x'></i>
                                                <i class='fas fa-1x fa-mars fa-stack-1x'></i></font>
                                            </div>";
                                        }else{
                                            echo "<div class='fa-stack fa-3x female2'>
                                                <font color='#ff5ba5'><i class='far fa-2x fa-circle fa-stack-2x'></i>
                                                <i class='fas fa-1x fa-venus fa-stack-1x'></i></font>
                                            </div>";
                                        }
                                        
                                        
                                        
                                        ?>
                                        


                                </div>
                            </div>
                           <!-- <div class = "rec_c1r3">
                                
                                
                            </div>-->
                            <div class = "rec_c1r4">
                                <h2>Last Test Taken: <font color="red"> 17 Mar 2020</font></h2> 

                                <!-- Start of the Circular progress bar -->
                                <div class="flex-wrapper">
                                <div class="single-chart">
                                    <h2 style="text-align:center; font-weight:bold;">Test A</h2> 
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
                                    <text id="tmtAResult" x="18" y="20.35" class="percentage">67 Sec</text>
                                    </svg>
                                </div>
                                
                                <div class="single-chart">
                                    <h2 style="text-align:center;font-weight:bold;">Test B</h2>
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
                                    <text id="tmtBResult" x="18" y="20.35" class="percentage">140 Sec</text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                <h2 style="text-align:center;font-weight:bold;">Total</h2>
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
                                    <text id="totalResult" x="18" y="20.35" class="percentage">207 Sec</text>
                                    </svg>
                                </div>
                            
                                </div>

                                <h2>Average Time For All User</h2>

                                <!-- Start of the Circular progress bar -->
                                <div class="flex-wrapper">
                                <div class="single-chart">
                                    <h2 style="text-align:center; font-weight:bold;">Test A</h2>
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
                                    <text id="tmtAResult" x="18" y="20.35" class="percentage">90 Sec</text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                    <h2 style="text-align:center;font-weight:bold;">Test B</h2>
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
                                    <text id="tmtBResult" x="18" y="20.35" class="percentage">180 Sec</text>
                                    </svg>
                                </div>

                                <div class="single-chart">
                                <h2 style="text-align:center;font-weight:bold;">Total</h2>
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
                                    <text id="totalResult" x="18" y="20.35" class="percentage">270 Sec</text>
                                    </svg>
                                </div>

                                </div>
                                <!--<h2 id="RESULT" style="text-align:center;">Test Result: <font color="green">Pass</font></h2>-->
                                 <h2 id="risk" style="text-align:center;magin-top:1%;">Risk Of Dementia: <font color="blue">MEDIUM</font></h2>
                                 <!-- End of the circular progress bar -->
                                <div class="container_btn">
                                    <div class="wrap_btn">
                                        <div class="form_bgbtn"></div>
                                        <form action="Doctor.php"> <!-- patient/doctor should access from Report.php or Doctor.php respectively-->
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