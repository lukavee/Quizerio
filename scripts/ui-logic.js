document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.querySelector('.question');
        const answerButtons = document.querySelectorAll('.quiz-wrapper button');

        questionElement.textContent = currentQuestion.question;

        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
        });
    }

    function checkAnswer(clickedButton) {
        const selectedAnswerIndex = parseInt(clickedButton.getAttribute('data-answer-index'), 10);
        const answerMsg = document.querySelector('.answer');

        if (selectedAnswerIndex === questions[currentQuestionIndex].correctIndex) {
            const scoreElement = document.querySelector('.score');
            answerMsg.textContent = 'Correct answer ✅';
            score++;
            scoreElement.innerHTML = `${score}`;
            playCorrectSound();
        } else {
            answerMsg.textContent = 'Wrong answer ❌';
            playFailSound();
        }

        setTimeout(function () {
            answerMsg.textContent = '';
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                const endGameSound = document.querySelector('.end-game');
                const quizWrapper = document.querySelector('.quiz-wrapper');
                const scoreCounter = document.querySelector('.score-counter');
                quizWrapper.classList.add('no-show');
                scoreCounter.classList.add('no-show');
                endGameSound.play();
                const completedSection = document.querySelector('.completed');
                const scoreCompleted = document.querySelector('.score-completed');
                completedSection.classList.remove('no-show');
                scoreCompleted.innerHTML = `${score}`;
            }
        }, 2000);
    }

    function playCorrectSound() {
        const correctSound = document.querySelector('.correct-sound');
        correctSound.play();
    }

    function playFailSound() {
        const failSound = document.querySelector('.fail-sound');
        failSound.play();
    }

    loadQuestion();

    const answerButtons = document.querySelectorAll('.quiz-wrapper button');
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            checkAnswer(this);
        });
    });
});

