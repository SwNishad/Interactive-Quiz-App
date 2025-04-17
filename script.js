const questions = [
  {
    question: "Why did the chicken cross the road?",
    answers: ["To get to the other side", "Because it saw KFC", "It was vibing", "No one knows"],
    correct: "To get to the other side"
  },
  {
    question: "What's the most Gen Z way to say hello?",
    answers: ["Good day", "Yo", "Sup 🫡", "What’s popping"],
    correct: "What’s popping"
  },
  {
    question: "If a cat could talk, what would it say?",
    answers: ["Feed me peasant", "Meow", "Where's my tuna?", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "Which one is NOT a real word?",
    answers: ["Rizz", "Cap", "Glorf", "Bet"],
    correct: "Glorf"
  },
  {
    question: "Your code doesn’t run. What do you do?",
    answers: ["Cry", "Google it", "Blame JavaScript", "All of the above"],
    correct: "All of the above"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

// Create Play Again button dynamically
const restartBtn = document.createElement("button");
restartBtn.textContent = "🔁 Play Again";
restartBtn.classList.add("hide");
restartBtn.id = "restart-btn";
document.querySelector(".quiz-box").appendChild(restartBtn);

function showQuestion() {
  let q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  scoreEl.classList.add("hide");
  restartBtn.classList.add("hide");

  q.answers.forEach(answer => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${answer}">
      ${answer}
    `;
    answersEl.appendChild(label);
  });
}

function checkAnswer() {
  const checkedRadio = document.querySelector('input[name="answer"]:checked');
  if (!checkedRadio) return false;

  if (checkedRadio.value === questions[currentQuestionIndex].correct) {
    score++;
  }

  return true;
}

nextBtn.addEventListener("click", () => {
  if (!checkAnswer()) {
    alert("Please select an answer first! 🫣");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.classList.remove("hide");
  showQuestion();
});

function showScore() {
  questionEl.textContent = "Quiz Over 💥";
  answersEl.innerHTML = "";
  nextBtn.classList.add("hide");
  scoreEl.classList.remove("hide");
  restartBtn.classList.remove("hide");
  scoreEl.textContent = `Your Score: ${score} / ${questions.length} 🎉`;
}

showQuestion();
