function failLogin(){

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
  
}

function failVerify(){
         document.getElementById("Reg_NRIC_V").style.borderBottomColor = "#cc0000";
         document.getElementById("Reg_NRIC_V").value = ""; //clear input
         document.getElementById('vNRICL').innerHTML = "<i class='fas fa-exclamation-circle'></i>"+"    Invalid NRIC/Birthday";
         document.getElementById('vNRICL').style.color = "#cc0000";
         setTimeout(function(){ 
             document.getElementById('vNRICL').innerHTML = "Enter NRIC"; 
             document.getElementById('vNRICL').style.color = "#9b9b9b";
        }, 2000);

}
function failReg(){
      document.getElementById("RST_PW").style.borderBottomColor = "#cc0000";
      document.getElementById("RST_PW").value = ""; //clear input 
      document.getElementById('RST_PWL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid Password";
      document.getElementById('RST_PWL').style.color = "#cc0000";
      setTimeout(function(){ 
            document.getElementById('RST_PWL').innerHTML = "Enter Password"; 
            document.getElementById('RST_PWL').style.color = "#9b9b9b";
      }, 2000);

}

/*function failRSTPW(){

      document.getElementById("RST_PW").style.borderBottomColor = "#cc0000";
            document.getElementById("RST_PW").value = ""; //clear input 
            document.getElementById('RST_PWL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid Password";
            document.getElementById('RST_PWL').style.color = "#cc0000";
            setTimeout(function(){ 
                  document.getElementById('RST_PWL').innerHTML = "Enter Password"; 
                  document.getElementById('RST_PWL').style.color = "#9b9b9b";
            }, 2000);
            document.getElementById("RST_RPW").style.borderBottomColor = "#cc0000";
            document.getElementById("RST_RPW").value = ""; //clear input
            document.getElementById('RST_RPWL').innerHTML = "<i class='fas fa-times-circle'></i>" + "Invalid Password";
            document.getElementById('RST_RPWL').style.color = "#cc0000";
            setTimeout(function(){ 
                  document.getElementById('RST_RPWL').innerHTML = "Re-Enter Password"; 
                  document.getElementById('RST_RPWL').style.color = "#9b9b9b";
            }, 2000);
           // }
    
}*/