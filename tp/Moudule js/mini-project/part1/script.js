// Liste des questions
const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Marseille", "Lyon", "Paris", "Toulouse"],
    correctAnswer: 2
  },
  {
    question: "Combien de continents y a-t-il ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    question: "Qui a écrit 'Le Petit Prince' ?",
    options: ["Victor Hugo", "Antoine de Saint-Exupéry", "Molière", "Zola"],
    correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 30;

const quizForm = document.getElementById("quiz-form");
const scoreSpan = document.getElementById("score");
const totalSpan = document.getElementById("total");
const timerSpan = document.getElementById("time");
const submitBtn = document.getElementById("submit-btn");

totalSpan.textContent = questions.length;

function loadQuestion(index) {
  quizForm.innerHTML = ""; // Réinitialise
  const q = questions[index];

  const block = document.createElement("div");
  block.className = "question-block";

  const questionEl = document.createElement("div");
  questionEl.className = "question";
  questionEl.textContent = q.question;

  const optionsEl = document.createElement("div");
  optionsEl.className = "options";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "question";
    input.value = i;
    label.appendChild(input);
    label.append(" " + opt);
    optionsEl.appendChild(label);
  });

  block.appendChild(questionEl);
  block.appendChild(optionsEl);
  quizForm.appendChild(block);
}

function startTimer() {
  let timeLeft = timePerQuestion;
  timerSpan.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleNextQuestion(); // Passe automatiquement à la suivante
    }
  }, 1000);
}

function handleNextQuestion() {
  const selected = document.querySelector('input[name="question"]:checked');
  if (selected && parseInt(selected.value) === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
    startTimer();
  } else {
    showScore();
  }
}

function showScore() {
  clearInterval(timer);
  scoreSpan.textContent = score;

  // Scroll vers le haut
  window.scrollTo({ top: 0, behavior: "smooth" });

  quizForm.innerHTML = "<p>Merci pour votre participation !</p>";
  submitBtn.style.display = "none";
  document.getElementById("timer").style.display = "none";
}

// Initialisation
loadQuestion(currentQuestionIndex);
startTimer();

submitBtn.addEventListener("click", () => {
  clearInterval(timer);
  handleNextQuestion();
});
