var questions = [
    //that's why we want to put the question in the object so that it's all stored in one spot in the array 
    {   //index of 0 
        //key/value pair the question is the key, the value is question 1
        question: "question 1",
        option1: "q1 o1",
        option2: "q1 o2",
        option3: "q1 o3",
        option4: "q1 o4",
        correctAnswer: "q1 o2"
    },
    { 
        //index 1
        question: "question 2",
        option1: "q2 o1",
        option2: "q2 o2",
        option3: "q2 o3",
        option4: "q2 o4",
        correctAnswer: "q2 o2"
    },

    { //index 2
    question: "question 3",
        option1: "q3 o1",
        option2: "q3 o2",
        option3: "q3 o3",
        option4: "q3 o4",
        correctAnswer: "q3 o2"

    },
    { //index 3
        question: "question 4",
            option1: "q4 o1",
            option2: "q4 o2",
            option3: "q4 o3",
            option4: "q4 o4",
            correctAnswer: "q4 o2"
    
        },
    { //index 4
    question: "question 5",
        option1: "q5 o1",
        option2: "q5 o2",
        option3: "q5 o3",
        option4: "q5 o4",
        correctAnswer: "q5 o2"

    },
    { //index 5
        question: "question 6",
            option1: "q6 o1",
            option2: "q6 o2",
            option3: "q6 o3",
            option4: "q6 o4",
            correctAnswer: "q6 o2"
    
        },        
]
//index starts at 0 
var questionNumber = 0; 
var time = 75;

//put this inside the setInterval
//time--
document.getElementById("timer").innerText = time

document.getElementById("start").addEventListener("click", function() {
    nextQuestion();
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
