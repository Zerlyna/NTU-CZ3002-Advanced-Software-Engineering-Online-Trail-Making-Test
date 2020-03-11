function confirm(){
    var confirmSelection = document.getElementById('overlay_ty');
    confirmSelection.classList.toggle('active');
    /*document.getElementById('overlay_ty').style.display = "block";*/
    setTimeout(function(){ window.location.href="Index.php"; }, 1000);
}

function verify(){
    var verifySelection = document.getElementById('overlay_verify');
    setTimeout(function(){verifySelection.classList.toggle('active'); }, 500)
    
    /*document.getElementById('overlay_ty').style.display = "block";*/
    /*setTimeout(function(){ window.location.href="Index.php"; }, 1000);*/
}

function success(){
    var verifySelection = document.getElementById('overlay_success');
    setTimeout(function(){verifySelection.classList.toggle('active'); }, 500)
    
    /*document.getElementById('overlay_ty').style.display = "block";*/
    /*setTimeout(function(){ window.location.href="Index.php"; }, 1000);*/
    setTimeout(function(){ window.location.href="Index.php"; }, 1000);
}