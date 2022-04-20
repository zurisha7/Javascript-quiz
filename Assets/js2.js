
var saveBtn= document.getElementById("save");
var finalResults = document.getElementById("finalResults");
var playAgain = document.getElementById("reload");
var highScoreButton = document.getElementById("highBtn");
var highScoreList = document.getElementById("list");

var highScore = JSON.parse(localStorage.getItem('highscores')) || [];
var mostRecentScore= localStorage.getItem('mostRecentScore');
var MAX_HIGH_SCORE = 5;

//save highscores
finalResults.innerText = mostRecentScore;

playAgain.addEventListener("click", function () {
    return window.location.assign("index.html");
});


/*activate save button */
    saveBtn.addEventListener("click", function save() {
        // get input value
        var initials = document.getElementById("initials").value
        //set score
        var score = {
            score: mostRecentScore,
            initials: initials
        }

        var 
        //add the scores and then sort 
        highScore = Array.prototype.push(score);
        highScore = Array.prototype.sort ((a,b) => b.score - a.score);
        // only provide the top 5
        highScore.splice(5);
    
        localStorage.setItem('highscores', JSON.stringify(highScore));
    });



       highScoreButton.addEventListener("click", function(){

        var scores = localStorage.getItem('highscores', []);

        var listInfo = document.createElement("li");
         //add the info from storage
        listInfo.textContent = scores;   
        //assign a spot
        highScoreList.appendChild(listInfo);
        
    });






