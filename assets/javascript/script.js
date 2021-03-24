// Selection Elements
var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var counter = document.getElementById("counter")
var score = document.getElementById("score")

// Question Elements
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

// Question Section
let questions = [
    {
        question: "Are you gay?"
        choiceA: "yes"
        choiceB: "yes"
        choiceC: "yes"
        choiceD: "yes"
        correct: "B"
    }
]

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion(){
    let q = questions [runningQuestion];

    question.innerHTML = "<p>" + q.question + "<p>";
}
