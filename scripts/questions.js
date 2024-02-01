
const questions = [
    {
        question: 'What is the capital of Belgrade?',
        answers: ['Nis', 'Belgrade', 'Novi Sad', 'Blace'],
        correctIndex: 1
    },
    {
        question: 'What is the HTML?',
        answers: ['Code editor', 'Programming language', 'Markup language', 'Web design tool'],
        correctIndex: 2
    }  
];

let currentQuestionIndex = 0;

loadQuestion();

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update Question
    document.querySelector('.js-question').textContent = currentQuestion.question;

    // Update answer buttons 
    const answerButtons = document.querySelectorAll('.quiz-wrapper button');
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
}

function checkAnswer(clickedButton) {
    const selectedAnswerIndex = parseInt(clickedButton.dataset.answerIndex, 10);

    if(selectedAnswerIndex === questions[currentQuestionIndex].correctIndex) {
        alert('Correct');
    } else {
        alert('Incorrect');
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
    }
}




