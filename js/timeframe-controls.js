export function setTimeTrackingButtonHandlers(onModeChange) {
    const buttons = document.querySelectorAll(".time-tracking-options-menu button");
    for (const button of buttons) {
        button.addEventListener('click', function() {
            onModeChange(button.dataset.mode);
        })
    }
}

export function updateTimeframeSelection(mode) {
    const buttons = document.querySelectorAll(".time-tracking-options-menu button");
    for (const button of buttons) {
        if (button.dataset.mode === mode) {
            addButtonSelection(button);
        } else {
            removeButtonSelection(button);
        }
    } 
}

function addButtonSelection(button) {
    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');
}

function removeButtonSelection(button) {
    button.classList.remove('is-selected');
    button.setAttribute('aria-pressed', 'false');
}