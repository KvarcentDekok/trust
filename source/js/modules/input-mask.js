import Cleave from 'cleave.js';

const numberInputs = document.querySelectorAll('input[type="number"]');

function inputHandler(evt) {
    const input = evt.target;
    const value = input.value;
    //const regexp = /\d*,?\d*/;

    console.log(input.value);

    if (!test(value)) {
        input.value = value.slice(1, -2);
    }
}

function test(string) {
    if (!string) {
        return false;
    }

    string = string.split(",");

    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i]) || !string[i]) {
            return false;
        }
    }

    return true;
}

function inputMask() {
    for (let i = 0; i < numberInputs.length; i++) {
        numberInputs[i].addEventListener('input', (evt) => {
            inputHandler(evt);
        });
    }

    /*const cleavePriceFrom = new Cleave('#price-from', {
        numeral: true
    });

    const cleavePriceTo = new Cleave('#price-to', {
        numeral: true
    });*/
}

export default inputMask;