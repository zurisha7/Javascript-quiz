
var saveBtn= document.getElementById("save");
var finalResults = document.getElementById("finalResults");
var playAgain = document.getElementById("reload");
var highScoreButton = document.getElementById("highBtn");
var highScores = JSON.parse(localStorage.getItem('highScore'));
var mostRecentScore= localStorage.getItem('mostRecentScore');

var MAX_HIGH_SCORE = 5;

//save highscores
finalResults.innerText = mostRecentScore;


/*activate save button */
    saveBtn.addEventListener("click", function save() {
        // get input value
        var initials = document.getElementById("initials").value
        //set score
        var score = {
            score: mostRecentScore,
            initials: initials
        }
        highScores = Array.prototype.push(score);
        highScores = Array.prototype.sort ((a,b) => b.score - a.score);

        highScores.splice(5);
        console.log(highScores)

        localStorage.setItem('highscores', JSON.stringify(highScores));
    
var initials = document.getElementById("initials").value
    });






