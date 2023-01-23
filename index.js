var readlineSync = require("readline-sync");

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW YASH?");
}

var questionList = [
  {
    question: "What's yashwanth's fav food?",
    answer: "Channa Batura"
  },
  {
    question: "What's yashwanth's fav color?",
    answer: "Blue"
  },
  {
    question: "Who's yashwanth's fav cricketer?",
    answer: "MS Dhoni"
  },
  {
    question: "Where do Yashwanth live?",
    answer: "Bangalore"
  },
  {
    question: "What's yashwanth's fav food?",
    answer: "Channa Batura"
  }
]

var highScores = [
  {
    name: "Rohit",
    hisScore: 5
  },
  {
    name: "Shub",
    hisScore: 4
  }
]
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right :)");
    score++;
  }
  else {
    console.log("Wrong :(");
  }
}

function startQuiz() {
  for (var i = 0; i < questionList.length; i++) {
    var questionCur = questionList[i];
    play(questionCur.question, questionCur.answer);
  }
}

function showScore() {
  console.log(" YAY! Your score is: " + score);
  console.log("Checkout the highest scores");
  for (var i = 0; i < highScores.length; i++) {
    var cur = highScores[i];
    console.log(cur.name + " --> " + cur.hisScore);
  }
}

welcome();
startQuiz();
showScore();
