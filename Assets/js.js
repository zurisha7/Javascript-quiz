//gather all the elements needed from HMTL

var startBtn = document.getElementById("go");
var questions = document.getElementById("quest");
var questionCon= document.getElementById("card");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");

var results = document.getElementById("results");
var storage = document.getElementById("storage");

var timer = document.getElementById("timer");



var pickQuestions = [
    {
    question:"What property indicates a value is not a legal number?",

    answer: [
        {text: "isNaN", correct: false},
        {text: "NaN", correct: true},
        {text: "elemNodeType", correct: false},
        {text: "notNum", correct: false}
    ]
    },{
    question: "What does 'this' refer to?",

    answer:[
         {text: "an object that is invoking the function", correct: true},
         {text: "an object that is outside the function.", correct: false},
         {text: "this thing right here", correct: false},
         {text: "the function itself", correct: false}
    ]
},{
    question: "Can you access a local variable outside of a function?",

    answer: [
        {text: "yes", correct: false},
        {text: "no", correct: true},
        {text: "sometimes", correct: false},
        {text: "only when the function says so", correct: false}
    ]
},{
    question: "What two values can can a boolean have?",

    answer: [
        {text: "left and right", correct: false},
        {text: "more and less", correct: false},
        {text: "up and down", correct: false},
        {text: "true and false", correct: true}
    ]
},{
    question: "What does addEventListener('click',  ) do",
    
    answer: [
        {text: "adds a clicking sound when a button is pushed", correct: false},
        {text: "makes two values click together creating one value", correct: false},
        {text: "'listens' for the user to click on an element to start an event", correct: true},
        {text: "adds an event in a calendar", correct: false}
    ]

},{
    question: "What does IIFE stand for?",
    
    answer: [
        {text: "If I Forget Everything", correct: false},
        {text: "Immediately Invoked Function", correct: true},
        {text: "If Else", correct: false},
        {text: "innerFuntion", correct: false}
    ]
}];

//timer var

var tminutes = parseInt(total_seconds/90);
var tseconds = parseInt(total_seconds%90);
var total_seconds = 90

// click button to start timer
 function setTimer(){
        document.getElementById("timer").innerHTML = ' Time Left: ' + tminutes + ' minutes ' + tseconds + ' seconds ';
       if(total_seconds <= 0 ){
         setTimeout('document.quiz.submit()', 1);
       } else {
          total_seconds = total_seconds -1;
          tminutes = parseInt(total_seconds/90);
          tseconds = parseInt(total_seconds%90);
          setTimeout("setTimer()", 1000);
       }
       setTimeout("setTimer()", 1000);
    };
//click Go to show Question
startBtn.addEventListener("click", showQuestion());

//when clicked Go will disappear
btn.addEventListener('click', () => {
    // hide button
    btn.style.display = 'none'});



function showQuestion(question)  {
    
    questionCon.innerHTML = pickQuestions
     question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
            if(answer.correct){
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", true)
            answer.appendChild.button
        
})};
        

    
 
//function to start Quiz
function startQuiz() { 
   console.log("started")
   };
    startQuiz();
//nextQuestion()

var currentQuestionIndex = 0



function nextQuestion(){
    showQuestion([currentQuestionIndex])
};
