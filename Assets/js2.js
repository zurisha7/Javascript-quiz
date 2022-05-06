
var saveBtn= document.getElementById("save");
var finalResults = document.getElementById("finalResults");
var playAgain = document.getElementById("reload");
var highScoreButton = document.getElementById("highBtn");


var highScore = JSON.parse(localStorage.getItem('highScores'));
var mostRecentScore= JSON.parse(localStorage.getItem('mostRecentScore')) || [];
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
    
         var highScore = JSON.parse(localStorage.getItem('highScores')) || [];
          highScore.push(score);
          window.localStorage.setItem('highScores', JSON.stringify(highScore));
        
    });

    
      //display score function

        function printHighScores() {
            //click the button to get high scores
            highScoreButton.addEventListener("click", function(){
                //retrieve array from local storage, then loop through to get all values
                var getHighScore = localStorage.getItem('highScores');
               var array = " "
                for (var i = 0; i < getHighScore; i++); {
                    array += getHighScore;
                
                console.log(array)
                //create element and append
                    var listInfo = document.createElement("li");
                  listInfo.textContent = array;
                var highScoreList = document.getElementById("list");
                    highScoreList.appendChild(listInfo);
                
                }
        })
    };
    
    printHighScores();
   




