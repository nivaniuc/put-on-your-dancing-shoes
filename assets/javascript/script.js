function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
      
      
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i]
            guess("bttn" + i, choices[i]);
        }
    }
}

function quess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>"
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Common data types do not include: ", ["Strings", "Booleans", "Alerts", "Numbers"], "Alerts"),
    new Question("The condition of an if/else statement is enclosed within a: ", ["Quote", "Curly Bracket", "Parentheses", "Square Bracket"], "Parentheses"),
    new Question("Arrays in Java Script can be used to store: ", ["Number of Strings", "Other Arrays", "Booleans", "All of the Above"], "All of the Above")
];

var quiz = new Quiz(questions);

populate();
