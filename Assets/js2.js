var initials = document.getElementById("initials");
var saveBtn= document.getElementById("save")
var finalResults = document.getElementById("finalResults");

var mostRecentScore= localStorage.getItem('mostRecentScore');
var highScores = JSON.parse(localStorage.getItem('highscores')) || [];
console.log(highScores)

finalResults.innerText = mostRecentScore;

    saveBtn.addEventListener("click", function() {
    localStorage.setItem(initials + mostRecentScore)
});
    
var highScoreRecord = {
    score: mostRecentScore,
    name: initials.value
};
highScoreRecord.push(score);
console.log(highScoreRecord)

highScoreRecord.sort( (a,b) => {b.score - a.score})
 re
