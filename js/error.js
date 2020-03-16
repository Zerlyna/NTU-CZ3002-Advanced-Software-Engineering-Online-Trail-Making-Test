/*For Label when user enter wrong input 

//<i class="fas fa-exclamation-circle"></i>
//<i class="fas fa-times-circle"></i>

/*Register Page*/



/*Login Page*/
function toMainPage(){
    // if(document.getElementById("loginPW").value == "") /*no input*/   
    // {
    //     document.getElementById("loginPW").style.borderBottomColor = "#EED202";
    //     document.getElementById("loginPW").value = ""; //clear input 
    //     document.getElementById('loginPWL').innerHTML = "<i class='fas fa-exclamation-circle'></i>" + "    Please Key Your NRIC";
    //     document.getElementById('loginPWL').style.color = "#EED202";
    //     setTimeout(function(){ 
    //         document.getElementById('loginPWL').innerHTML = "Enter Password"; 
    //         document.getElementById('loginPWL').style.color = "#9b9b9b";
    //     }, 2000);
    // }
    /*invalid input*/
    if (getCookie("login") == "No")    
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

    // if(document.getElementById("loginID").value == "") /*no input*/   
    // {
    //     pass = false;
    //     document.getElementById("loginID").style.borderBottomColor = "#EED202";
    //     document.getElementById("loginID").value = ""; //clear input
    //     document.getElementById('loginIDL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key Your Password";
    //     document.getElementById('loginIDL').style.color = "#EED202";
    //     setTimeout(function(){ 
    //         document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
    //         document.getElementById('loginIDL').style.color = "#9b9b9b";
    //     }, 2000);

    // }
    /*invalid input*/
    if (getCookie("login") == "No")    
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
}

if(getCookie("login") == "Yes"){
    document.getElementById('head_right').style.visibility = 'visible';
    document.getElementById('Rate').style.visibility = 'visible';
}
/*Reset Password Page*/
