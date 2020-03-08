<?php?>

<html>
    <link rel="stylesheet" href="HeadFoot.css">
    <header id = "myHeader">
        <div class = "header_container" >
            <div class = "header_wrapper">
                <!-- Home_Logo -->
                <a href="Index.php">
                    <i class="fas fa-3x fa-home"></i>
                    test
                </a>

                <!-- Setting_Logo -->
                <a href="_Front-End_Beta/Setting.php">
                <i class="fas fa-3x fa-cog"></i>
                    test2
                </a>
            </div>
        </div>
    </header>

    <script>
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    </script>

</html>