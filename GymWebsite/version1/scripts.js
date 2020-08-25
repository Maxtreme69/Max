function show(){
  var ddl_member = document.getElementById('ddl_member');

  if(ddl_member.options[ddl_member.selectedIndex].value == 1) {
    document.getElementById("lbltext10").innerHTML="How many";
    document.getElementById("lbltext10").style.visibility="visible";
    document.getElementById("lbltext10").style.color="red";
  // return false
  } else {
    document.getElementById("lbltext10").innerHTML="valid";
    document.getElementById("lbltext10").style.visibility="hidden";
    document.getElementById("lbltext10").style.color="green";
  }

  if(ddl_member.options[ddl_member.selectedIndex].value == 1) {
    document.getElementById("lbltext9").innerHTML="How many members do you want to sign up?";
    document.getElementById("lbltext9").style.visibility="visible";
    document.getElementById("lbltext9").style.color="red";
        // return false
  } else {
    document.getElementById("lbltext9").innerHTML="valid";
    document.getElementById("lbltext9").style.visibility="hidden";
    document.getElementById("lbltext9").style.color="green";
  }
}


// Enter name: <input type="text" id="myInput" value="Mickey">
// <script>

// function myFunction() {
//   alert("The value of the input field was changed.");
// }

// var input = document.getElementById("lbltext9").addEventListener("input", show2);
// function show2() {
//   alert("The value of the input field was changed.");
//   console.log("The value of the input field was changed." + show2)
// }

function validate(){
  var name = document.getElementById("name").value;
  var name2 = document.getElementById("name2").value;
  var text1 = document.getElementById("text1").value;
  // https://www.youtube.com/watch?v=vPVx-zGFh0w
  // https://rgxdb.com/r/5PUY334X
  var regx = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/;
  var address = document.getElementById("address").value;
  var referral = document.getElementById("referral").checked
  var referral2 = document.getElementById("referral2").checked
  var ddl_member = document.getElementById('ddl_member');
  var ddl_member2 = document.getElementById('ddl_member9');
  var ddl_duration = document.getElementById('ddl_duration');
  var range_weight = document.getElementById("range_weight").value;

  var text;
  
  
  if(name.length > 2){
    document.getElementById("lbltext1").innerHTML="Valid";
    document.getElementById("lbltext1").style.visibility="visible";
    document.getElementById("lbltext1").style.color="green";
  }
   else
  {
    document.getElementById("lbltext1").innerHTML="please enter a valid first name";
    document.getElementById("lbltext1").style.visibility="visible";
    document.getElementById("lbltext1").style.color="red";
    // return false
  }

  if(name2.length > 3){
    document.getElementById("lbltext2").innerHTML="Valid";
    document.getElementById("lbltext2").style.visibility="visible";
    document.getElementById("lbltext2").style.color="green";
  }
  else
  {
    document.getElementById("lbltext2").innerHTML="please enter a valid second name";
    document.getElementById("lbltext2").style.visibility="visible";
    document.getElementById("lbltext2").style.color="red";
    // return false
  }

  if(regx.test(text1))
    {
      document.getElementById("lbltext").innerHTML="Valid";
      document.getElementById("lbltext").style.visibility="visible";
      document.getElementById("lbltext").style.color="green";
    }
    else
    {
      document.getElementById("lbltext").innerHTML="inValid";
      document.getElementById("lbltext").style.visibility="visible";
      document.getElementById("lbltext").style.color="red";
      // return false
    }


    if ((document.getElementById('referral').checked) ||  (document.getElementById('referral2').checked)){
      document.getElementById("lbltext5").innerHTML="valid";
      document.getElementById("lbltext5").style.visibility="visible";
      document.getElementById("lbltext5").style.color="green";
  } else {
      document.getElementById("lbltext5").innerHTML="Invalid";
      document.getElementById("lbltext5").style.visibility="visible";
      document.getElementById("lbltext5").style.color="red";
      // return false
  }
  
  if(range_weight >= 16){
    document.getElementById("lbltext8").innerHTML="Valid";
    document.getElementById("lbltext8").style.visibility="visible";
    document.getElementById("lbltext8").style.color="green";
  }
  else
  {
    document.getElementById("lbltext8").innerHTML="Must be 16 years and above";
    document.getElementById("lbltext8").style.visibility="visible";
    document.getElementById("lbltext8").style.color="red";
    // return false
  }


  if(ddl_member.options[ddl_member.selectedIndex].value == -1) {
      document.getElementById("lbltext6").innerHTML="Invalid";
      document.getElementById("lbltext6").style.visibility="visible";
      document.getElementById("lbltext6").style.color="red";
    // return false
    } else {
      document.getElementById("lbltext6").innerHTML="valid";
      document.getElementById("lbltext6").style.visibility="visible";
      document.getElementById("lbltext6").style.color="green";
    }

    if(ddl_duration.options[ddl_duration.selectedIndex].value == -1) {
        document.getElementById("lbltext7").innerHTML="Invalid";
        document.getElementById("lbltext7").style.visibility="visible";
        document.getElementById("lbltext7").style.color="red";
      // return false
      } else {
        document.getElementById("lbltext7").innerHTML="valid";
        document.getElementById("lbltext7").style.visibility="visible";
        document.getElementById("lbltext7").style.color="green";
      }
    }

