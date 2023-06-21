const phoneButtons = document.querySelectorAll('[data-call="phone-number"]');

function onButtonClick(evt) {
    const phoneNumberLink = document.createElement('a');
    const phone = evt.target.dataset.phone;

    phoneNumberLink.href = `tel:${phone
        .replaceAll(' ', '')
        .replaceAll('(', '')
        .replaceAll(')', '')}`;
    phoneNumberLink.classList.add('button', 'apartment__button', 'button--fill');
    phoneNumberLink.textContent = phone;
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