var questions = ["Which of the following is correct about features of JavaScript?","Which of the following is a JavaScript reserved word meaning variable?","which of the following refers to a container for multiple types of data values?", "Which of the following is the type of statement that causes a function to stop executing?", "Which of the following commands retrieves the length of an array?"];
console.log(questions)
var timeLeft = 60;

document.querySelector("#startButton").addEventListener("click",start)

function start() {
 console.log("start")

    function timerFunc() {
      timeLeft = timeLeft - 1;
      document.getElementById("startCard").innerHTML = "Time Remaining: " + timeLeft;
    }

    timer = setInterval(timerFunc, 1000) // define timer

 }

  
 

//when start quiz button is clicked, text inside card changes to a countdown timer
//when start quiz button is clicked, button goes away
document.getElementById("questionsDisplay").innerHTML = "";
document.getElementById("answersDisplay").innerHTML = "";
