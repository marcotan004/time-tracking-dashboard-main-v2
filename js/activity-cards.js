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

function getCard(title) {
    const class_name = title.toLowerCase().replaceAll(' ', '-');
    return document.querySelector(`.activity-card--${class_name}`)
}

function setCardFields(card, activity, mode) {
    const timeframes = activity.timeframes;
    const h2 = card.querySelector('h2');
    h2.textContent = activity.title;

    const summary = card.querySelector('.time-tracking-summary-text');
    summary.textContent = `${timeframes[mode].current}hrs`;

    const summary_subtext = card.querySelector('.time-tracking-summary-subtext');
    summary_subtext.textContent = `${card_settings[mode].description} - ${timeframes[mode].previous} hrs`
}

export function setActivityCards(activities, mode) {
    for(let i = 0; i < activities.length; i++) {
        const activity = activities[i];
        const card = getCard(activity.title);
        setCardFields(card, activity, mode);
    }
}