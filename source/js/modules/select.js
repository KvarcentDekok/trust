import customSelect from 'custom-select';

const forms = document.querySelectorAll('form');

function onFormReset(form) {
    const selects = form.querySelectorAll('.form-control__select');

    for (let i = 0; i < selects.length; i++) {
        selects[i].customSelect.value = "";
    }
}

function select() {
    customSelect('.form-control__select', {
        containerClass: 'form-control__select-container',
        openerClass: 'form-control__select-opener',
        panelClass: 'form-control__select-panel',
        hasFocusClass: 'form-control__select-option--focus',
        isOpenClass: 'form-control__select-container--open'
    });

    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('reset', () => {
            onFormReset(forms[i]);
        });
    }
}

export default select;