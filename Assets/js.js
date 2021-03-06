//gather all the elements needed from HMTL

var startBtn = document.getElementById("go");
var questions = document.getElementById("quest");
var questionCon= document.getElementById("card");

var answersEl = Array.from(document.getElementsByClassName("ansText"));

var scoreText= document.getElementById("scoreTotal");
var questText= document.getElementById("questTotal");

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

 startBtn.addEventListener("click", setTimer);

 startBtn.addEventListener("click", function(){
// click to hide button and show quiz
    startBtn.style.display = 'none';
    questionCon.style.visibility ='visible' });
 // timer_function

 function setTimer(){ 
       document.getElementById("timer").innerHTML = ' Time Left: ' + tseconds + ' seconds ';
       if(total_seconds <= 0 ){
           // stop timer and go to results page 
     clearInterval(timer);
     alert("Times Up! Go to Results");
     return window.location.assign("index2.html");
        } else {
          total_seconds = total_seconds - 1;
          tminutes = parseInt(total_seconds / 0);
         tseconds = (total_seconds % 90);
         timer= setTimeout("setTimer()", 1000);
        }
 };

 
    
// points for correct answer 
var answer_points = 10;
//quiz length
var max_questions = 6;


var results = document.getElementById("results");
var storage = document.getElementById("storage");

var timer = document.getElementById("timer");
    
 
//function to start Quiz
function startQuiz () { 
    questionCounter = 0;
    score=0;
    availableQuestions = [...pickQuestions];
    showNewQuestion();

};
function showNewQuestion() {
    // if out of questions 
    if(availableQuestions.length <= 1 || questionCounter >= max_questions){
        localStorage.setItem('mostRecentScore', score)
        //go to results pages
       return window.location.assign("index2.html");
    }
    //advance one question at a time randomly and display
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questions.innerText = currentQuestion.question;
//assign and show answer for each question
    answersEl.forEach(answer => {
        var number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
    });


    availableQuestions.splice(questionIndex, 1);
    correctAnswers = true; 
    
};
//click on the answer and apply correct or incorrect
answersEl.forEach(answer => {
    answer.addEventListener("click", e => {
        if(!correctAnswers) return;
        correctAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        var classApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer)
        classApply = 'correct';
        
        if(classApply === "correct"){
        incScore(answer_points);
        }
    selectedChoice.classList.add(classApply);

     setTimeout( () => {
    selectedChoice.classList.remove(classApply);
     showNewQuestion();
     }, 1000);
});
});
// assign and show score
function incScore(num) {
    score += num;
    scoreText.innerText = score;
};
startQuiz();

