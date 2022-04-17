//gather all the elements needed from HMTL

var startBtn = document.getElementById("go");
var questions = document.getElementById("quest");
var questionCon= document.getElementById("card");
var answersEl = Array.from(document.getElementsByClassName("ansText"));
 
var currentQuestion = {};
var correctAnswers = true;
var score = 0;
var questionCounter =0;
var availableQuestions = [];

// Quiz questions and answers
var pickQuestions = [
    {
    question:"What property indicates a value is not a legal number?",
        answer1: "isNaN",
        answer2: "NaN", 
        answer3: "elemNodeType", 
        answer4: "notNum", 
        answer: 2
    
    },{
    question: "What does 'this' refer to?",
        answer1: "an object that is invoking the function", 
        answer2: "an object that is outside the function.",
        answer3: "this thing right here",
        answer4: "the function itself", 
        answer: 1
},{
    question: "Can you access a local variable outside of a function?",
        answer1: "yes", 
        answer2: "no", 
        answer3: "sometimes",
        answer4: "only when the function says so",
        answer: 2
    
},{
    question: "What two values can can a boolean have?", 
        answer1: "left and right", 
        answer2: "more and less", 
        answer3: "up and down",
        answer4: "true and false",
        answer: 4
    
},{
    question: "What does addEventListener('click',  ) do",
        answer1: "adds a clicking sound when a button is pushed",
        answer2: "makes two values click together creating one value",
        answer3: "'listens' for the user to click on an element to start an event",
        answer4: "adds an event in a calendar", 
        answer: 3

},{
    question: "What does IIFE stand for?",
        answer1: "If I Forget Everything",
        answer2: "Immediately Invoked Function",
        answer3: "If Else",
        answer4: "innerFuntion",
        answer: 2
}];


//timer var

var tminutes = parseInt(total_seconds/90);
var tseconds = parseInt(total_seconds%90);
var total_seconds = 90;

// click button to start timer
// function setTimer(){
//        document.getElementById("timer").innerHTML = ' Time Left: ' + tminutes + ' minutes ' + tseconds + ' seconds ';
 //      if(total_seconds <= 0 ){
 ///        setTimeout('document.quiz.submit()', 1);
  //     } else {
 //         total_seconds = total_seconds -1;
 //         tminutes = parseInt(total_seconds/90);
 //         tseconds = parseInt(total_seconds%90);
 //         setTimeout("setTimer()", 1000);
 //      }
 //      setTimeout("setTimer()", 1000);
 //   };
//
    
// points for correct answer 
var answer_points = 10;
//quiz length
var max_questions = 5;


var results = document.getElementById("results");
var storage = document.getElementById("storage");

var timer = document.getElementById("timer");
    
 
//function to start Quiz
function startQuiz () { 
    questionCounter = 0;
    score=0;
    availableQuestions = [...pickQuestions];
    console.log(availableQuestions);
    showNewQuestion();

};
function showNewQuestion() {
    // if out of questions 
    if(availableQuestions.length === 0 || questionCounter >= max_questions){
        //go to results
      //  return window.location.assign(*/end.html*);
    
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    quest.innerText = currentQuestion.question;

    answersEl.forEach(answer => {
        var number = answer['number'];
        answer.innerText =
        currentQuestion['answer' + number];
    
    });


availableQuestions.splice(questionIndex, 1);

correctAnswers = true; 
    
}};

answersEl.forEach(answers => {
    answers.addEventListener("click", function() {
        if(!correctAnswers) return;
        acceptedAnswers = false;
        var selectedAnswer = EventTarget;
        var selectedChoice = selectedAnswer.dataset["number"];
        showNewQuestion();
});
});

startQuiz();