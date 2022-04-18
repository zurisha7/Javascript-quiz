var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("score")) || [];

function showHighScore () {
highScoresList.innerHTML =
highScores.map(score => {
   return '<li class="high-score">${score.initials}-${score.sc;
})
.join("")};