<?php
/*include('header.php');*/
?>


<style>
.bgrd {
  --x: 0px;
  --y: 0px;
  background-image: url('Assets/Img/Account_BG.jpg');
  background-size: 1000px;
  background-position: var(--x) var(--y);
  width: 300px;
  height: 300px;
  border: 1px solid white;
}


body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    #666,
    #222
  );
}
</style>

<html>
<div class="bgrd" id="bgrd">
  
</div>
</html>
<script src="js/background.js"></script>