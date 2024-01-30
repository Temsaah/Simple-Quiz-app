const quizData = [
  {
    question: "In which European city would you find Orly airport?",
    a1: "California",
    a2: "Rome",
    a3: "Paris",
    correct: "a3",
  },
  {
    question: "Which author wrote the 'Winnie-the-Pooh' books?",
    a1: "Kurt Vonnegut",
    a2: "A. A. Milne",
    a3: "Ernest Hemingway",
    correct: "a2",
  },
  {
    question: "Which country consumes the most chocolate per capita?",
    a1: "Switzerland",
    a2: "France",
    a3: "Egypt",
    correct: "a1",
  },
];

let currentQuestion = 0;
let correctAnswer = 0;

let questionText = document.getElementsByTagName("h3")[0];

let ans1 = document.getElementById("text1");
let ans2 = document.getElementById("text2");
let ans3 = document.getElementById("text3");
let subBtn = document.getElementById("sub");
let container = document.getElementsByClassName("container")[0];
let answerArray = document.querySelectorAll("[name='answer'");
let allRadios = document.querySelectorAll("[type= 'radio']");
loadQuiz();

function loadQuiz() {
  questionText.innerHTML = quizData[currentQuestion].question;
  ans1.innerHTML = quizData[currentQuestion].a1;
  ans2.innerHTML = quizData[currentQuestion].a2;
  ans3.innerHTML = quizData[currentQuestion].a3;
}

subBtn.onclick = function (e) {
  e.preventDefault();
  let checked = 0;
  for (i = 0; i < allRadios.length; i++) {
    if (allRadios[i].checked) {
      checked++;
    }
  }
  if (checked === 0) {
    return;
  }
  answerArray.forEach(function (ele) {
    if (ele.checked == true) {
      if (ele.id === quizData[currentQuestion].correct) {
        correctAnswer++;
      } else if (ele.checked === false) {
      }
    }
    ele.checked = false;
  });
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    container.innerHTML = `<h3>You Have answered ${correctAnswer}/${quizData.length}</h3>`;
  }
};
