<?php
include('header.php');
?>
<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" href="css/frame.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/headfoot.css">
        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="/external/fontawesome-free-5.12.1-web/css/all.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    </head>
    <body>
    <div class = "bgrd">
        <div class="limiter">
            <div class="container">
                <div class="wrap_Reg">
                    <div class = "reg_r1"><h1> Registration </h1></div>
                    <div class = "reg_r2">
                        <div class="fa-stack fa-3x male" id = "male" onclick="male()">
                            <i class="far fa-2x fa-circle fa-stack-2x"></i>
                            <i class="fas fa-1x fa-mars fa-stack-1x"></i>
                        </div>

                        <div class="fa-stack fa-3x female" id = "female" onclick="female()">
                            <i class="far fa-2x fa-circle fa-stack-2x"></i>
                            <i class="fas fa-1x fa-venus fa-stack-1x"></i>
                        </div>
                    </div>

                    <div class = "reg_r3">
                        <!--<input type="text" placeholder="Enter Full Name (as in NRIC)" name="Uname" required>-->
                        <div class="login_pw">
                                <input type="text" id="Reg_FullName" name = "Reg_FullName" class="form__field" placeholder="Enter Full Name (as in NRIC)" required>
                                <label class="form__label">Enter Full Name (as in NRIC)</label>
                        </div>
                    </div>

                    <div class = "reg_r4">
                        <!--<input type="text" placeholder="Enter NRIC" name="nric" required>-->
                        <div class="login_pw">
                                <input type="text" id="Reg_NRIC" name = "Reg_NRIC" class="form__field" placeholder="Enter NRIC" required>
                                <label class="form__label">Enter NRIC</label>
                        </div>
                    </div>

                    <div class = "reg_r5">
                        <!--<input type="text" placeholder="E-mail" name="email" required>-->
                        <div class="login_pw">
                                <input type="text" id="Reg_E-mail" name = "Reg_Email" class="form__field" placeholder="E-mail" required>
                                <label class="form__label">E-mail</label>
                        </div>
                    </div>

                    <div class = "reg_r6">
                        <!--<input type="password" placeholder="Password" name="password" required>-->
                        <div class="login_pw">
                                <input type="password" id="Reg_PW" name = "Reg_PW" class="form__field" placeholder="Enter Password" required>
                                <label class="form__label">Enter Password</label>
                        </div>
                    </div>

                    <div class = "reg_r7">
                        <!--<input type="password" placeholder="Re-type Password" name="re_password" required>-->
                        <div class="login_pw">
                                <input type="password" id="Reg_RPW" name = "Reg_RPW" class="form__field" placeholder="Re-Enter Password" required>
                                <label class="form__label">Re-Enter Password</label>
                        </div>
                    </div>

                    <div class = "reg_r8">
                        <p>D.O.B</p>
                    </div>
                    <div class = "reg_r9">
                        <div class = "reg_c1">
                            <select id="DD" value = "DD">
                                <option value="" disabled selected hidden>DD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>

                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>

                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>

                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>

                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>

                                <option value="31">31</option>
                            </select>
                        </div>


                        <div class = "reg_c2">
                            <select id="MM" value = "MM">
                                <option value="" disabled selected hidden>MM</option>
                                <option value="JAN">JAN</option>
                                <option value="FEB">FEB</option>
                                <option value="MAR">MAR</option>
                                <option value="APR">APR</option>
                                <option value="MAY">MAY</option>
                                <option value="JUN">JUN</option>
                                <option value="JUL">JUL</option>
                                <option value="AUG">AUG</option>
                                <option value="SEP">SEP</option>
                                <option value="OCT">OCT</option>
                                <option value="NOV">NOV</option>
                                <option value="DEC">DEC</option>
                            </select>
                        </div>

                        <div class = "reg_c3">
                            <select id="YYYY" value = "YYYY">
                                <option value="" disabled selected hidden>YYYY</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                            </select>
                        </div>
                    </div>
                    <div class = "reg_r10">
                        <form action="Index.php">
                            <button type="submit" class="register">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    <script src = "js/gender.js">   </script>
    <script src= "/external/jquery/jquery-3.4.1.js"></script> 
    <script type= "text/javascript" src="js/bgrd.js"></script>

<?php
include('footer.php');
?>