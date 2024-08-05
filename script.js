// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example click event for the Learn More button
document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Math Quiz Game
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const nextQuestionButton = document.getElementById('next-question');

let currentQuestion = {};
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion = {
        question: `What is ${num1} + ${num2}?`,
        answer: num1 + num2
    };
    questionElement.textContent = currentQuestion.question;
    answerInput.value = '';
    resultElement.textContent = '';
}

submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value, 10);
    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = `Wrong! The correct answer was ${currentQuestion.answer}.`;
    }
});

nextQuestionButton.addEventListener('click', generateQuestion);

// Initialize the first question
generateQuestion();

console.log("WeLearn ZA web app script loaded.");
