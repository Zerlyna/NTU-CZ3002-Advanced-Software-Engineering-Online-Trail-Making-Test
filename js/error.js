/*For Label when user enter wrong input 

//<i class="fas fa-exclamation-circle"></i>
//<i class="fas fa-times-circle"></i>

/*Register Page*/



/*Login Page*/
var pass = false;
var nric = false;
function toMainPage(){

    if(document.getElementById("loginPW").value == "") /*no input*/   
    {
        document.getElementById("loginPW").style.borderBottomColor = "#EED202";
        document.getElementById("loginPW").value = ""; //clear input 
        document.getElementById('loginPWL').innerHTML = "<i class='fas fa-exclamation-circle'></i>" + "    Please Key Your NRIC";
        document.getElementById('loginPWL').style.color = "#EED202";
        setTimeout(function(){ 
            document.getElementById('loginPWL').innerHTML = "Enter Password"; 
            document.getElementById('loginPWL').style.color = "#9b9b9b";
        }, 2000);
    }
    /*invalid input*/
    else if (document.getElementById("loginPW").value != "1" || document.getElementById("loginPW").value != "S123456789")    
    {
        document.getElementById("loginPW").style.borderBottomColor = "#cc0000";
        document.getElementById("loginPW").value = ""; //clear input 
        document.getElementById('loginPWL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid Input";
        document.getElementById('loginPWL').style.color = "#cc0000";
        setTimeout(function(){ 
            document.getElementById('loginPWL').innerHTML = "Enter Password"; 
            document.getElementById('loginPWL').style.color = "#9b9b9b";
        }, 2000);

    }
    else
    {
        nric = true;
    }
    if(document.getElementById("loginID").value == "") /*no input*/   
    {
        pass = false;
        document.getElementById("loginID").style.borderBottomColor = "#EED202";
        document.getElementById("loginID").value = ""; //clear input
        document.getElementById('loginIDL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key Your Password";
        document.getElementById('loginIDL').style.color = "#EED202";
        setTimeout(function(){ 
            document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
            document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);

    }
    /*invalid input*/
    else if (document.getElementById("loginID").value != "1" || document.getElementById("loginID").value != "a1a2a3a4a5")    
    {

        document.getElementById("loginID").style.borderBottomColor = "#cc0000";
        document.getElementById("loginID").value = ""; //clear input
        document.getElementById('loginIDL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid Input";
        document.getElementById('loginIDL').style.color = "#cc0000";
        setTimeout(function(){ 
            document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
            document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);

    }
    else
    {
        pass = true;
    }
    if(pass == true && nric == true)
    {
        document.getElementById('head_right').style.visibility = 'visible';
        document.getElementById('Rate').style.visibility = 'visible';
    }
}


/*Reset Password Page*/
