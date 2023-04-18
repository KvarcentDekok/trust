const questionnaireForm = document.querySelector('.questionnaire');
const steps = questionnaireForm.querySelectorAll('.questionnaire__step');
const resetButton = questionnaireForm.querySelector('[type="reset"]');
const continueButtons = questionnaireForm.querySelectorAll('.js-questionnaire-continue');

function handleStep(step) {
    const answerInputs = step.querySelectorAll('.questionnaire__input');
    const buttonContinue = step.querySelector('.js-questionnaire-continue');
    const currentStepIndex = step.dataset.index;

    for (let i = 0; i < answerInputs.length; i++) {
        answerInputs[i].addEventListener('change', () => {
            onAnswerChange(answerInputs[i], buttonContinue, currentStepIndex);
        });
    }
}

function onAnswerChange(answerInput, buttonContinue, currentStepIndex) {
    const selectedStepIndex = answerInput.dataset.choice;
    const selectedStep = document.querySelector(`[data-index="${selectedStepIndex}"]`);
    const buttonBack = selectedStep.querySelector('.questionnaire__back');

    if (answerInput.checked) {
        buttonContinue.disabled = false;
        buttonContinue.dataset.setStep = selectedStepIndex;
        buttonBack.dataset.setStep = currentStepIndex;
    }
}

function resetForm() {
    questionnaireForm.reset();

    for (let i = 0; i < continueButtons.length; i++) {
        if (continueButtons[i].type !== 'submit') {
            continueButtons[i].disabled = true;
        }
    }
}

function questionnaire() {
    for (let i = 0; i < steps.length; i++) {
        handleStep(steps[i]);
    }

    resetButton.addEventListener('click', () => {
        resetForm();
    });
}

export default questionnaire;