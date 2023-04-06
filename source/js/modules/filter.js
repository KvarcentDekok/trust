const InputType = {
    Radio: 'radio',
    Text: 'text'
}

const filtersToCount = document.querySelectorAll('[data-filter]');
const priceFromInput = document.querySelector('#price-from');
const priceToInput = document.querySelector('#price-to');
const priceFilter = document.querySelector('#price-filter');
const checkedRadios = new Set();
const pricePostfix = document.querySelector('.js-price-postfix').textContent;

function onChangeFilter(filter) {
    const filterControl = document.querySelector(`#${filter.dataset.filter}`);
    const currentCount = filterControl.dataset.filtersCount ? Number(filterControl.dataset.filtersCount) : 0;

    if (filter.checked) {
        if (filter.type === InputType.Radio) {
            const filterName = filter.name;

            if (!checkedRadios.has(filterName)) {
                increaseCount(filterControl, currentCount);
                checkedRadios.add(filterName);
            }
        } else {
            increaseCount(filterControl, currentCount);
        }
    } else {
        decreaseCount(filterControl, currentCount);
    }
}

function increaseCount(filterControl, currentCount) {
    filterControl.dataset.filtersCount = String(currentCount + 1);
}

function decreaseCount(filterControl, currentCount) {
    filterControl.dataset.filtersCount = String(currentCount - 1);
}

function onInputPrice() {
    const priceFrom = getPrice(priceFromInput.value);
    const priceTo = getPrice(priceToInput.value);

    priceFilter.textContent = `${priceFrom} — ${priceTo} ${pricePostfix}`;
}

function getPrice(value) {
    return value ? value.replace('.', ',') : 0;
}

function filter() {
    /* Счётчик выбранных фильтров */
    for (let i = 0; i < filtersToCount.length; i++) {
        filtersToCount[i].addEventListener('change', () => {
            onChangeFilter(filtersToCount[i]);
        })
    }

    /* Отображение введённой цены */
    priceFromInput.addEventListener('input', () => {
        onInputPrice();
    });

    priceToInput.addEventListener('input', () => {
        onInputPrice();
    });
}

export default filter;