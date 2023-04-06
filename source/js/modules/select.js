import customSelect from 'custom-select';

function select() {
    customSelect('.form-control__select', {
        containerClass: 'form-control__select-container',
        openerClass: 'form-control__select-opener',
        panelClass: 'form-control__select-panel',
        isOpenClass: 'form-control__select-container--open'
    });
}

export default select;