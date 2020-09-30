var questions = ["Which of the following is correct about features of JavaScript?","Which of the following is a JavaScript reserved word meaning variable?","which of the following refers to a container for multiple types of data values?", "Which of the following is the type of statement that causes a function to stop executing?", "Which of the following commands retrieves the length of an array?"];
console.log(questions)


document.querySelector("#startButton").addEventListener("click",start)
 function start() {
 console.log("start")


//    // step 2
 //   let question = document.createElement("div") // create div
//    question.innerHTML = "Some question text!" // set div text
//    document.querySelector("body").appendChild(question) // just appending to the body tag for now
//    // step 3
    function timerFunc() {
    }
    timer = setInterval(timerFunc, 1000) // define timer
 }
 var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);  
 document.getElementById("startCard").innerHTML = "Time Remaining:" + timeleft;

//when start quiz button is clicked, text inside card changes to a countdown timer
//when start quiz button is clicked, button goes away
document.getElementById("questionsDisplay").innerHTML = "";
document.getElementById("answersDisplay").innerHTML = "";
