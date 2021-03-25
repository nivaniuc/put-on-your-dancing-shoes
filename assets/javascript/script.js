function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
      
      
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i]
        }
    }
}

var questions = [
    new Question("Common data types do not include: ", ["Strings", "Booleans", "Alerts", "Numbers"], "Alerts"),
    new Question("The condition of an if/else statement is enclosed within a: ", ["Quote", "Curly Bracket", "Parentheses", "Square Bracket"], "Parentheses"),
    new Question("Arrays in Java Script can be used to store: ", ["Number of Strings", "Other Arrays", "Booleans", "All of the Above"], "All of the Above")
];

var quiz = new Quiz(questions);

populate();
