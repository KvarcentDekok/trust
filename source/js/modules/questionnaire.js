const ERROR_MESSAGE = 'Произошла ошибка при отправке формы';

const questionnaireForm = document.querySelector('.questionnaire');
const steps = questionnaireForm.querySelectorAll('.questionnaire__step');
const resetButton = questionnaireForm.querySelector('[type="reset"]');
const continueButtons = questionnaireForm.querySelectorAll('.js-questionnaire-continue');


function handleStep(step) {
    const answerInputs = step.querySelectorAll('.questionnaire__input, .form-control__input');
    const buttonContinue = step.querySelector('.js-questionnaire-continue');
    const buttonBack = step.querySelector('.js-questionnaire-back');
    const currentStepIndex = step.dataset.index;

    for (let i = 0; i < answerInputs.length; i++) {
        if (answerInputs[i].type === 'tel') {
            answerInputs[i].addEventListener('input', () => {
                onAnswerInput(answerInputs[i], buttonContinue);
            });
        } else {
            answerInputs[i].addEventListener('change', () => {
                onAnswerChange(answerInputs[i], buttonContinue, currentStepIndex);
            });
        }
    }

    if (buttonBack) {
        buttonBack.addEventListener('click', () => {
            onBackClick(answerInputs);
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

function onAnswerInput(answerInput, buttonContinue) {
    buttonContinue.disabled = !answerInput.checkValidity();
}

function onBackClick(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
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

async function onFormSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(questionnaireForm);
    const csrfInput = questionnaireForm.querySelector('.csrfToken');

    const response = await fetch(questionnaireForm.action, {
        method: 'POST',
        headers: {
            'X-CSRF-Token': csrfInput?.value
        },
        body: formData
    });

    if (!response.ok) {
        toast({
            text: ERROR_MESSAGE
        });
    }
}

function questionnaire() {
    for (let i = 0; i < steps.length; i++) {
        handleStep(steps[i]);
    }

    resetButton.addEventListener('click', () => {
        resetForm();
    });

    questionnaireForm.addEventListener('submit', (evt) => {
        onFormSubmit(evt);
    });
}

export default questionnaire;