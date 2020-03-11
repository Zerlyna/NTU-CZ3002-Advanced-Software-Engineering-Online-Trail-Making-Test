function confirm(){
    var confirmSelection = document.getElementById('overlay_ty');
    confirmSelection.classList.toggle('active');
    /*document.getElementById('overlay_ty').style.display = "block";*/
    setTimeout(function(){ window.location.href="Index.php"; }, 1000);
}