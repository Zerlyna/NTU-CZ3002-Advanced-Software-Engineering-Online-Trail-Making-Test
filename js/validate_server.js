function failLogin(){
            /*var load_Times = 5;
            alert("back-test");
            alert(load_Times);
            if(load_Times == 5) {
                  alert("checkp")
            }
            else{*/
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
           // }

    
}