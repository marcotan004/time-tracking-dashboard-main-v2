const cardSettings = {
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
    const className = title.toLowerCase().replaceAll(' ', '-');
    return document.querySelector(`.activity-card--${className}`)
}

function setCardFields(card, activity, mode) {
    const timeframes = activity.timeframes;
    const h2 = card.querySelector('h2');
    h2.textContent = activity.title;

    const summary = card.querySelector('.time-tracking-summary-text');
    summary.textContent = `${timeframes[mode].current}hrs`;

    const summarySubtext = card.querySelector('.time-tracking-summary-subtext');
    summarySubtext.textContent = `${cardSettings[mode].description} - ${timeframes[mode].previous} hrs`
}

export function setActivityCards(activities, mode) {
    for(const activity of activities) {
        const card = getCard(activity.title);
        setCardFields(card, activity, mode);
    }
}