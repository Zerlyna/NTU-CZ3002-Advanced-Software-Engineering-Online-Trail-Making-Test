<?php
	session_start();
	
	if(isset($_SESSION['NRIC'])) {
		session_destroy();
		unset($_SESSION['NRIC']);
		setcookie("login", "No", time() - 3600);
		header("Location: Index.php");
	} else {
		header("Location: Index.php");
	}
	
?>