<?php
/*include('header.php');*/
/*https://codepen.io/Mojer/pen/VrqrbN*/
?>

<html>
    <head>
        <meta charset= "utf"-8>
        <title> check </title>
        <link rel="stylesheet" href = "test.css">
</head>
<body>
    <div class = "bg"> </div>
        <script
    src="https://code.jquery.com/jquery-3.4.1.js"></script> 
    <script type= "text/javascript">
    $('.bg').mousemove(function(e)
    { 
        var moveX = (e.pageX * -1/20);
        var moveY = (e.pageY * -1/20);
        $(this).css('background-position', moveX + 'px  ' + moveY + 'px  ')
    }) 
    </script>
</body>
</html>
