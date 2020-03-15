<?php
	session_start();
	
	if(isset($_SESSION['NRIC'])) {
		session_destroy();
		unset($_SESSION['NRIC']);
		header("Location: Index.php");
	} else {
		header("Location: Index.php");
	}
	
?>