const Call = {
    Shown: 'shown',
    Hidden: 'hidden'
}

const Behavior = {
    Hide: 'hide'
}

const showControls = document.querySelectorAll('[data-call="show"]');
const tabControls = document.querySelectorAll('[data-call="tab"]');

function onShowControlClick(evt) {
    const control = evt.target;
    const target = document.querySelector(`#${control.getAttribute('aria-controls')}`);

    target.dataset.call = Call.Shown;

    if (control.dataset.behavior === Behavior.Hide) {
        control.dataset.call = Call.Hidden;
    }
}

function onTabControlClick(evt) {
    const control = evt.target;
    const activeClass = control.dataset.activeClass;
    const activeControl = document.querySelector(`[data-name="${control.dataset.name}"].${activeClass}`);
    const target = document.querySelector(`#${control.getAttribute('aria-controls')}`);
    const targetSiblings = document.querySelectorAll(`[data-name="${target.dataset.name}"]:not(#${target.id})`);

    activeControl.classList.remove(activeClass);

    for (let i = 0; i < targetSiblings.length; i++) {
        targetSiblings[i].dataset.call = Call.Hidden;
    }

    control.classList.add(activeClass);
    target.dataset.call = Call.Shown;
}

function toggleVisibility() {
    for (let i = 0; i < showControls.length; i++) {
        showControls[i].addEventListener('click', (evt) => {
            onShowControlClick(evt);
        });
    }

    for (let i = 0; i < tabControls.length; i++) {
        tabControls[i].addEventListener('click', (evt) => {
            onTabControlClick(evt);
        });
    }
}

export default toggleVisibility;