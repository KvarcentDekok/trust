const steps = document.querySelectorAll('.questionnaire__step');

function validateStep(step) {
    const answerInputs = step.querySelectorAll('.questionnaire__input');
    const button = step.querySelector('.questionnaire__button');

    for (let i = 0; i < answerInputs.length; i++) {
        answerInputs[i].addEventListener('change', () => {
            onAnswerChange(answerInputs[i], button);
        });
    }
}

function onAnswerChange(answerInput, button) {
    if (answerInput.checked) {
        button.disabled = false;
    }
}

function questionnaire() {
    for (let i = 0; i < steps.length; i++) {
        validateStep(steps[i]);
    }
}

export default questionnaire;