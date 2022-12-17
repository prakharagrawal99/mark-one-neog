var readlineSync = require("readline-sync");

//ask username and welcome them
function welcome() {
  var userName = readlineSync.question("What's your name? ")
  console.log("Welcome " + userName + " to DO YOU KNOW Prakhar?")
}

// quiz questions
var questions = [
  {
    question: "Where do I live nowadays? ",
    answer: "Muskara"
  },
  {
    question: "Where do I work? ",
    answer: "Tech Mahindra"
  },
  {
    question: "What is the name of my initiative of celebrating youth and their stories? ",
    answer: "Young Influx"
  },
  {
    question: "What is my nickname? ",
    answer: "Raja"
  },
  {
    question: "What is the name of my favorite hero? ",
    answer: "Prakhar"
  },
]

var score = 0;
//high scores
var highScores = [
  {
    name: "Prakhar",
    score: 5
  },
  {
    name: "Ghost",
    score: 4
  },
]

//loop to call questions
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You are right!")
    score++;
  }
  else {
    console.log("You are wrong!")
  }
  console.log("current score: ", score);
  console.log("----------------------------------")
}

function play() {
  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("And you could score " + score + ".");

  console.log("----------------------------------")

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
play();
showScores();