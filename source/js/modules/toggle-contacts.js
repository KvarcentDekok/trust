const toggleButton = document.querySelector('.contacts-toggle');
const map = document.querySelector('.map');
const contactsList = document.querySelector('.contacts');

function onButtonClick() {
    const listText = toggleButton.dataset.listText;
    const mapText = toggleButton.dataset.mapText;

    if (contactsList.classList.contains('contacts--hidden')) {
        toggleButton.textContent = mapText;
    } else {
        toggleButton.textContent = listText;
    }

    map.classList.toggle('map--hidden');
    contactsList.classList.toggle('contacts--hidden');
}

function toggleContacts() {
    toggleButton.addEventListener('click', () => {
        onButtonClick();
    });
}

export default toggleContacts;