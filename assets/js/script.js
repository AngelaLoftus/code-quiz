var questionNumber = 0; 
var timeLeft = 60;
var userScore = 0;
const timerEl = document.getElementById("timer");
const questionDivEl = document.getElementById("questiondiv");
let quizTimer;


//questions array
var questions = [
    //questions in objects so that it's all stored in one spot in the array 
    {   //index of 0 
        //key/value pair the question is the key, the value is the text
        question: "Which method allows you to set the item to local storage?",
        
        option1: "localStorage.setItem()",
        option2: "localStorage.getItem()",
        option3: "localStorage.saveItem()",
        option4: "localStorage.storeItem()",

        correctAnswer: "localStorage.setItem()"
    },
    { 
        //index 1
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "script",
        option2: "JavaScript",
        option3: "scripting",
        option4: "js",
        correctAnswer: "script"
    },

    { //index 2
    question: "How do you write 'Hello World' in an alert box?",
        option1: "msgBox('Hello World')",
        option2: "alertBox('Hello World')",
        option3: "msg('Hello World')",
        option4: "alert('Hello World')",
        correctAnswer: "alert(Hello World')"

    },
    { //index 3
        question: "Which of the following correctly shows how to write an array?",
            option1: "var colors = 'purple', 'pink', 'blue'",
            option2: "var colors = (1: purple, 2: pink, 3: blue)",
            option3: "var colors = ['purple', 'pink', 'blue']",
            option4: "var colors = (purple), (pink), (blue);",
            correctAnswer: "var colors = ['purple', 'pink', 'blue']"
    
        },
    { //index 4
    question: "Which of the following if statements is written correctly?",
        option1: " if i = 5",
        option2: "if (i === 5)",
        option3: "if i === 5",
        option4: "if i = (5)",
        correctAnswer: "if (i === 5)"

    },
    { //index 5
        question: "What is the best way to learn javascript?",
            option1: "Reverse engineer code",
            option2: "Copy code snippets",
            option3: "Practice on your own",
            option4: "Read coding books",
            correctAnswer: "Practice on your own"
    
        },        
]


//function to start the timer and begin the quiz
function startTimer() {
    
        quizTimer = setInterval(function() {
            //end the quiz if there is no time left
            if (timeLeft <= 0) {
                endQuiz();
            }
            //if there is time left, count down the timer and display the countdown
            else {
            timeLeft--;
            timerEl.innerText = timeLeft + " seconds left."; }
        }, 1000);
}

//event listener for click on start button and display the questions
document.getElementById("start").addEventListener("click", function() {
document.getElementById("start").setAttribute("class", "hidden");
document.getElementById("questiondiv").removeAttribute("class", "hidden");
//calls the start of the quiz
    startTimer();
    nextQuestion();
})



//4 seperate event listeners (will only execute questionNumber++ once)
//on click, execute the choice handler function
document.getElementById("option1").addEventListener("click", choiceHandler);
document.getElementById("option2").addEventListener("click", choiceHandler);
document.getElementById("option3").addEventListener("click", choiceHandler);
document.getElementById("option4").addEventListener("click", choiceHandler);

//function to handle the correct answer and deduct time if incorrect
function choiceHandler () { 
    if (this.value !== questions[questionNumber].correctAnswer) {
        timeLeft -= 5;
        
    } 
    if (timeLeft <=0) {
        timeLeft = 0;
    }
    timerEl.innerText = timeLeft + " Seconds Left";
    questionNumber ++;
    //if reach the end of quiz, call end quiz, else call next question
    if (questionNumber === questions.length) { 
        endQuiz();
    } else {
        nextQuestion();
    }

}

//every time you click the start button, it's gonna increase the index by 1, and show the text for the new questions prompt 
function nextQuestion () {
    
    document.getElementById("question").innerHTML = questions[questionNumber].question 
    document.getElementById("option1").innerHTML = questions[questionNumber].option1
    document.getElementById("option1").setAttribute("value",questions[questionNumber].option1)
    document.getElementById("option2").innerHTML = questions[questionNumber].option2
    document.getElementById("option2").setAttribute("value",questions[questionNumber].option1)
    document.getElementById("option3").innerHTML = questions[questionNumber].option3
    document.getElementById("option3").setAttribute("value",questions[questionNumber].option1)
    document.getElementById("option4").innerHTML = questions[questionNumber].option4
    document.getElementById("option4").setAttribute("value",questions[questionNumber].option1)

}

//function to close out the quiz
//and show user the high scores with option to start over or clear scores
function endQuiz() {
    
    clearInterval(quizTimer);
    console.log("quizOver");
    questionDivEl.setAttribute("class", "hidden");
    alert("Your score was " + timeLeft);
    let initials = prompt("Enter Your initials.");

    timerEl.innerHTML= "Hey, " + initials + ", your final score is: " + timeLeft +  ".<br> <a href = './scores.html'> Click here to view high scores</a>";

    //save this score and push to the array
    let scores = JSON.parse(window.localStorage.getItem("scores"))|| [];
    let thisScore = { 
        initials: initials,
        score: timeLeft
    }
    scores.push(thisScore);
    window.localStorage.setItem("scores", JSON.stringify(scores));
};



