let currentQuestionIndex = 0;

loadQuestion();

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    //////////////////// Update Question ///////////////////////////////
    document.querySelector('.js-question').textContent = currentQuestion.question;
    

    /////////////// Update answer buttons ///////////////////// 
    const answerButtons = document.querySelectorAll('.quiz-wrapper button');
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
}

function checkAnswer(clickedButton) {
    const selectedAnswerIndex = parseInt(clickedButton.dataset.answerIndex, 10);
    const answerMsg = document.querySelector('.js-answer');

    if (selectedAnswerIndex === questions[currentQuestionIndex].correctIndex) {
        answerMsg.textContent = 'Correct answer';
    } else {
        answerMsg.textContent = 'Wrong answer';
    }

   
    setTimeout(function () {
        ////////////Reset answer message///////////
        answerMsg.textContent = '';

        ////////Move to the next question or end the quiz///////////
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            alert('Quiz completed!');
        }
    }, 1000); 
}