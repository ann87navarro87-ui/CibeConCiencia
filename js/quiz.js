document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const startScreen = document.getElementById('quiz-start-screen');
    const questionScreen = document.getElementById('quiz-question-screen');
    const endScreen = document.getElementById('quiz-end-screen');

    const startBtn = document.getElementById('start-quiz-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');

    const questionTextEl = document.getElementById('question-text');
    const questionCounterEl = document.getElementById('question-counter');
    const answerButtonsEl = document.getElementById('answer-buttons');
    
    const scoreTextEl = document.getElementById('score-text');
    const scoreMessageEl = document.getElementById('score-message');

    const questions = [
        {
            question: "¿Cuál de las siguientes acciones se considera ciberacoso?",
            answers: [
                { text: "Dar 'like' a una foto", correct: false },
                { text: "Dejar un comentario positivo", correct: false },
                { text: "Difundir un rumor falso sobre alguien en línea", correct: true },
                { text: "Enviar un emoji amigable", correct: false }
            ]
        },
        {
            question: "Si eres víctima de ciberacoso, ¿cuál es el primer paso más importante?",
            answers: [
                { text: "Borrar tu perfil y desaparecer de internet", correct: false },
                { text: "Hablar con un adulto de confianza (padres, profesor)", correct: true },
                { text: "Vengarte del acosador", correct: false },
                { text: "Ignorarlo y esperar que pare solo", correct: false }
            ]
        },
        {
            question: "¿Qué significa 'Doxing'?",
            answers: [
                { text: "Enviar muchos mensajes a una persona", correct: false },
                { text: "Crear un perfil falso para engañar a alguien", correct: false },
                { text: "Excluir a alguien de un grupo en línea", correct: false },
                { text: "Publicar información privada de alguien sin su permiso", correct: true }
            ]
        },
        {
            question: "Como testigo de ciberacoso, ¿qué es lo MEJOR que puedes hacer?",
            answers: [
                { text: "Unirte a las burlas", correct: false },
                { text: "Reportar el contenido y apoyar a la víctima en privado", correct: true },
                { text: "Confrontar al acosador en público", correct: false },
                { text: "No hacer nada", correct: false }
            ]
        },
        {
            question: "Guardar capturas de pantalla de los mensajes de acoso es importante para...",
            answers: [
                { text: "Tener un recuerdo de lo que pasó", correct: false },
                { text: "Mostrarle a tus amigos", correct: false },
                { text: "Tener evidencia para reportar el acoso", correct: true },
                { text: "Publicarlas para exponer al acosador", correct: false }
            ]
        }
    ];

    let currentQuestionIndex;
    let score;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startScreen.style.display = 'none';
        endScreen.style.display = 'none';
        questionScreen.style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const question = questions[currentQuestionIndex];
        questionCounterEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
        questionTextEl.textContent = question.question;

        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn'); // Re-using btn style for consistency
            button.dataset.correct = answer.correct;
            button.addEventListener('click', selectAnswer);
            answerButtonsEl.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtonsEl.firstChild) {
            answerButtonsEl.removeChild(answerButtonsEl.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        if (isCorrect) {
            score++;
        }

        Array.from(answerButtonsEl.children).forEach(button => {
            button.disabled = true; // Disable all buttons after selection
            if (button.dataset.correct === 'true') {
                button.style.backgroundColor = 'var(--success-color)'; // Highlight correct answer
            }
        });

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }, 1500); // Wait 1.5 seconds before next question
    }



    function endQuiz() {
        questionScreen.style.display = 'none';
        endScreen.style.display = 'block';

        scoreTextEl.textContent = `Tu puntuación: ${score} de ${questions.length}`;

        let message = '';
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) {
            message = "¡Excelente! Eres un verdadero experto en seguridad digital y un gran aliado contra el ciberacoso.";
        } else if (percentage >= 75) {
            message = "¡Muy bien! Tienes un gran conocimiento sobre cómo actuar. Sigue así.";
        } else if (percentage >= 50) {
            message = "No está mal, pero hay áreas donde puedes mejorar. Te recomendamos repasar las secciones de la web.";
        } else {
            message = "Parece que hay varios conceptos que no tienes claros. ¡No te preocupes! Explora la web para aprender más y vuelve a intentarlo.";
        }
        scoreMessageEl.textContent = message;
    }

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);
});
