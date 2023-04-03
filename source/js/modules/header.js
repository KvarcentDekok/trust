const CLASSNAME_EXPANDED = 'header--expanded'
const ToggleText = {
    Expanded: 'Свернуть меню',
    Minimized: 'Развернуть меню'
}

const headerElement = document.querySelector('.header');
const headerToggle = headerElement.querySelector('.header__toggle');
const headerToggleText = headerToggle.querySelector('.header__toggle-text');

function onToggleClick() {
    headerElement.classList.toggle(CLASSNAME_EXPANDED);
    document.body.classList.toggle('no-scroll');

    if (headerElement.classList.contains(CLASSNAME_EXPANDED)) {
        headerToggle.setAttribute('aria-expanded', 'true');
        headerToggleText.textContent = ToggleText.Expanded;
    } else {
        headerToggle.setAttribute('aria-expanded', 'false');
        headerToggleText.textContent = ToggleText.Minimized;
    }
}

function header() {
    headerToggle.addEventListener('click', () => {
        onToggleClick();
    });
}

export default header;