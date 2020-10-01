var questions = [
    {
        question: "Which of the following is correct about features of JavaScript?",
        choices: ["a","b","c","d"],
        correct: "c"
    },
    {
        question: "which of the following refers to a container for multiple types of data values?",
        choices: ["e","f","g","h"],
        correct: "f"
    }
    
    //"Which of the following is the type of statement that causes a function to stop executing?", 
    //"Which of the following commands retrieves the length of an array?"
];
var currentQuestionIndex = 0
var timeLeft = 60;

document.querySelector("#startButton").addEventListener("click",start)

function start() {
 console.log("start")
    renderQuestions()
    function timerFunc() {
      timeLeft = timeLeft - 1;
      document.getElementById("startCard").textContent = "Time Remaining: " + timeLeft;
    }

    timer = setInterval(timerFunc, 1000) // define timer

  }
function renderQuestions(){
    var showQuestion = document.getElementById("questionsDisplay");
    var showAnswers = document.getElementById("answersDisplay");
    showQuestion.textContent = questions[currentQuestionIndex].question
    var choices = questions[currentQuestionIndex].choices
    for (var i = 0; i < choices.length; i++){
        var button = document.createElement("button")
        button.textContent = choices[i]
        button.classList.add("btn")
        button.classList.add("btn-secondary")
        button.classList.add("mx-2")
        showAnswers.appendChild(button)
    }
}



  
 

//hide the start
//give buttons unique class (answer button)
//on click or event listener for each button, 
