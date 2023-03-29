import Cleave from 'cleave.js';

function inputMask() {
    const cleavePriceFrom = new Cleave('#price-from', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        delimiter: ""
    });

    const cleavePriceTo = new Cleave('#price-to', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        delimiter: ""
    });
}

export default inputMask;