const questionnaireForm = document.querySelector('.questionnaire');
const steps = questionnaireForm.querySelectorAll('.questionnaire__step');
const resetButton = questionnaireForm.querySelector('[type="reset"]');
const continueButtons = questionnaireForm.querySelectorAll('.js-questionnaire-continue');

function validateStep(step) {
    const answerInputs = step.querySelectorAll('.questionnaire__input');
    const button = step.querySelector('.js-questionnaire-continue');

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

function resetForm() {
    questionnaireForm.reset();

    for (let i = 0; i < continueButtons.length; i++) {
        continueButtons[i].disabled = true;
    }
}

function questionnaire() {
    for (let i = 0; i < steps.length; i++) {
        validateStep(steps[i]);
    }

    resetButton.addEventListener('click', () => {
        resetForm();
    });
}

export default questionnaire;