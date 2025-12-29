// select DOM Element

const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-button")
const questionText = document.getElementById("question-text")
const answerContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current-question"); 
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score"); 
const finalScoreSpan = document.getElementById("final-score"); 
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

 
// the array of questions 

const quizQuestions = [
    {
        question: "What is the capital of Timor-Leste?",
        answers: [
            {text: "Dili", correct: true },
            {text: "Abijan", correct: false},
            {text: "Kamplur", correct: false},
            {text: "Rabat", correct: false}
        ],
    },
    {
        question: "What is the chemical symbol for potassium",
        answers: [
            {text: "PO", correct: false },
            {text: "P", correct: false},
            {text: "K", correct: true},
            {text: "S", correct: false},
        ]
    }
]