const DEBOUNCE_INTERVAL = 500;

function debounce(cb) {
    let lastTimeout = null;

    return (...args) => {
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }

        lastTimeout = window.setTimeout(() => {
            cb(...args);
        }, DEBOUNCE_INTERVAL);
    };
}

export default debounce;