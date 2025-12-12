document.addEventListener('DOMContentLoaded', () => {
    const scenarioContainer = document.getElementById('scenario-container');
    if (!scenarioContainer) return; // No ejecutar si no estamos en la página correcta

    const scenarioTextEl = document.getElementById('scenario-text');
    const choicesContainerEl = document.getElementById('choices-container');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const feedbackTextEl = document.getElementById('feedback-text');
    const nextScenarioBtn = document.getElementById('next-scenario-btn');

    const scenarios = [
        {
            situation: "Recibes un mensaje privado de un desconocido con un insulto sobre tu apariencia. ¿Qué haces?",
            choices: [
                { text: "Responderle con otro insulto.", correct: false, feedback: "Incorrecto. Responder con agresividad puede empeorar la situación y darles la atención que buscan." },
                { text: "Ignorar el mensaje, bloquear al usuario y no volver a pensar en ello.", correct: true, feedback: "¡Correcto! No interactuar y bloquear es la mejor primera línea de defensa. No le das poder al acosador." },
                { text: "Borrar el mensaje y esperar que no vuelva a pasar.", correct: false, feedback: "Casi. Borrarlo está bien, pero es crucial bloquear al usuario para evitar que te contacte de nuevo." }
            ]
        },
        {
            situation: "Un compañero de clase crea un meme con tu foto y lo comparte en un grupo de chat. Todos se están riendo. ¿Qué haces?",
            choices: [
                { text: "Hacer una captura de pantalla, guardar la evidencia y contárselo a un adulto de confianza (padres, profesor).", correct: true, feedback: "¡Excelente! Guardar la evidencia es fundamental y buscar ayuda de un adulto es el paso más importante." },
                { text: "Salir del grupo y tratar de olvidarlo.", correct: false, feedback: "Incorrecto. Salir del grupo puede aislarte más y no detiene el problema. El contenido ya fue compartido." },
                { text: "Pedirle directamente en el grupo que borre la foto.", correct: false, feedback: "Podría funcionar, pero también podría provocar más burlas. Es mejor manejarlo de forma privada y con ayuda." }
            ]
        },
        {
            situation: "Ves que un amigo está siendo acosado en los comentarios de su última foto. ¿Qué haces como testigo?",
            choices: [
                { text: "Unirte a las burlas para no convertirte en el próximo objetivo.", correct: false, feedback: "Incorrecto. Participar en el acoso, aunque sea por miedo, te convierte en parte del problema." },
                { text: "Ignorarlo. No es tu problema.", correct: false, feedback: "Incorrecto. El silencio de los testigos da más poder a los acosadores. Tu apoyo puede marcar una gran diferencia." },
                { text: "Enviar un mensaje privado de apoyo a tu amigo, reportar los comentarios y animarle a que hable con un adulto.", correct: true, feedback: "¡La mejor opción! Apoyar a la víctima, usar las herramientas de reporte y fomentar la búsqueda de ayuda es la forma más efectiva de actuar como testigo." }
            ]
        }
    ];

    let currentScenarioIndex = 0;
    let score = 0;

    function loadScenario(index) {
        const scenario = scenarios[index];
        scenarioTextEl.textContent = scenario.situation;
        choicesContainerEl.innerHTML = '';
        feedbackContainerEl.style.display = 'none';
        nextScenarioBtn.style.display = 'none';

        scenario.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.className = 'choice-btn';
            button.onclick = () => handleChoice(choice);
            choicesContainerEl.appendChild(button);
        });
    }

    function handleChoice(choice) {
        // Deshabilitar botones
        const buttons = choicesContainerEl.querySelectorAll('.choice-btn');
        buttons.forEach(button => button.disabled = true);

        feedbackTextEl.textContent = choice.feedback;
        if (choice.correct) {
            feedbackContainerEl.className = 'correct';
            score++;
        } else {
            feedbackContainerEl.className = 'incorrect';
        }
        feedbackContainerEl.style.display = 'block';
        
        if (currentScenarioIndex < scenarios.length - 1) {
            nextScenarioBtn.textContent = "Siguiente Escenario";
            nextScenarioBtn.style.display = 'block';
        } else {
            showFinalScore();
        }
    }

    function showFinalScore() {
        scenarioTextEl.textContent = `¡Simulación completada! Tu puntuación: ${score} de ${scenarios.length}.`;
        choicesContainerEl.innerHTML = `<p>Has aprendido sobre cómo reaccionar ante el ciberacoso. Recuerda: guarda la evidencia, bloquea, reporta y, lo más importante, habla con alguien.</p>`;
        feedbackContainerEl.style.display = 'none';
        nextScenarioBtn.textContent = "Volver a Empezar";
        nextScenarioBtn.style.display = 'block';
        currentScenarioIndex = -1; // Para que al reiniciar empiece en 0
    }

    nextScenarioBtn.addEventListener('click', () => {
        currentScenarioIndex++;
        loadScenario(currentScenarioIndex);
    });

    // Cargar el primer escenario
    loadScenario(currentScenarioIndex);
});
