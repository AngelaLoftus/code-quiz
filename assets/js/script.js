var questionNumber = 0; 
var timeLeft = 60;
var userScore = 0;

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
//index starts at 0 

//put this inside the setInterval
//time--


function startTimer() {
    
        var quizTimer = setInterval(function() {
            if (timeLeft <=0) {
                clearInterval(quizTimer);
                document.getElementById("timer").innerText = "Sorry, you have run out of time.";
                alert("You ran out of time! Score = 0.");
                localStorage.setItem("score", 0);
                console.log("Score = 0");
            }
            timeLeft--;
            console.log(timeLeft + " seconds left");
            document.getElementById("timer").innerText = timeLeft;
        }, 1000);
}
document.getElementById("start").addEventListener("click", function() {
    nextQuestion();
    startTimer()
})


 //depends on that variable existing 

//put quotes unless you're passing a variable or a function

//4 seperate event listeners (will only execute questionNumber++ once)
document.getElementById("option1").addEventListener("click", function(){
    

    questionNumber++
    nextQuestion();
})

document.getElementById("option2").addEventListener("click", function(){

    questionNumber++
    nextQuestion();
})

document.getElementById("option3").addEventListener("click", function(){

    questionNumber++
    nextQuestion();
})

document.getElementById("option4").addEventListener("click", function(){

    questionNumber++
    nextQuestion();
})


//every time you click the start button, it's gonna increase the index by 1, and show the text for the new questions prompt 
function nextQuestion () {
    
    document.getElementById("question").innerHTML = questions[questionNumber].question 
    document.getElementById("option1").innerHTML = questions[questionNumber].option1
    document.getElementById("option2").innerHTML = questions[questionNumber].option2
    document.getElementById("option3").innerHTML = questions[questionNumber].option3
    document.getElementById("option4").innerHTML = questions[questionNumber].option4

}
if (questionNumber === 5) {console.log("game over")};

//ask user for name and save to local storage

if (questionNumber===5) {
var userName = prompt("What are your initials?");

localStorage.setItem("name", userName); };


var userScore = 0;

if (timeLeft >=0) {
    var userScore = timeLeft;
}
else { (userScore = 0) }

localStorage.setItem("score", userScore);

//setInterval for timer
// change the timer in the HTML (getElementById("timer").innerHTML = )

//check answer function
//it decrements by 5 if they're wrong 
//if else conditional statement if they're right, do blah, if they're wrong, take off time


//save multiple initials, name initial object to an array 
// if (questionNumber === 5) {
//     prompt("Please enter your initials");

//local storage, get user input for initials after quiz is over 
//make sure to call clear interval when the test is over 
//if have 4 questions, when questionNumber = 4, then clear interVal (when it hits the max number of questions)
