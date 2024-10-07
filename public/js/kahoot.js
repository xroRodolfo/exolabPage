let currentQuestion = 1;
let totalQuestions = 5;
let timeLeft = 30; // 30 segundos por pregunta
let timerElement = document.getElementById('time-remaining');
let score = 0;

// Respuestas correctas
const correctAnswers = {
    question1: "PSR B1620-26 b",
    question2: "Two",
    question3: "Kepler-11 f",
    question4: "Kepler",
    question5: "Kepler-452b"
};

// Empezar el temporizador al cargar la página
function startTimer() {
    let countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            goToNextQuestion();
        }
    }, 1000); // Cada segundo
}

// Mover a la siguiente pregunta
function goToNextQuestion() {
    checkAnswer(); // Verificar respuesta actual

    // Esconder la pregunta actual
    document.getElementById('question' + currentQuestion).classList.add('d-none');

    currentQuestion++; // Pasar a la siguiente pregunta

    if (currentQuestion <= totalQuestions) {
        timeLeft = 30; // Reiniciar temporizador
        timerElement.textContent = timeLeft;

        // Mostrar la siguiente pregunta
        document.getElementById('question' + currentQuestion).classList.remove('d-none');
        startTimer(); // Reiniciar temporizador
    } else {
        // Fin del quiz
        showFinalResult(); // Mostrar el puntaje y la medalla
    }
}

// Verificar respuesta
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="question' + currentQuestion + '"]:checked');
    if (selectedOption) {
        let userAnswer = selectedOption.value;
        if (userAnswer === correctAnswers['question' + currentQuestion]) {
            score++; // Aumentar el puntaje si la respuesta es correcta
        }
    }
}

// Mostrar el puntaje final y las medallas
function showFinalResult() {
    document.getElementById('quiz-form').innerHTML = `<h3 class="text-center">You scored ${score} out of ${totalQuestions}!</h3>`;
    
    // Mostrar la medalla en función del puntaje
    if (score === 5) {
        document.getElementById('gold-medal').classList.remove('d-none');
    } else if (score === 4) {
        document.getElementById('silver-medal').classList.remove('d-none');
    } else if (score === 3) {
        document.getElementById('bronze-medal').classList.remove('d-none');
    }
    
    // Mostrar el botón de "Back to Home"
    document.getElementById('back-to-home-btn').classList.remove('d-none');
}

// Manejar el envío del formulario
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    goToNextQuestion(); // Ir a la siguiente pregunta cuando se envíe el formulario
});

  