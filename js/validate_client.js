/*For Label when user enter wrong input 

//<i class="fas fa-exclamation-circle"></i>
//<i class="fas fa-times-circle"></i>

/*Register Page*/

/*var togglePW = false;
var toggleID = false;*/

/*alert("test");*/

/*Login Page*/
var toggle = false;
/*var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;*/



function toLogin(){/*no input*/
    toggle = true;
    if(document.forms["loginform"]["loginPW"].value == "")
    {
        document.getElementById("loginPW").style.borderBottomColor = "#EED202";
         document.getElementById("loginPW").value = ""; //clear input 
         document.getElementById('loginPWL').innerHTML = "<i class='fas fa-exclamation-circle'></i>" + "    Please Key In Your Password";
         document.getElementById('loginPWL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('loginPWL').innerHTML = "Enter Password"; 
             document.getElementById('loginPWL').style.color = "#9b9b9b";
         }, 2000);
         toggle = false;

    }
    if(document.forms["loginform"]["loginID"].value == "")
    {
        document.getElementById("loginID").style.borderBottomColor = "#EED202";
         document.getElementById("loginID").value = ""; //clear input
         document.getElementById('loginIDL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key In Your NRIC";
         document.getElementById('loginIDL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
             document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);
        toggle = false;
    }

    if(toggle == true)
    {
        if(!validatePW(document.forms["loginform"]["loginPW"].value) || !validateNRIC(document.forms["loginform"]["loginID"].value))
        {
        document.getElementById("loginPW").style.borderBottomColor = "#cc0000";
         document.getElementById("loginPW").value = ""; //clear input 
         document.getElementById('loginPWL').innerHTML = "<i class='fas fa-exclamation-circle'></i>" + "    Invalid NRIC/Password";
         document.getElementById('loginPWL').style.color = "#cc0000";
         setTimeout(function(){ 
             document.getElementById('loginPWL').innerHTML = "Enter Password"; 
             document.getElementById('loginPWL').style.color = "#9b9b9b";
         }, 2000);
         toggle = false;
         document.getElementById("loginID").style.borderBottomColor = "#cc0000";
         document.getElementById("loginID").value = ""; //clear input
         document.getElementById('loginIDL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Invalid NRIC/Password";
         document.getElementById('loginIDL').style.color = "#cc0000";
         setTimeout(function(){ 
             document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
             document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);

        }

    }
    

    /*alert (!validatePW(document.forms["loginform"]["loginPW"].value));*/


    /*if()
    {   
        toggle = false;
    }*/

    /*if(document.forms["loginform"]["loginPW"].value.match(decimal) == false)
    {
        alert("oh no");
        toggle = false;

    }
    alert(document.forms["loginform"]["loginPW"].value.match(decimal))*/

    /* if(document.getElementById("loginPW").value == "")   
     {
         document.getElementById("loginPW").style.borderBottomColor = "#EED202";
         document.getElementById("loginPW").value = ""; //clear input 
         document.getElementById('loginPWL').innerHTML = "<i class='fas fa-exclamation-circle'></i>" + "    Please Key Your Password";
         document.getElementById('loginPWL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('loginPWL').innerHTML = "Enter Password"; 
             document.getElementById('loginPWL').style.color = "#9b9b9b";
         }, 2000);
         return false;
     }*/
     /*if(document.getElementById("loginID").value == "")    
     {
         document.getElementById("loginID").style.borderBottomColor = "#EED202";
         document.getElementById("loginID").value = ""; //clear input
         document.getElementById('loginIDL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key Your NRIC";
         document.getElementById('loginIDL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
             document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);

     }*/

     
     
    /*invalid input*/
    /*if (getCookie("login") == "No" && document.forms["loginform"]["loginID"].value != "" && document.forms["loginform"]["loginPW"].value != "")    
    {
        document.getElementById("loginPW").style.borderBottomColor = "#cc0000";
        document.getElementById("loginPW").value = ""; //clear input 
        document.getElementById('loginPWL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid NRIC/Password";
        document.getElementById('loginPWL').style.color = "#cc0000";
        setTimeout(function(){ 
            document.getElementById('loginPWL').innerHTML = "Enter Password"; 
            document.getElementById('loginPWL').style.color = "#9b9b9b";
        }, 2000);
        document.getElementById("loginID").style.borderBottomColor = "#cc0000";
        document.getElementById("loginID").value = ""; //clear input
        document.getElementById('loginIDL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid NRIC/Password";
        document.getElementById('loginIDL').style.color = "#cc0000";
        setTimeout(function(){ 
            document.getElementById('loginIDL').innerHTML = "Enter NRIC"; 
            document.getElementById('loginIDL').style.color = "#9b9b9b";
        }, 2000);
        alert(getCookie("login"));
        
    }*/
   /* if(getCookie("login") == "Yes"){
        document.getElementById('head_right').style.visibility = 'visible';
        document.getElementById('Rate').style.visibility = 'visible';
    }*/
    if(toggle == false)
    {
        return false;
    }
        
    return true;
    

}


function validateNRIC(str) {
    if (str.length != 9) 
        return false;

    str = str.toUpperCase();

    var i, 
        icArray = [];
    for(i = 0; i < 9; i++) {
        icArray[i] = str.charAt(i);
    }

    icArray[1] = parseInt(icArray[1], 10) * 2;
    icArray[2] = parseInt(icArray[2], 10) * 7;
    icArray[3] = parseInt(icArray[3], 10) * 6;
    icArray[4] = parseInt(icArray[4], 10) * 5;
    icArray[5] = parseInt(icArray[5], 10) * 4;
    icArray[6] = parseInt(icArray[6], 10) * 3;
    icArray[7] = parseInt(icArray[7], 10) * 2;

    var weight = 0;
    for(i = 1; i < 8; i++) {
        weight += icArray[i];
    }

    var offset = (icArray[0] == "T" || icArray[0] == "G") ? 4:0;
    var temp = (offset + weight) % 11;

    var st = ["J","Z","I","H","G","F","E","D","C","B","A"];
    var fg = ["X","W","U","T","R","Q","P","N","M","L","K"];

    var theAlpha;
    if (icArray[0] == "S" || icArray[0] == "T") { theAlpha = st[temp]; }
    else if (icArray[0] == "F" || icArray[0] == "G") { theAlpha = fg[temp]; }

    return (icArray[8] === theAlpha);
}



function validatePW(str)
{
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if(str.length < 8 ) {
    return false;
}

if(!str.match(lowerCaseLetters)) {
    return false;
}

// Validate capital letters

if(!str.match(upperCaseLetters)) {
    return false;
}

// Validate numbers

if(!str.match(numbers)) {
    return false;
}

// Validate length
return true;

}
/*Reset Password Page*/

function toVerify(){
    toggle = true;
    if(document.forms["verifyform"]["Reg_NRIC_V"].value == "" && (document.forms["verifyform"]["yearSelect"].value != "" || document.forms["verifyform"]["monthSelect"].value != ""))
    {
        document.getElementById("Reg_NRIC_V").style.borderBottomColor = "#EED202";
         document.getElementById("Reg_NRIC_V").value = ""; //clear input
         document.getElementById('vNRICL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key In Your NRIC";
         document.getElementById('vNRICL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('vNRICL').innerHTML = "Enter NRIC"; 
             document.getElementById('vNRICL').style.color = "#9b9b9b";
        }, 2000);
        toggle = false;
    }
    else if((document.forms["verifyform"]["yearSelect"].value == "" || document.forms["verifyform"]["monthSelect"].value == "") && document.forms["verifyform"]["Reg_NRIC_V"].value != ""){
        document.getElementById("Reg_NRIC_V").style.borderBottomColor = "#EED202";
         document.getElementById("Reg_NRIC_V").value = ""; //clear input
         document.getElementById('vNRICL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key In Your Birthday";
         document.getElementById('vNRICL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('vNRICL').innerHTML = "Enter NRIC"; 
             document.getElementById('vNRICL').style.color = "#9b9b9b";
        }, 2000);
        toggle = false;
    }
    else if((document.forms["verifyform"]["yearSelect"].value == "" || document.forms["verifyform"]["monthSelect"].value == "") && document.forms["verifyform"]["Reg_NRIC_V"].value == ""){
        document.getElementById("Reg_NRIC_V").style.borderBottomColor = "#EED202";
         document.getElementById("Reg_NRIC_V").value = ""; //clear input
         document.getElementById('vNRICL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Please Key In Your NRIC and Birthday";
         document.getElementById('vNRICL').style.color = "#EED202";
         setTimeout(function(){ 
             document.getElementById('vNRICL').innerHTML = "Enter NRIC"; 
             document.getElementById('vNRICL').style.color = "#9b9b9b";
        }, 2000);
        toggle = false;
    }

    /*if(toggle == true)
    {
        if(!validateNRIC(document.forms["verifyform"]["Reg_NRIC_V"].value))
        {
            toggle = false;
         document.getElementById("Reg_NRIC_V").style.borderBottomColor = "#cc0000";
         document.getElementById("Reg_NRIC_V").value = ""; //clear input
         document.getElementById('vNRICL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Invalid NRIC/Birthday";
         document.getElementById('vNRICL').style.color = "#cc0000";
         setTimeout(function(){ 
             document.getElementById('vNRICL').innerHTML = "Enter NRIC"; 
             document.getElementById('vNRICL').style.color = "#9b9b9b";
        }, 2000);

        }

    }*/
    if(toggle == false)
    {
        return false;
    }
        
    return true;

}


