function stepper(selector, activeClassName) {
    const steps = document.querySelectorAll(selector);

    for (let i = 0; i < steps.length; i++) {
        setStepListeners(steps[i])
    }

    function setStepListeners(step) {
        const controls = step.querySelectorAll('[data-set-step]');

        for (let i = 0; i < controls.length; i++) {
            controls[i].addEventListener('click', (evt) => {
                setActiveStep(evt, controls[i]);
            })
        }
    }

    function setActiveStep(evt, control) {
        const targetStep = document.querySelector(`${selector}[data-index="${control.dataset.setStep}"]`);

        removeActiveClassName();
        targetStep.classList.add(activeClassName);
    }

    function removeActiveClassName() {
        for (let i = 0; i < steps.length; i++) {
            steps[i].classList.remove(activeClassName);
        }
    }
}

export default stepper;
