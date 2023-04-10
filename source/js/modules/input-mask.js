import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.ru';

const numberInputs = document.querySelectorAll('input[type="number"]');
const telInputs = document.querySelectorAll('input[type="tel"]');

function inputKeydownHandler(evt) {
    if (!isNumeric(evt.key)) {
        evt.preventDefault();
    }
}

function inputHandler(evt) {
    const input = evt.target;
    const value = input.value;
    const max = input.max;
    const inputEvent = new Event('input');

    if (max && Number(value) > max) {
        input.value = max;

        input.dispatchEvent(inputEvent);
    }
}

function inputChangeHandler(evt) {
    const input = evt.target;
    const value = input.value;
    const min = input.min;
    const inputEvent = new Event('input');

    if (min && Number(value) < min) {
        input.value = min;

        input.dispatchEvent(inputEvent);
    }
}

function isNumeric(key) {
    const suitableKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', 'Backspace', 'ArrowUp', 'ArrowDown', 'Tab'];

    return suitableKeys.includes(key);
}

function makePhoneMask(input) {
    const cleavePhone = new Cleave(`#${input.id}`, {
        phone: true,
        phoneRegionCode: 'ru',
        prefix: '+7',
        noImmediatePrefix: true,
    });
}

function inputMask() {
    for (let i = 0; i < numberInputs.length; i++) {
        numberInputs[i].addEventListener('keydown', (evt) => {
            inputKeydownHandler(evt);
        });

        numberInputs[i].addEventListener('input', (evt) => {
            inputHandler(evt);
        });

        numberInputs[i].addEventListener('change', (evt) => {
            inputChangeHandler(evt);
        });
    }

    for (let i = 0; i < telInputs.length; i++) {
        makePhoneMask(telInputs[i]);
    }
}

export default inputMask;