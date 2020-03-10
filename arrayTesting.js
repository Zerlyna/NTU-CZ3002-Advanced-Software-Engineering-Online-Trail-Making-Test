var userArray=[];
function storeUserData()
{
    var userArray=[];   
    var d = new Date();
      
     var date = d.getDate();
     var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
     var year = d.getFullYear();
      
     var dateStr = date + "/" + month + "/" + year;
 
     var user =
         {
             name: "YongXin",
             Year: year,
             Month:month,
             Day:date,
             firstTest: 2,
             SecondTest:0,
         }
     userArray.push(user);
     window.sessionStorage.setItem("items", JSON.stringify(userArray));
  location.href = "GraphTesting.php";
 }


// sessionStorage.setItem("userArray", userArray);

// }