function member() {
  var individual = document.getElementById('ddl_member').value;
  var member = document.getElementById("lbltext9").value;
  var referral = document.getElementById('referral').checked;
  var i = 0;
  var cost = 50;
  var add = (50 * 0.8);
  var discount1 = 0.975;
  var discount2 = 0.950;
  var discount3 = 0.925;
  var member_age1 = document.getElementById("member-age1").value;
  var member_age2 = document.getElementById("member-age2").value;
  var member_age3 = document.getElementById("member-age3").value;
  var member_age4 = document.getElementById("member-age4").value;
  var member_age5 = document.getElementById("member-age5").value;
  var member_age_total = [member_age1, member_age2, member_age3, member_age4, member_age5];
  var passvalholder = document.getElementById("passval");

  document.getElementById("passval").style.visibility="hidden";
  document.getElementById("passvalp").style.visibility="hidden";

    if(individual == 0) {
      cost =cost
    }

    while (member > i) {
      if (member <= 1){
        cost += 50;
        i++
      }
      else if (member <= 2){
        cost += (50 * 0.80);
        i++
      }
      else if (member <= 3)
      {
        cost += (add * discount1);
        console.log('Discount 1 = 0.975')
        i++
      }
      else if (member <= 4)
      {
        cost += (add * discount2);
        console.log('Discount 1 = 0.95')
        i++
      }
      else if (member <= 5)
      {
        cost += (add * discount3);
        console.log('Discount 1 = 0.925')
        i++
      }
    }

      if (referral) {
        cost = cost * 0.95;
        console.log('You clicked yes referral')
        console.log('cost =' + cost)
      }
      else {
        cost = cost
        console.log('You clicked no referral')
        console.log('cost =' + cost)
      }

      for (j=0; member_age_total.length > j; j++) {
        console.log('j iteration = ' + j)
        if (member_age_total[j] >= 15 && member_age_total[j] <= 19){
          k = j + 1;
          cost -= ((cost/k)*0.1);
          console.log("cost total " + cost);
          console.log("member age total " + member_age_total[j]);
        }
      }
      passvalholder.innerHTML=cost.toFixed(2);
      if(individual == 0 || individual == 1) {
      document.getElementById("passval").style.visibility="visible";
      document.getElementById("passvalp").style.visibility="visible";
      }
    }





  //   } else if (member < 5) {
  //     cost = member + 40;
  //     console.log(cost);
  //   }
  // }



// if(ddl_member.options[ddl_member.selectedIndex].value == 0) {
//         if (cost >= 50) {
//         cost = 50;
// }
    //     } else {
    //     cost = 50;
    // }
//   if (document.getElementById("lbltext9").value == 1) {
//     cost = 90
//   }

//   if (document.getElementById("lbltext9").value == 2) {
//      cost = 90 + (40 - (40 * 0.025))
//   }

  
//       for(i=1; i <= document.getElementById("lbltext9").value; i++) {
//       if (i = 1){
//       cost += 50;
//       } else {
//       cost = (cost*0.025);
//     }
//   }
//   console.log(cost)
// }

  //   if(document.getElementById("lbltext9").value == 2) {
  //     cost += 40;
  //     console.log(cost)
  // }

    // if(ddl_member.options[ddl_member.selectedIndex].value == 1) {
    //   cost = 80;
    //   console.log(cost)
    // }
  

// function members(){
// var ddl_member = document.getElementById('ddl_member');
// if(ddl_member.options[ddl_member.selectedIndex].value == 1) {
//   console.log('you clicked family')
//         document.getElementById("lbltext9").innerHTML="How many members do you want to sign up?";
//         document.getElementById("lbltext9").style.visibility="visible";
//         document.getElementById("lbltext9").style.color="red";
//       // return false
//       } else {
//         document.getElementById("lbltext9").innerHTML="valid";
//         document.getElementById("lbltext9").style.visibility="hidden";
//         document.getElementById("lbltext9").style.color="green";
//       }
//     }
