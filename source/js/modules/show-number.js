const phoneButtons = document.querySelectorAll('[data-call="phone-number"]');

function onButtonClick(evt) {
    const phoneNumberLink = document.createElement('a');

    phoneNumberLink.href = 'tel:+79675648981';
    phoneNumberLink.classList.add('button', 'apartment__button', 'button--fill');
    phoneNumberLink.textContent = 'Мария +7 (967) 564 89 81';
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