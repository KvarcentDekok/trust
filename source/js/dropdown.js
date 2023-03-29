import debounce from "./debounce";

const SHOW_DROPDOWN_CLASSNAME = 'dropdown--show';
const Action = {
    Click: 'click',
    Hover: 'hover',
    Input: 'input'
};

const dropdownControls = document.querySelectorAll('[data-call="dropdown"]');

let activeDropdown;
let focusableElement;

function controlClickHandler(evt, control) {
    const dropdownTargetId = control.getAttribute('aria-controls');

    if (activeDropdown && activeDropdown.id !== dropdownTargetId) {
        closeDropdownClick();
    }

    if (dropdownTargetId) {
        const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

        if (dropdownTarget.classList.contains(SHOW_DROPDOWN_CLASSNAME)) {
            closeDropdownClick();
        } else {
            showDropdownClick(dropdownTarget);
        }
    }

    evt.preventDefault();
}

function controlMouseOverHandler(evt, control) {
    const dropdownTargetId = control.getAttribute('aria-controls');

    if (dropdownTargetId) {
        const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

        showDropdownHover(dropdownTarget);
    }
}

function controlMouseOutHandler(evt, control) {
    const dropdownTargetId = control.getAttribute('aria-controls');

    if (dropdownTargetId) {
        const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

        let relatedTarget = evt.relatedTarget;

        while (relatedTarget !== document.body) {
            if (relatedTarget === dropdownTarget || !relatedTarget) {
                return;
            }

            relatedTarget = relatedTarget.parentNode;
        }

        closeDropdownHover(dropdownTarget);
    }
}

function targetMouseOutHandler(evt) {
    let relatedTarget = evt.relatedTarget;

    const dropdownTarget = evt.target;
    const dropdownControl = document.querySelector(`[aria-controls="${dropdownTarget.id}"]`);

    while (relatedTarget !== document.body) {
        if (relatedTarget === dropdownControl || relatedTarget === dropdownTarget || !relatedTarget) {
            return;
        }

        relatedTarget = relatedTarget.parentNode;
    }

    closeDropdownHover(dropdownTarget);
}

function targetFocusOutHandler(evt) {
    let relatedTarget = evt.relatedTarget;
    let dropdownTarget = evt.target;

    while (!dropdownTarget.classList.contains('dropdown')) {
        dropdownTarget = dropdownTarget.parentNode;
    }

    const dropdownControl = document.querySelector(`[aria-controls="${dropdownTarget.id}"]`);

    while (relatedTarget !== document.body) {
        if (relatedTarget === dropdownControl || relatedTarget === dropdownTarget || !relatedTarget) {
            return;
        }

        relatedTarget = relatedTarget.parentNode;
    }

    closeDropdownHover(dropdownTarget);
}

function showDropdownClick(dropdownTarget) {
    dropdownTarget.classList.add(SHOW_DROPDOWN_CLASSNAME);

    activeDropdown = dropdownTarget;

    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', escPressHandler);
}

function closeDropdownClick() {
    if (activeDropdown) {
        activeDropdown.classList.remove(SHOW_DROPDOWN_CLASSNAME);

        activeDropdown = undefined;

        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keydown', escPressHandler);
    }
}

function showDropdownHover(dropdownTarget) {
    dropdownTarget.classList.add(SHOW_DROPDOWN_CLASSNAME);
    focusableElement = dropdownTarget.querySelector('a, button, input, select, textarea');

    dropdownTarget.addEventListener('mouseout', targetMouseOutHandler);
    dropdownTarget.addEventListener('focusout', targetFocusOutHandler);
    document.addEventListener('keydown', downPressHandler);
}

function closeDropdownHover(dropdownTarget) {
    dropdownTarget.classList.remove(SHOW_DROPDOWN_CLASSNAME);

    dropdownTarget.removeEventListener('mouseout', targetMouseOutHandler);
    dropdownTarget.removeEventListener('focusout', targetFocusOutHandler);
    document.removeEventListener('keydown', downPressHandler);
}

function documentClickHandler(evt) {
    let target = evt.target;

    while (target !== document.body) {
        if (target === activeDropdown || target.getAttribute('aria-controls') === activeDropdown.id) {
            return;
        }

        target = target.parentNode;
    }

    closeDropdownClick();
}

function escPressHandler(evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();

        closeDropdownClick();
    }
}

function downPressHandler(evt) {
    if (evt.key === 'ArrowDown') {
        evt.preventDefault();

        focusableElement.focus();
    }
}

function controlInputHandler(evt) {
    const target = evt.target;

    if (target.value) {
        const dropdownTargetId = target.getAttribute('aria-controls');

        if (activeDropdown && activeDropdown.id !== dropdownTargetId) {
            closeDropdownClick();
        }

        if (dropdownTargetId) {
            const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

            debounce(showDropdownClick)(dropdownTarget);
        }
    } else {
        debounce(closeDropdownClick)();
    }
}

function dropdown() {
    for (let i = 0; i < dropdownControls.length; i++) {
        if (dropdownControls[i].dataset.on === Action.Click) {
            dropdownControls[i].addEventListener('click', (evt) => {
                controlClickHandler(evt, dropdownControls[i]);
            });
        }

        if (dropdownControls[i].dataset.on === Action.Hover) {
            dropdownControls[i].addEventListener('mouseover', (evt) => {
                controlMouseOverHandler(evt, dropdownControls[i]);
            });

            dropdownControls[i].addEventListener('mouseout', (evt) => {
                controlMouseOutHandler(evt, dropdownControls[i]);
            });

            dropdownControls[i].addEventListener('focus', (evt) => {
                controlMouseOverHandler(evt, dropdownControls[i]);
            });

            dropdownControls[i].addEventListener('blur', (evt) => {
                controlMouseOutHandler(evt, dropdownControls[i]);
            });
        }

        if (dropdownControls[i].dataset.on === Action.Input) {
            dropdownControls[i].addEventListener('input', (evt) => {
                controlInputHandler(evt);
            });
        }
    }
}

export default dropdown;