const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which programming language is used for web development?",
        answers: ["Python", "Java", "JavaScript", "C++"],
        correct: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 30;
    nextButton.style.display = "none";
    loadQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time's up! Quiz Over.");
            showScore();
        }
    }, 1000);
}

function loadQuestion() {
    clearOptions();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function checkAnswer(answer, correct) {
    if (answer === correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timer);
        showScore();
    }
}

function showScore() {
    questionElement.textContent = `Quiz Completed!`;
    answerButtons.innerHTML = "";
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
    nextButton.textContent = "Restart Quiz";
    nextButton.style.display = "block";
}

function clearOptions() {
    answerButtons.innerHTML = "";
}

nextButton.addEventListener("click", () => {
    startQuiz();
});


startQuiz();

        