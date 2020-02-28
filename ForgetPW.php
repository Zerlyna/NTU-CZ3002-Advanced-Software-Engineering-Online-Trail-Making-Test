<?php?>

<html>

<!-- Validation -->
    <h1> Verification </h1>

    <!-- NRIC I/P -->
    <input type="text" placeholder="Enter NRIC" name="nric" required>
    <!-- D.O.B I/P -->
    <p>D.O.B</p>

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

    <select id="YYYY" value = "YYYY">
        <option value="" disabled selected hidden>YYYY</option>
        <option value="1960">1960</option>
        <option value="1959">1959</option>
        <option value="1958">1958</option>
        <option value="1957">1957</option>
        <option value="1956">1956</option>
        <option value="1955">1955</option>
    </select>


    <!-- Validate Button -->
    <form action = "validation function">
        <button type="submit" class="login">Login</button>
    </form>
    <!-- If Not Success -->
    <!-- If Success -->


        <!-- Reset Password -->
            <h1> Reset Password </h1>
            <!-- PW I/P -->
                <input type="password" placeholder="Enter Password" name="password" required>
            <!-- PW I/P -->
                <input type="password" placeholder="Re-Enter Password" name="re_password" required>

            <!-- If Not Success -->
            <!-- If Success -->
                <h1> Password Reset Successfully </h1>
                <form action = "Index.php">
                    <button type="submit" class="Back_to_HomePage">Back to Home Page</button>
                </form>
</html>