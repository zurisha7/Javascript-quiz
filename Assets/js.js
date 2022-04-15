var start = document.getElementById("start");
var questions = document.getElementById("container");
var questionEl= document.getElementById("questions");
var answerEl =document.getElementById("answers");
var currentQuestionIndex = 0;


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

start = addEventListener("click", startQuiz);

function startQuiz(){     

nextQuestion()

currentQuestionIndex = 0
};


function nextQuestion(){
    showQuestion([currentQuestionIndex])

    
};


function showQuestion(question) {
    //startTimer()
questionEl.innerHTML = pickQuestions.pickQuestions
question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", correct)
        answerEl.appendChild.button
    
})};

function pickAnswer(pickQuestions){
   
}


