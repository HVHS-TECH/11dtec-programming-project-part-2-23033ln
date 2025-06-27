/****************************
 for html <button onclick="rentBike();"> </button>
 *     document.getElementById("myButton").addEventListener("click", myFunction);
    function myFunction() {
      alert("Button Clicked!");
    }
 Intronductions
 Lukas
29/04/25 
Intro
function askDays() {
prompt("How long do you want to rent this for?/n 1 to 60 days only");
} if (askDays  1 >||< 30 ){
  alert("that will be");
} else if (askdays == 30  60) {
  
}
askDays();
*****************************/
console.log("Running Website");

//variables
var askUserName
var askDays


/**************************** 
 *Main code
 ****************************/
function askUserName() {
  askUserName = prompt("What is you name?");
  alert("Hello, " + askUserName);
  askQuestion();
}
function askQuestion() {
  askQuestion = prompt("Do you want to rent this bike?");
  if (askQuestion == "yes", "Yes", "ye") {
    askDays();
  } else{ 
    alert("Have a nice day.");
  }
}
function askDays() {
  askDays = prompt("How many days do you want have this for? Max of 30 days");
  if ( 0 > askDays || askDays < 31 ) {
   alert("that will be $40 per week.");
   askinsurance()
  } else{ 
    alert("Chose a Vaild number");
    alert("I have your ip in a gun barrel.")
    askDays();
  }
}
function askinsurance() {
 askinsurance =  prompt("Would you like to add insurance? ");
   if (askinsurance == "yes" ) {
   alert("that will add $5 a week to the total amount")
  } else{ 
    alert("I will take $10 away from the total cost a week")
  }
} 


function rentBike() {
  askUserName();
}




/****************************
 funtions
 ****************************/