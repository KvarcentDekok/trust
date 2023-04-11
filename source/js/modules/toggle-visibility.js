const Call = {
    Shown: 'shown',
    Hidden: 'hidden'
}

const Behavior = {
    Hide: 'hide'
}

const showControls = document.querySelectorAll('[data-call="show"]');

function onControlClick(evt) {
    const control = evt.target;
    const target = document.querySelector(`#${control.getAttribute('aria-controls')}`);

    target.dataset.call = Call.Shown;

    if (control.dataset.behavior === Behavior.Hide) {
        control.dataset.call = Call.Hidden;
    }
}

function toggleVisibility() {
    for (let i = 0; i < showControls.length; i++) {
        showControls[i].addEventListener('click', (evt) => {
            onControlClick(evt);
        });
    }
}

export default toggleVisibility;