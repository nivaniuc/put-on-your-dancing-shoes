function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions.length === this.questionIndex;

}

Quiz.prototype.guess = function(_answer) {
    this.questionIndex++;

    if(this.getQuestionIndex() .correctAnswer (_answer)) {
        this.score++;
    }
}