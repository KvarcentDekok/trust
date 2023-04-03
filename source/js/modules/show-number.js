const phoneButtons = document.querySelectorAll('[data-call="phone-number"]');

function onButtonClick(evt) {
    const phoneNumberLink = document.createElement('a');

    phoneNumberLink.href = 'tel:+79999999999';
    phoneNumberLink.classList.add('apartment__phone-number');
    phoneNumberLink.textContent = '+7 999 999 99 99';
    evt.target.replaceWith(phoneNumberLink);
}

function showNumber() {
    for (let i = 0; i < phoneButtons.length; i++) {
        phoneButtons[i].addEventListener('click', (evt) => {
            onButtonClick(evt);
        });
    }
}

export default showNumber;