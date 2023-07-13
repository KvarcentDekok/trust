const textareas = document.querySelectorAll('textarea');

function onTextareaInput() {
    this.style.height = 0;
    this.style.height = `${this.scrollHeight}px`;
}

function resizeTextarea() {
    for (let i = 0; i < textareas.length; i++) {
        const height =
            parseInt(window.getComputedStyle(textareas[i]).getPropertyValue('font-size')) *
            Number(textareas[i].rows) +
            parseInt(window.getComputedStyle(textareas[i]).getPropertyValue('padding-top')) +
            parseInt(window.getComputedStyle(textareas[i]).getPropertyValue('padding-bottom'));

        textareas[i].setAttribute('style', `height: ${height}px; overflow-y: hidden;`);
        textareas[i].addEventListener('input', onTextareaInput, false);
    }
}

export default resizeTextarea;
