const card_settings = {
    'daily': {
        description: 'Yesterday'
    },
    'weekly': {
        description: 'Last Week'
    },
    'monthly': {
        description: 'Last Month'
    }
}

let mode = 'daily';
let activities = [];

async function init() {
    try {
        activities = await loadActivities();
        setMode(mode);
        setTimeTrackingButtonHandlers();
    } catch(error) {
        console.error("Failed to read the file:", error);
    }
}

async function loadActivities() {
    const response = await fetch('data.json');

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const activities = await response.json();
    return activities;
}

function setTimeTrackingButtonHandlers() {
    const buttons = document.querySelectorAll(".time-tracking-options-menu button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', function() {
            setMode(button.dataset.mode);
        })
    }
}

function onButtonModeSelection(mode) {
    const buttons = document.querySelectorAll(".time-tracking-options-menu button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button.dataset.mode === mode) {
            addButtonSelection(button);
        } else {
            removeButtonSelection(button);
        }
    } 
}

function setMode(updated) {
    mode = updated;
    onButtonModeSelection(updated);
    setActivityCards(activities, mode);
}

function addButtonSelection(button) {
    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');
}

function removeButtonSelection(button) {
    button.classList.remove('is-selected');
    button.setAttribute('aria-pressed', 'false');
}

function getCard(title) {
    const class_name = title.toLowerCase().replaceAll(' ', '-');
    return document.querySelector(`.activity-card--${class_name}`)
}

function setActivityCards(activities, mode) {
    for(let i = 0; i < activities.length; i++) {
        const activity = activities[i];
        const card = getCard(activity.title);
        setCardFields(card, activity, mode);
    }
}
function setCardFields(card, activity, mode) {
    const h2 = card.querySelector('h2');
    h2.textContent = activity.title;

    const summary = card.querySelector('.time-tracking-summary-text');
    summary.textContent = `${activity.timeframes[mode].current}hrs`;

    const summary_subtext = card.querySelector('.time-tracking-summary-subtext');
    summary_subtext.textContent = `${card_settings[mode].description} - ${activity.timeframes[mode].previous} hrs`
}

init();